import { Card } from "./Card.tsx";
import { ptBR } from "../locales/pt-BR.ts";
import styles from "./informacoesGerais.module.css";
import type { ReactNode } from "react";

function InformacoesGerais({ children }: { children: ReactNode }) {
    return (
        <>
            <Card>
                <h1>{ptBR.card.titulo}</h1>

                <section className={styles.inputs}>{children}</section>
            </Card>
        </>
    );
}

export default InformacoesGerais;
