package dev.vitorsilverio.bingoliz.dtos;

import dev.vitorsilverio.bingoliz.dtos.NumeroCartelaDto;
import dev.vitorsilverio.bingoliz.models.Cartela;
import lombok.Data;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

/**
 * A DTO for the {@link Cartela} entity
 */
@Data
public class CartelaDto implements Serializable {
    private final UUID id;
    private final List<NumeroCartelaDto> numerosCartela;
}