package dev.vitorsilverio.bingoliz.controllers.autenticacao;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class Registro {

    @NotBlank
    private String usuario;

    @NotBlank
    private String senha;

}
