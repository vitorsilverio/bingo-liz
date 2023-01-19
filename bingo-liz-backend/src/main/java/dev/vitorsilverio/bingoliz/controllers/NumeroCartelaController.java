package dev.vitorsilverio.bingoliz.controllers;

import dev.vitorsilverio.bingoliz.dtos.NumeroCartelaDto;
import dev.vitorsilverio.bingoliz.services.NumeroCartelaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/numerocartela")
@RequiredArgsConstructor
public class NumeroCartelaController {

    private final NumeroCartelaService numeroCartelaService;

    @PostMapping("/{id}")
    public ResponseEntity<NumeroCartelaDto> marcar(@PathVariable UUID id, @RequestBody NumeroCartelaDto numeroCartelaDto){
        return ResponseEntity.ok(numeroCartelaService.mudarMarcacao(id, numeroCartelaDto));
    }
}
