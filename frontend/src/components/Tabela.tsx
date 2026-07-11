import style from "./tabela.module.css";
import {AppIcons} from "../util/AppIcons.ts";
import {Link, useRouteLoaderData} from "react-router-dom";
import {rotas} from "../util/rotas.ts";

interface TabelaProps {
    textoEditar: string;
    tituloColuna1?: string;
    tituloColuna2?: string;
    routeId: string;
    chavesDeAcesso: string[];
    // rotaEdicao: string;
}

function Tabela({
    textoEditar,
    tituloColuna1,
    tituloColuna2,
    routeId,
    chavesDeAcesso,
    // rotaEdicao,
}: TabelaProps) {
    const data = useRouteLoaderData(routeId) as
        { records: Record<string, never>[] } | undefined;

    const tabelaConteudo = data?.records || [];
    return (
        <div className={style.containerTabela}>
            <table className={style.tabela}>
                <thead className={style.linhaCabecalho}>
                    <tr>
                        <th className={style.colEditar}>{textoEditar}</th>
                        <th>{tituloColuna1}</th>
                        <th>{tituloColuna2}</th>
                    </tr>
                </thead>
                <tbody className={style.corpo}>
                    {tabelaConteudo.map((item, index) => (
                        <tr className={style.linha} key={index}>
                            <td className={style.colEditar}>
                                <Link to={rotas.funcionarios.editar}>
                                    <AppIcons.Editar className={style.icones} />
                                </Link>
                            </td>
                            <td>{item[chavesDeAcesso[0]]}</td>
                            <td>{item[chavesDeAcesso[1]]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tabela;
