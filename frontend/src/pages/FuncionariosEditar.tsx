import styles from "./pages.module.css";
import PaginaCabecalho from "../components/PaginaCabecalho.tsx";
import {ptBR} from "../locales/pt-BR.ts";
import {Card} from "../components/Card.tsx";
import InformacoesGerais from "../components/InformacoesGerais.tsx";
import Button from "../components/Button.tsx";
import {AppIcons} from "../util/AppIcons.ts";

export function FuncionariosEditar() {
    // const data = useLoaderData() as { records: IFuncionarios };
    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo={ptBR.paginaFuncionario.editar.titulo}
                subtitulo={ptBR.paginaFuncionario.editar.subtitulo}
            />

            {/*<section className={styles.paginaEditarFuncionario}>*/}
            <InformacoesGerais />
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
            <section>
                <Button
                    name={ptBR.botao.cancelar}
                    Icon={AppIcons.Fechar}
                ></Button>
                <Button
                    name={ptBR.botao.salvar}
                    Icon={AppIcons.Salvar}
                ></Button>
            </section>
        </section>
    );
}
