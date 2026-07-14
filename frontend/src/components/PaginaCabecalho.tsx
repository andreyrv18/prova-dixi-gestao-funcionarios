import {ptBR} from "../locales/pt-BR.ts";
import {AppIcons} from "../util/AppIcons.ts";
import style from "./paginaCabecalho.module.css";
import Button from "./Button.tsx";

interface PaginaCabacalhoProps {
    titulo: string;
    subtitulo: string;
    nomeBotao?: string;
    onClicarNovo?: () => void;
}

function PaginaCabecalho({
    titulo,
    subtitulo,
    nomeBotao,
    onClicarNovo,
}: PaginaCabacalhoProps) {
    return (
        <div className={style.cabecalho}>
            <div className={style.titulos}>
                <span className="tituloPagina">{titulo}</span>
                <span className="subtitulo">{subtitulo}</span>
            </div>

            {nomeBotao ? (
                <div className={style.botoes}>
                    <Button
                        Icon={AppIcons.Download}
                        type="button"
                        name={ptBR.botao.baixarRelatorio}
                    />
                    <Button
                        Icon={AppIcons.Adicionar}
                        type="button"
                        name={nomeBotao}
                        onClick={onClicarNovo}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default PaginaCabecalho;
