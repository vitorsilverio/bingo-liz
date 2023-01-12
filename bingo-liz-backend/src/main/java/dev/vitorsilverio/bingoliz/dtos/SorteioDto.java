package dev.vitorsilverio.bingoliz.dtos;

import dev.vitorsilverio.bingoliz.models.Sorteio;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.io.Serializable;
import java.util.UUID;

/**
 * A DTO for the {@link Sorteio} entity
 */
@Data
public class SorteioDto implements Serializable {
    private final UUID id;
    @NotBlank
    private final String titulo;
}