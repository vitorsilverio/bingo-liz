package dev.vitorsilverio.bingoliz.repositories;

import dev.vitorsilverio.bingoliz.models.Cartela;
import dev.vitorsilverio.bingoliz.models.Sorteio;
import dev.vitorsilverio.bingoliz.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface CartelaRepository extends JpaRepository<Cartela, UUID> {
    Optional<Cartela> findFirstBySorteioAndUsuario(Sorteio sorteio, Usuario usuario);
}
