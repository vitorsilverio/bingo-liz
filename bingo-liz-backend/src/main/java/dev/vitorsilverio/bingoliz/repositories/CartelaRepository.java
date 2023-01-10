package dev.vitorsilverio.bingoliz.repositories;

import dev.vitorsilverio.bingoliz.models.Cartela;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CartelaRepository extends JpaRepository<Cartela, UUID> {
}
