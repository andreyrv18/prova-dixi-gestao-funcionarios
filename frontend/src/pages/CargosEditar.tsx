import {Card} from "../components/Card.tsx";
import Input from "../components/Input.tsx";
import {ptBR} from "../locales/pt-BR.ts";
import {rotas} from "../util/rotas.ts";
import {useState} from "react";
import PaginaCabecalho from "../components/PaginaCabecalho.tsx";
import styles from "./pages.module.css";

function CargosEditar() {
    const [descricao, setDescricao] = useState("");
    const [codigo, setCodigo] = useState("");
    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo={ptBR.paginaCargo.listar.titulo}
                subtitulo={ptBR.paginaCargo.listar.subtitulo}
                nomeBotao={ptBR.botao.novoCargo}
            />
            <Card
                inputs={
                    <>
                        <Input
                            dataTest={ptBR.paginaCargo.input.dataTest.descricao}
                            id="cargo-descricao"
                            labelName={ptBR.paginaCargo.input.label}
                            name={ptBR.paginaCargo.input.nameDescricao}
                            onInputChange={e => setDescricao(e.target.value)}
                            value={descricao}
                            type="text"
                            placeholder={
                                ptBR.paginaCargo.input.placeholderDescricao
                            }
                        />
                        <Input
                            dataTest={ptBR.paginaCargo.input.dataTest.codigo}
                            id="codigo"
                            labelName={ptBR.paginaCargo.input.nameCodigo}
                            name={ptBR.paginaCargo.input.nameCodigo}
                            onInputChange={e => setCodigo(e.target.value)}
                            value={codigo}
                            type="text"
                            placeholder={
                                ptBR.paginaCargo.input.placeholderCodigo
                            }
                        />
                    </>
                }
                tabelaConfig={{
                    textoEditar: ptBR.tabela.cabecalho.editar,
                    tituloColuna1: ptBR.tabela.cabecalho.nome,
                    tituloColuna2: ptBR.tabela.cabecalho.codigo,
                    routeId: ptBR.tabela.routeId.cargos,
                    chavesDeAcesso: ptBR.tabela.chavesDeAcesso.cargos,
                    rotaEdicao: rotas.cargos.id,
                    chaveId: "codigo",
                }}
            />
        </section>
    );
}

export default CargosEditar;
