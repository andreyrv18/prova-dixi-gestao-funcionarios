import style from "./tabela.module.css";
import {AppIcons} from "../util/AppIcons.ts";
import {Link, useRouteLoaderData} from "react-router-dom";
import ModalEditarCadastrar from "./ModalEditarCadastrar.tsx";
import {useState} from "react";
import {ptBR} from "../locales/pt-BR.ts";
import {formatarCPF} from "../util/formatar.ts";

interface TabelaProps {
    textoEditar: string;
    tituloColuna1?: string;
    tituloColuna2?: string;
    tituloColuna3?: string;
    tituloColuna4?: string;
    routeId: string;
    chavesDeAcesso: string[];
    rotaEdicao: string;
    chaveId: string;
}

function Tabela({
    textoEditar,
    tituloColuna1,
    tituloColuna2,
    tituloColuna3,
    tituloColuna4,
    routeId,
    chavesDeAcesso,
    rotaEdicao,
    chaveId,
}: TabelaProps) {
    const [modalAberto, setModalAberto] = useState(false);
    const [modoModal, setModoModal] = useState<"cadastrar" | "editar">(
        "cadastrar",
    );

    const data = useRouteLoaderData(routeId) as any;
    let tabelaConteudo: Record<string, any>[] = [];

    if (data?.records) {
        // Verifica se records já é a lista (Array) direta (Caso do GetVinculoByCpf)
        if (Array.isArray(data.records)) {
            tabelaConteudo = data.records;
        }
        // Se não for array, verifica se tem paginação (Caso do listar todos)
        else if (data.records.content) {
            tabelaConteudo = data.records.content;
        }
    } else if (data?.content) {
        tabelaConteudo = data.content;
    }

    const abrirModalCadastro = () => {
        setModoModal("cadastrar");
        setModalAberto(true);
    };

    const hasCPF: string | undefined = chavesDeAcesso.find(
        value => value == "cpf",
    );
    return (
        <div className={style.containerTabela}>
            <table className={style.tabela}>
                <thead>
                    <tr className={style.empresasTh}>
                        {tituloColuna3 !== "" ? (
                            <>
                                <th>{ptBR.tabela.cabecalho.vinculo}</th>
                                <th className={style.empresas}>
                                    <button
                                        type="button"
                                        onClick={abrirModalCadastro}
                                    >
                                        <AppIcons.Adicionar />
                                        {ptBR.botao.novoVinculo}
                                    </button>
                                </th>
                            </>
                        ) : (
                            <th></th>
                        )}
                    </tr>
                    <tr className={style.linhaCabecalho}>
                        <th className={style.colEditar}>{textoEditar}</th>
                        <th>{tituloColuna1}</th>
                        <th>{tituloColuna2}</th>
                        <th>{tituloColuna3}</th>
                        <th>{tituloColuna4}</th>
                    </tr>
                </thead>
                <tbody className={style.corpo}>
                    {tabelaConteudo.map((item, index) => (
                        <tr className={style.linha} key={index}>
                            <td className={style.colEditar}>
                                <Link
                                    to={rotaEdicao.replace(
                                        ":id",
                                        String(item[chaveId]),
                                    )}
                                >
                                    <AppIcons.Editar className={style.icones} />
                                </Link>
                            </td>

                            <td>{item[chavesDeAcesso[0]]}</td>
                            {hasCPF ? (
                                <td>{formatarCPF(item[chavesDeAcesso[1]])}</td>
                            ) : (
                                <td>{item[chavesDeAcesso[1]]}</td>
                            )}
                            {tituloColuna3 && (
                                <td>{item[chavesDeAcesso[2]]}</td>
                            )}
                            {tituloColuna4 && (
                                <td>{item[chavesDeAcesso[3]]}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalEditarCadastrar
                isOpen={modalAberto}
                onClose={() => setModalAberto(false)}
                titulo={
                    modoModal === "cadastrar"
                        ? "Cadastrar Novo Funcionário"
                        : "Editar Funcionário"
                }
            />
        </div>
    );
}

export default Tabela;
