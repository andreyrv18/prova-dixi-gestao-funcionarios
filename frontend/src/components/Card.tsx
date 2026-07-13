import style from "./card.module.css";
import React, { type PropsWithChildren } from "react";
import Tabela from "./Tabela.tsx";

interface CardProps {
    tabelaConfig?: {
        textoEditar: string;
        tituloColuna1: string;
        tituloColuna2: string;
        tituloColuna3?: string;
        tituloColuna4?: string;
        routeId: string;
        chavesDeAcesso: string[];
        rotaEdicao: string;
        chaveId: string;
    };
    inputs?: React.ReactNode;
}

export function Card({
    inputs,
    tabelaConfig,
    children,
}: PropsWithChildren<CardProps>) {
    return (
        <section className={style.card}>
            {inputs && <section className={style.cardInputs}>{inputs}</section>}

            {tabelaConfig && (
                <Tabela
                    textoEditar={tabelaConfig.textoEditar}
                    tituloColuna1={tabelaConfig.tituloColuna1}
                    tituloColuna2={tabelaConfig.tituloColuna2}
                    tituloColuna3={tabelaConfig.tituloColuna3}
                    tituloColuna4={tabelaConfig.tituloColuna4}
                    routeId={tabelaConfig.routeId}
                    chavesDeAcesso={tabelaConfig.chavesDeAcesso}
                    rotaEdicao={tabelaConfig.rotaEdicao}
                    chaveId={tabelaConfig.chaveId}
                ></Tabela>
            )}
            {children}
        </section>
    );
}
