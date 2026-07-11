import { ptBR } from "../locales/pt-BR.ts";
import { AppIcons } from "../util/AppIcons.ts";
import style from "./paginaCabecalho.module.css";

interface PaginaCabacalhoProps {
    titulo: string;
    subtitulo: string;
    nomeBotao: string;
}

function PaginaCabacalho({
    titulo,
    subtitulo,
    nomeBotao,
}: PaginaCabacalhoProps) {
    return (
        <div className={style.cabecalho}>
            <div className={style.titulos}>
                <span className="tituloPagina">{titulo}</span>
                <span className="subtitulo">{subtitulo}</span>
            </div>

            <div className={style.botoes}>
                <button type="button">
                    <AppIcons.Download /> {ptBR.botao.baixarRelatorio}
                </button>
                <button type="button">
                    <AppIcons.Adicionar />
                    {nomeBotao}
                </button>
            </div>
        </div>
    );
}

export default PaginaCabacalho;
