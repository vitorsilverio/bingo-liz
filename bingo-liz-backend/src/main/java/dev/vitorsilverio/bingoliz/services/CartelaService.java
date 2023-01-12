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

import java.util.Collections;
import java.util.UUID;
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
            cartela = cartelaRepository.save(cartela);
        }
        return new CartelaDto(cartela.getId(), cartela.getNumerosCartela().stream().map(
                n -> new NumeroCartelaDto(n.getId(), n.getNumero(), n.isMarcado(), n.getOrdem())
        ).toList());
    }

    private void gerarNumerosCartela(Cartela cartela) {
        var numerosPossiveis = IntStream
                .range(1, 76)
                .boxed()
                .toList();
        Collections.shuffle(numerosPossiveis);
        cartela.getNumerosCartela().addAll(numerosPossiveis.stream().limit(24).sorted().map(
                i -> {
                    var ordem = 0;
                    return NumeroCartela.builder()
                        .cartela(cartela)
                        .marcado(false)
                        .numero(i)
                        .ordem(ordem++)
                        .build(); }
        ).toList());
    }
}
