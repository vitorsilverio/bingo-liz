package dev.vitorsilverio.bingoliz.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartelaPremiadaDto {

    private UUID id;
    private String nome;
}
