package dev.vitorsilverio.bingoliz.services;

import dev.vitorsilverio.bingoliz.dtos.NumeroCartelaDto;
import dev.vitorsilverio.bingoliz.repositories.NumeroCartelaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class NumeroCartelaService {

    private final NumeroCartelaRepository numeroCartelaRepository;

    public NumeroCartelaDto mudarMarcacao(UUID id, NumeroCartelaDto numeroCartelaDto){
        var numeroCartela = numeroCartelaRepository.findById(id).orElseThrow();
        numeroCartela.setMarcado(numeroCartelaDto.isMarcado());
        numeroCartela = numeroCartelaRepository.save(numeroCartela);
        return new NumeroCartelaDto(numeroCartela.getId(),numeroCartela.getNumero(), numeroCartela.isMarcado(), numeroCartela.getOrdem());
    }
}
