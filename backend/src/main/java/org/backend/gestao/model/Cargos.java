package org.backend.gestao.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

@Entity
@Table(name = "cargos")
public class Cargos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private @Nullable Long id;

    @Column(name ="codigo_do_cargo", nullable=false, unique=true )
    private int codigoDoCargo;
    @Column(name ="descricao_do_cargo", nullable=false, unique=true )
    private String descricaoDoCargo;

    public Cargos() {}

    public Cargos(@Nullable Long id, int codigoDoCargo, String descricaoDoCargo) {
        this.id = id;
        this.codigoDoCargo = codigoDoCargo;
        this.descricaoDoCargo = descricaoDoCargo;
    }

    @Nullable
    public Long getId() {
        return id;
    }

    public void setId( @Nullable Long id) {
        this.id = id;
    }
    public String getDescricaoDoCargo() {
        return descricaoDoCargo;
    }

    public void setDescricaoDoCargo(String descricaoDoCargo) {
        this.descricaoDoCargo = descricaoDoCargo;
    }

    public int getCodigoDoCargo() {
        return codigoDoCargo;
    }

    public void setCodigoDoCargo(int codigoDoCargo) {
        this.codigoDoCargo = codigoDoCargo;
    }

}
