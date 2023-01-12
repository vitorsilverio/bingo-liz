package dev.vitorsilverio.bingoliz.controllers;

import dev.vitorsilverio.bingoliz.dtos.SorteioDto;
import dev.vitorsilverio.bingoliz.services.SorteioService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
