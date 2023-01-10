package dev.vitorsilverio.bingoliz.models;


import jakarta.persistence.MappedSuperclass;

import java.util.UUID;

@MappedSuperclass
public abstract class EntidadeBase {

    public abstract UUID getId();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        EntidadeBase entidadeBase = (EntidadeBase) o;

        return getId() != null ? getId().equals(entidadeBase.getId()) : entidadeBase.getId() == null;
    }

    @Override
    public int hashCode() {
        return getId() != null ? getId().hashCode() : 0;
    }
}
