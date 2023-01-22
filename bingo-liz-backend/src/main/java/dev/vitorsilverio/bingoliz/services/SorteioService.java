package dev.vitorsilverio.bingoliz.services;

import dev.vitorsilverio.bingoliz.dtos.CartelaPremiadaDto;
import dev.vitorsilverio.bingoliz.dtos.NumerosSorteadosDto;
import dev.vitorsilverio.bingoliz.dtos.SorteioDto;
import dev.vitorsilverio.bingoliz.models.NumeroSorteado;
import dev.vitorsilverio.bingoliz.models.Sorteio;
import dev.vitorsilverio.bingoliz.repositories.CartelaRepository;
import dev.vitorsilverio.bingoliz.repositories.NumeroSorteadoRepository;
import dev.vitorsilverio.bingoliz.repositories.SorteioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SorteioService {

    private final SorteioRepository sorteioRepository;
    private final NumeroSorteadoRepository numeroSorteadoRepository;
    private final CartelaRepository cartelaRepository;

    public SorteioDto novoSorteio(SorteioDto sorteioDto) {
        var sorteio = new Sorteio();
        sorteio.setTitulo(sorteioDto.getTitulo());
        sorteio.setAtivo(true);
        sorteio.setDataCriacao(LocalDateTime.now());
        sorteio = sorteioRepository.save(sorteio);
        return new SorteioDto(sorteio.getId(), sorteio.getTitulo());
    }

    public List<SorteioDto> getSorteiosAtivos() {
        return sorteioRepository.findByAtivoOrderByDataCriacaoDesc(true).stream().map(s -> new SorteioDto(s.getId(), s.getTitulo())).toList();
    }

    @Transactional
    public NumerosSorteadosDto getNumerosSorteados(UUID id) {
        var sorteio = sorteioRepository.findById(id).orElseThrow();
        var numerosSorteadosDto = new NumerosSorteadosDto();
        numerosSorteadosDto.setNumerosSorteados(sorteio.getNumerosSorteados().stream().map(n -> n.getNumero()).toList());
        return numerosSorteadosDto;
    }

    public void adicionarNumeroSorteado(UUID id, Integer numero) {
        var sorteio = sorteioRepository.findById(id).orElseThrow();
        var numeroSorteado = new NumeroSorteado();
        numeroSorteado.setNumero(numero);
        numeroSorteado.setSorteio(sorteio);
        numeroSorteado.setMomento(LocalDateTime.now());
        numeroSorteadoRepository.save(numeroSorteado);
    }

    @Transactional
    public List<CartelaPremiadaDto> getCartelasQueChamaramBingo(UUID id) {
        var sorteio = sorteioRepository.findById(id).orElseThrow();
        var cartelas = cartelaRepository.findAllByBingoAndSorteio(true, sorteio);
        return cartelas.stream().map(c -> new CartelaPremiadaDto(c.getId(), c.getUsuario().getNomeUsuario())).toList();
    }
}
