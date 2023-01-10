package dev.vitorsilverio.bingoliz.repositories;

import dev.vitorsilverio.bingoliz.models.Sorteio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SorteioRepository extends JpaRepository<Sorteio, UUID> {
}
