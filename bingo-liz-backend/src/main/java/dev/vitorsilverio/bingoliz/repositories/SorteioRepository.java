package dev.vitorsilverio.bingoliz.repositories;

import dev.vitorsilverio.bingoliz.models.Sorteio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface SorteioRepository extends JpaRepository<Sorteio, UUID> {
    List<Sorteio> findByAtivoOrderByDataCriacaoDesc(boolean ativo);
}
