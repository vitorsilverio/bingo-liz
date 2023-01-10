package dev.vitorsilverio.bingoliz.repositories;

import dev.vitorsilverio.bingoliz.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UsuarioRepository extends JpaRepository<Usuario, UUID> {

    Optional<Usuario> findByNomeUsuario(String usuario);
}
