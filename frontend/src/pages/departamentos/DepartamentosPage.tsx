import PaginaCabecalho from "../../components/PaginaCabecalho.tsx";
import {ptBR} from "../../locales/pt-BR.ts";
import {Card} from "../../components/Card.tsx";
import Input from "../../components/Input.tsx";
import {useState} from "react";
import styles from "../pages.module.css";
import {rotas} from "../../util/rotas.ts";
import {useNavigate} from "react-router-dom";

function DepartamentosPage() {
    const navigate = useNavigate();
    const [descricao, setDescricao] = useState("");
    const [codigo, setCodigo] = useState("");

    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo={ptBR.paginaDepartamento.listar.titulo}
                subtitulo={ptBR.paginaDepartamento.listar.subtitulo}
                nomeBotao={ptBR.botao.novoDepartamento}
                onClicarNovo={() => navigate(rotas.departamentos.cadastrar)}
            />
            <Card
                inputs={
                    <>
                        <Input
                            dataTest={
                                ptBR.paginaDepartamento.input.dataTest.descricao
                            }
                            id="cargo-descricao"
                            labelName={ptBR.paginaDepartamento.input.label}
                            name={ptBR.paginaDepartamento.input.nameDescricao}
                            onInputChange={e => setDescricao(e.target.value)}
                            value={descricao}
                            type="text"
                            placeholder={
                                ptBR.paginaDepartamento.input
                                    .placeholderDescricao
                            }
                        />
                        <Input
                            dataTest={
                                ptBR.paginaDepartamento.input.dataTest.codigo
                            }
                            id="codigo"
                            labelName={ptBR.paginaDepartamento.input.nameCodigo}
                            name={ptBR.paginaDepartamento.input.nameCodigo}
                            onInputChange={e => setCodigo(e.target.value)}
                            value={codigo}
                            type="text"
                            placeholder={
                                ptBR.paginaDepartamento.input.placeholderCodigo
                            }
                        />
                    </>
                }
                tabelaConfig={{
                    textoEditar: ptBR.tabela.cabecalho.editar,
                    tituloColuna1: ptBR.tabela.cabecalho.descricao,
                    tituloColuna2: ptBR.tabela.cabecalho.codigo,
                    routeId: ptBR.tabela.routeId.departamentos,
                    chavesDeAcesso: ptBR.tabela.chavesDeAcesso.departamentos,
                    rotaEdicao: rotas.departamentos.id,
                    chaveId: "codigoDepartamento",
                }}
            />
        </section>
    );
}

export default DepartamentosPage;
