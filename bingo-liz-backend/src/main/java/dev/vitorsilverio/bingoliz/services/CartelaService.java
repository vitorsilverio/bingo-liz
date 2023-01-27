package dev.vitorsilverio.bingoliz.services;

import dev.vitorsilverio.bingoliz.dtos.CartelaDto;
import dev.vitorsilverio.bingoliz.dtos.NumeroCartelaDto;
import dev.vitorsilverio.bingoliz.models.Cartela;
import dev.vitorsilverio.bingoliz.models.NumeroCartela;
import dev.vitorsilverio.bingoliz.repositories.CartelaRepository;
import dev.vitorsilverio.bingoliz.repositories.SorteioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
public class CartelaService {

    private final AutenticacaoService autenticacaoService;
    private final CartelaRepository cartelaRepository;
    private final SorteioRepository sorteioRepository;

    @Transactional
    public CartelaDto minhaCartela(UUID sorteioId) {
        var sorteio = sorteioRepository.findById(sorteioId).orElseThrow();
        var usuario = autenticacaoService.getUsuarioAtivo().orElseThrow();
        var cartela = cartelaRepository.findFirstBySorteioAndUsuario(sorteio, usuario).orElse(new Cartela());
        if (cartela.getNumerosCartela().isEmpty()) {
            gerarNumerosCartela(cartela);
            cartela.setSorteio(sorteio);
            cartela.setUsuario(usuario);
            cartela.setDataCriacao(LocalDateTime.now());
            cartela = cartelaRepository.save(cartela);
        }
        return new CartelaDto(cartela.getId(), cartela.getBingo(), cartela.getNumerosCartela().stream().map(
                n -> new NumeroCartelaDto(n.getId(), n.getNumero(), n.isMarcado(), n.getOrdem())
        ).toList());
    }

    private void gerarNumerosCartela(Cartela cartela) {
        var numerosPossiveis = new ArrayList<>(IntStream
                .range(1, 76)
                .boxed()
                .toList());
        Collections.shuffle(numerosPossiveis);
        final var ordem = new AtomicInteger(1);
        cartela.getNumerosCartela().addAll(numerosPossiveis.stream().limit(25).sorted().map(
                i -> NumeroCartela.builder()
                        .cartela(cartela)
                        .marcado(false)
                        .numero(i)
                        .ordem(ordem.getAndIncrement())
                        .build()
        ).toList());
    }

    public void chamarBingo(UUID id) {
        var usuario = autenticacaoService.getUsuarioAtivo().orElseThrow();
        var cartela = cartelaRepository.findFirstByIdAndUsuario(id, usuario).orElseThrow();
        cartela.setBingo(true);
        cartelaRepository.save(cartela);
    }
}
