import styles from "./pages.module.css";
import PaginaCabecalho from "../components/PaginaCabecalho.tsx";
import {ptBR} from "../locales/pt-BR.ts";
import {Card} from "../components/Card.tsx";
import InformacoesGerais from "../components/InformacoesGerais.tsx";
import {rotas} from "../util/rotas.ts";
import Input from "../components/Input.tsx";
import BotoesPaginaEditar from "../components/BotoesPaginaEditar.tsx";

export function FuncionariosEditar() {
    // const data = useLoaderData() as { records: IFuncionarios };
    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo={ptBR.paginaFuncionario.editar.titulo}
                subtitulo={ptBR.paginaFuncionario.editar.subtitulo}
            />

            {/*<section className={styles.paginaEditarFuncionario}>*/}
            <InformacoesGerais>
                <Input
                    dataTest={"a"}
                    id={ptBR.input.nomeDoFuncionario}
                    labelName={ptBR.input.nomeDoFuncionario}
                    name={ptBR.input.nomeDoFuncionario}
                    onInputChange={() => ""}
                    value={""}
                    type={"text"}
                    placeholder={ptBR.input.insiraONomeDoFuncionario}
                />
                <Input
                    dataTest={"b"}
                    id={ptBR.input.cpf}
                    labelName={ptBR.input.cpf}
                    name={ptBR.input.cpf}
                    onInputChange={() => ""}
                    value={""}
                    type={"text"}
                    placeholder={ptBR.input.mascaraCPF}
                />
            </InformacoesGerais>
            <Card
                tabelaConfig={{
                    textoEditar: ptBR.tabela.cabecalho.editar,
                    tituloColuna1: ptBR.tabela.cabecalho.empresa,
                    tituloColuna2: ptBR.tabela.cabecalho.matricula,
                    tituloColuna3: ptBR.tabela.cabecalho.cargo,
                    tituloColuna4: ptBR.tabela.cabecalho.departamento,
                    routeId: ptBR.tabela.routeId.funcionarioEditar,
                    chavesDeAcesso: ptBR.tabela.chavesDeAcesso.vinculos,
                    rotaEdicao: "",
                    chaveId: "empresa",
                }}
            ></Card>
            {/*</section>*/}
            <BotoesPaginaEditar navLink={rotas.funcionarios.listar} />
        </section>
    );
}
