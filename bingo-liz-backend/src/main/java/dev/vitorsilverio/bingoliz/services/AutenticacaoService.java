package dev.vitorsilverio.bingoliz.services;

import dev.vitorsilverio.bingoliz.controllers.autenticacao.Autenticacao;
import dev.vitorsilverio.bingoliz.controllers.autenticacao.Credenciais;
import dev.vitorsilverio.bingoliz.controllers.autenticacao.Registro;
import dev.vitorsilverio.bingoliz.models.Usuario;
import dev.vitorsilverio.bingoliz.models.UsuarioTipo;
import dev.vitorsilverio.bingoliz.repositories.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AutenticacaoService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public Autenticacao registrar(Registro registro) {
        var usuario = new Usuario();
        usuario.setNomeUsuario(registro.getUsuario());
        usuario.setSenha(passwordEncoder.encode(registro.getSenha()));
        usuario.setAtivo(true);
        usuario.setUsuarioTipo(UsuarioTipo.CONVIDADO);
        usuario = usuarioRepository.save(usuario);
        return Autenticacao.builder()
                .token(jwtService.generateToken(usuario))
                .build();
    }

    public Autenticacao autenticar(Credenciais credenciais) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(credenciais.getUsuario(), credenciais.getSenha())
        );
        var usuario = usuarioRepository.findByNomeUsuario(credenciais.getUsuario()).orElseThrow();
        return Autenticacao.builder()
                .token(jwtService.generateToken(usuario))
                .build();
    }
}
