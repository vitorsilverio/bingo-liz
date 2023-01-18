package dev.vitorsilverio.bingoliz.services;

import dev.vitorsilverio.bingoliz.dtos.SorteioDto;
import dev.vitorsilverio.bingoliz.models.Sorteio;
import dev.vitorsilverio.bingoliz.repositories.SorteioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SorteioService {

    private final SorteioRepository sorteioRepository;

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
}
