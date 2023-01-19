package dev.vitorsilverio.bingoliz.repositories;

import dev.vitorsilverio.bingoliz.models.NumeroCartela;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NumeroCartelaRepository extends JpaRepository<NumeroCartela, UUID> {
}
