package dev.vitorsilverio.bingoliz.services;

import dev.vitorsilverio.bingoliz.repositories.UsuarioRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class UserDetailsServiceImpl  implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var usuario = usuarioRepository.findByNomeUsuario(username).orElseThrow(() -> new UsernameNotFoundException(username));
        return new User(usuario.getNomeUsuario(), usuario.getSenha(), usuario.getAtivo(), true, true, true, usuario.getAuthorities());
    }
}
