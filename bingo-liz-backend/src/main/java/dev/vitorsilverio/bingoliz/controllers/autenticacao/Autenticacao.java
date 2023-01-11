package dev.vitorsilverio.bingoliz.controllers.autenticacao;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Autenticacao {
    private String token;
}
