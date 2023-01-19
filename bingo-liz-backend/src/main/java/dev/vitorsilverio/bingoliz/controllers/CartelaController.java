package dev.vitorsilverio.bingoliz.controllers;

import dev.vitorsilverio.bingoliz.dtos.CartelaDto;
import dev.vitorsilverio.bingoliz.services.CartelaService;
import jakarta.annotation.security.PermitAll;
import jakarta.validation.constraints.NotNull;
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
    @PermitAll
    public ResponseEntity<CartelaDto> cartela(@NotNull String sorteio) {
        return ResponseEntity.ok(cartelaService.minhaCartela(UUID.fromString(sorteio)));
    }
}
