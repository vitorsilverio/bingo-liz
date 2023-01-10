package dev.vitorsilverio.bingoliz.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "sorteio")
@Getter
@Setter
public class Sorteio extends EntidadeBase {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private Boolean ativo;

    @JoinColumn(name = "data_criacao")
    private LocalDateTime dataCriacao;

    @OneToMany(mappedBy = "sorteio")
    private List<NumeroSorteado> numerosSorteados = new ArrayList<>();

    @OneToMany(mappedBy = "sorteio")
    private List<Cartela> cartelas = new ArrayList<>();

}
