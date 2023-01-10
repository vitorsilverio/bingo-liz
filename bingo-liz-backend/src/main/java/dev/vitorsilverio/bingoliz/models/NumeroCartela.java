package dev.vitorsilverio.bingoliz.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "numero_cartela")
@Getter
@Setter
public class NumeroCartela extends EntidadeBase{

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", nullable = false)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "cartela_id")
    private Cartela cartela;

    private Integer numero;

    private boolean marcado;

    private Integer ordem;

}