package dev.vitorsilverio.bingoliz.repositories;

import dev.vitorsilverio.bingoliz.models.NumeroSorteado;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NumeroSorteadoRepository extends JpaRepository<NumeroSorteado, UUID> {
}
