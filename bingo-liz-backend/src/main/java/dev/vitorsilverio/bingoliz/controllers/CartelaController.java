package dev.vitorsilverio.bingoliz.controllers;

import dev.vitorsilverio.bingoliz.dtos.CartelaDto;
import dev.vitorsilverio.bingoliz.services.CartelaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/cartela")
@RequiredArgsConstructor
public class CartelaController {

    private final CartelaService cartelaService;

    @GetMapping
    public ResponseEntity<CartelaDto> cartela(UUID sorteio) {
        return ResponseEntity.ok(cartelaService.minhaCartela(sorteio));
    }
}
