import style from "./tabela.module.css";
import {AppIcons} from "../util/AppIcons.ts";
import {Link, useParams, useRouteLoaderData} from "react-router-dom";
import ModalEditarCadastrar from "./ModalEditarCadastrar.tsx";
import {useState} from "react";
import {ptBR} from "../locales/pt-BR.ts";
import {formatarCPF} from "../util/formatar.ts";
import Button from "./Button.tsx";
import type {IVinculoItem} from "../interfaces";

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
    onRowClick?: (item: Record<string, any>) => void;
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
    onRowClick,
}: TabelaProps) {
    const [modalAberto, setModalAberto] = useState(false);
    const [modoModal, setModoModal] = useState<"cadastrar" | "editar">(
        "cadastrar",
    );
    const [itemSelecionado, setItemSelecionado] = useState<IVinculoItem | null>(
        null,
    );
    const { id } = useParams();
    const data = useRouteLoaderData(routeId) as any;
    let tabelaConteudo: Record<string, any>[] = [];

    if (data?.records) {
        if (Array.isArray(data.records)) {
            tabelaConteudo = data.records;
        } else if (data.records.content) {
            tabelaConteudo = data.records.content;
        } else if (data.records.vinculos) {
            tabelaConteudo = data.records.vinculos;
        }
    } else if (data?.content) {
        tabelaConteudo = data.content;
    }

    const abrirModalCadastro = () => {
        setModoModal("cadastrar");
        setItemSelecionado(null);
        setModalAberto(true);
    };

    const abrirModalEdicao = (item: any) => {
        setModoModal("editar");
        setItemSelecionado(item);
        setModalAberto(true);
    };

    const hasCPF: string | undefined = chavesDeAcesso.find(
        value => value == "cpf",
    );
    return (
        <div className={style.containerTabela}>
            <table className={style.tabela}>
                <thead>
                    {rotaEdicao === "" && (
                        <tr className={style.empresasTh}>
                            <th>{ptBR.tabela.cabecalho.vinculo}</th>
                            <th className={style.empresas}>
                                {id && (
                                    <Button
                                        type="button"
                                        Icon={AppIcons.Adicionar}
                                        name={ptBR.botao.novoVinculo}
                                        onClick={abrirModalCadastro}
                                    />
                                )}
                            </th>
                        </tr>
                    )}

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
                        <tr
                            className={style.linha}
                            key={index}
                            onClick={() => onRowClick && onRowClick(item)}
                            style={onRowClick ? { cursor: "pointer" } : {}}
                        >
                            <td
                                className={style.colEditar}
                                onClick={e => e.stopPropagation()}
                            >
                                {rotaEdicao !== "" ? (
                                    <Link
                                        to={rotaEdicao.replace(
                                            ":id",
                                            String(item[chaveId]),
                                        )}
                                    >
                                        <AppIcons.Editar
                                            className={style.icones}
                                        />
                                    </Link>
                                ) : (
                                    <Button
                                        type="button"
                                        Icon={AppIcons.Editar}
                                        name=""
                                        onClick={() => abrirModalEdicao(item)}
                                    />
                                )}
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
                modo={modoModal}
                item={itemSelecionado}
                titulo={
                    modoModal === "cadastrar"
                        ? "Novo Vínculo"
                        : "Editar Vínculo"
                }
            />
        </div>
    );
}

export default Tabela;
