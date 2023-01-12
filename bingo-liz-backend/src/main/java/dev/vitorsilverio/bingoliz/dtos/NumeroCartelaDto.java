package dev.vitorsilverio.bingoliz.dtos;

import dev.vitorsilverio.bingoliz.models.NumeroCartela;
import lombok.Data;

import java.io.Serializable;
import java.util.UUID;

/**
 * A DTO for the {@link NumeroCartela} entity
 */
@Data
public class NumeroCartelaDto implements Serializable {
    private final UUID id;
    private final Integer numero;
    private final boolean marcado;
    private final Integer ordem;
}