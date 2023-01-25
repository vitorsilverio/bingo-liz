package dev.vitorsilverio.bingoliz.controllers.autenticacao;

import dev.vitorsilverio.bingoliz.services.AutenticacaoService;
import jakarta.annotation.security.PermitAll;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AutenticacaoController {

    private final AutenticacaoService autenticacaoService;

    @PostMapping("/registrar")
    @PermitAll
    public ResponseEntity<Autenticacao> registrar(@RequestBody @Valid Registro registroUsuario){
        return ResponseEntity.ok(autenticacaoService.registrar(registroUsuario));
    }

    @PostMapping("/entrar")
    @PermitAll
    public ResponseEntity<Autenticacao> entrar(@RequestBody @Valid Credenciais credenciais){
        return ResponseEntity.ok(autenticacaoService.autenticar(credenciais));
    }

}
