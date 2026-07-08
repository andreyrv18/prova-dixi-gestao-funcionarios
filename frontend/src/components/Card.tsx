import style from "./card.module.css";
import React, { type PropsWithChildren } from "react";
import Tabela from "./Tabela.tsx";

interface CardType {
    tabelaCabecalho?: {
        editar: string;
        nome?: string;
        cpf?: string;
        codigo?: string;
        descricao?: string;
    };
    inputs?: React.ReactNode;
}

export function Card({ inputs, tabelaCabecalho }: PropsWithChildren<CardType>) {
    return (
        <section className={style.card}>
            {inputs && <section className={style.cardInputs}>{inputs}</section>}

            {tabelaCabecalho && (
                <Tabela
                    nome={tabelaCabecalho.nome}
                    cpf={tabelaCabecalho.cpf}
                    codigo={tabelaCabecalho.codigo}
                    descricao={tabelaCabecalho.descricao}
                    editar={tabelaCabecalho.editar}
                ></Tabela>
            )}
        </section>
    );
}
