package dev.vitorsilverio.bingoliz.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "cartela")
@Getter
@Setter
public class Cartela extends EntidadeBase{

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "sorteio_id")
    private Sorteio sorteio;

    @OneToMany(mappedBy = "cartela", cascade = CascadeType.ALL)
    private List<NumeroCartela> numerosCartela = new java.util.ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @Column(name = "data_criacao")
    private LocalDateTime dataCriacao;

    private Boolean bingo;

}