package dev.vitorsilverio.bingoliz.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "usuario")
@Getter
@Setter
public class Usuario extends EntidadeBase {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", nullable = false)
    private UUID id;

    @Column(name = "nome_usuario")
    private String nomeUsuario;

    private String senha;

    private Boolean ativo;

    @Transient
    public List<GrantedAuthority> getAuthorities() {
        //FIXME criar roles
        return List.of(new SimpleGrantedAuthority("CONVIDADO"));
    }
}