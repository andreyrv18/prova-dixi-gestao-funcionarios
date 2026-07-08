import style from "./tabela.module.css";
import {AppIcons} from "./AppIcons.ts";

interface TabelaProps {
    editar: string;
    nome?: string;
    cpf?: string;
    descricao?: string;
    codigo?: string;
    isCabecalho?: boolean;
}

function Tabela({
    editar,
    nome,
    cpf,
    codigo,
    descricao,
    isCabecalho = true,
}: TabelaProps) {
    const classesDaLinha = isCabecalho
        ? `${style.linha} ${style.linhaCabecalho}`
        : style.linha;

    return (
        <section className={style.tabela}>
            <section className={classesDaLinha}>
                <p>{editar}</p>

                <p>{nome || descricao}</p>

                <p>{cpf || codigo}</p>
            </section>
            <section className={style.corpo}>
                <AppIcons.Editar />
            </section>
        </section>
    );
}

export default Tabela;
