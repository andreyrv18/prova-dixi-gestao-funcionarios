import style from "./card.module.css";
import React, { type PropsWithChildren } from "react";
import Tabela from "./Tabela.tsx";

interface CardProps {
    tabelaConfig?: {
        textoEditar: string;
        tituloColuna1: string;
        tituloColuna2: string;
        routeId: string;
        chavesDeAcesso: string[];
        // rotaEdicao: string;
    };
    inputs?: React.ReactNode;
}

export function Card({ inputs, tabelaConfig }: PropsWithChildren<CardProps>) {
    return (
        <section className={style.card}>
            {inputs && <section className={style.cardInputs}>{inputs}</section>}

            {tabelaConfig && (
                <Tabela
                    textoEditar={tabelaConfig.textoEditar}
                    tituloColuna1={tabelaConfig.tituloColuna1}
                    tituloColuna2={tabelaConfig.tituloColuna2}
                    routeId={tabelaConfig.routeId}
                    chavesDeAcesso={tabelaConfig.chavesDeAcesso}
                ></Tabela>
            )}
        </section>
    );
}
