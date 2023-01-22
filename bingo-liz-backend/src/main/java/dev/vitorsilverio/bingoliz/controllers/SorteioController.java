package dev.vitorsilverio.bingoliz.controllers;

import dev.vitorsilverio.bingoliz.dtos.CartelaPremiadaDto;
import dev.vitorsilverio.bingoliz.dtos.NumerosSorteadosDto;
import dev.vitorsilverio.bingoliz.dtos.SorteioDto;
import dev.vitorsilverio.bingoliz.services.SorteioService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/sorteio")
@RequiredArgsConstructor
public class SorteioController {

    private final SorteioService sorteioService;

    @PostMapping
    @PreAuthorize("hasRole('PAPAI')")
    public ResponseEntity<SorteioDto> criarSorteio(@RequestBody @Valid SorteioDto sorteioDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(sorteioService.novoSorteio(sorteioDto));
    }

    @GetMapping
    public ResponseEntity<List<SorteioDto>> sorteios(){
        return ResponseEntity.ok(sorteioService.getSorteiosAtivos());
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('PAPAI')")
    public ResponseEntity<NumerosSorteadosDto> numerosJaSorteados(@PathVariable UUID id) {
        return ResponseEntity.ok(sorteioService.getNumerosSorteados(id));
    }

    @PostMapping("/{id}")
    @PreAuthorize("hasRole('PAPAI')")
    public ResponseEntity<NumerosSorteadosDto> numerosJaSorteados(@PathVariable UUID id, @RequestBody Integer numero) {
        sorteioService.adicionarNumeroSorteado(id, numero);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping("/{id}/cartelasbingo")
    @PreAuthorize("hasRole('PAPAI')")
    public ResponseEntity<List<CartelaPremiadaDto>> pesquisarCartelasQueChamaramBingo(@PathVariable UUID id) {
        return ResponseEntity.ok(sorteioService.getCartelasQueChamaramBingo(id));
    }

}
