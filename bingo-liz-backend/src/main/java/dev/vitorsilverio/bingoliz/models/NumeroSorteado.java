package dev.vitorsilverio.bingoliz.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "numero_sorteado")
@Getter
@Setter
public class NumeroSorteado extends EntidadeBase{

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "sorteio_id")
    private Sorteio sorteio;

    private Integer numero;

    private LocalDateTime momento;

}