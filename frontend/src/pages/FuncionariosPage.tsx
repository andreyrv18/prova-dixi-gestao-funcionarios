import {ptBR} from "../locales/pt-BR.ts";
import {Card} from "../components/Card.tsx";
import Input from "../components/Input.tsx";
import styles from "./pages.module.css";

import {useState} from "react";
import PaginaCabecalho from "../components/PaginaCabecalho.tsx";
import {rotas} from "../util/rotas.ts";

function FuncionariosPage() {
    const [text, setText] = useState("");
    const [cpf, setCpf] = useState("");
    const [matricula, setMatricula] = useState("");
    const [empresa, setEmpresa] = useState("");

    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo={ptBR.paginaFuncionario.listar.titulo}
                subtitulo={ptBR.paginaFuncionario.listar.subtitulo}
                nomeBotao={ptBR.botao.novoFuncionario}
            />

            <Card
                inputs={
                    <>
                        <Input
                            dataTest="search-funcionario"
                            id="funcionario"
                            labelName="Nome do Funcionário"
                            name="Funcionario"
                            onInputChange={e => setText(e.target.value)}
                            value={text}
                            type="text"
                            placeholder="Procure pelo Funcionário"
                        />
                        <Input
                            dataTest="search-cpf"
                            id="cpf"
                            labelName="CPF"
                            name="CPF"
                            onInputChange={e => setCpf(e.target.value)}
                            value={cpf}
                            type="text"
                            placeholder="000.000.000-00"
                        />
                        <Input
                            dataTest="search-matricula"
                            id="matricula"
                            labelName="Matricula"
                            name="Matricula"
                            onInputChange={e => setMatricula(e.target.value)}
                            value={matricula}
                            type="text"
                            placeholder="000000000000"
                        />
                        <Input
                            dataTest="search-empresa"
                            id="empresa"
                            labelName="Empresa"
                            name="Empresa"
                            onInputChange={e => setEmpresa(e.target.value)}
                            value={empresa}
                            type="text"
                            placeholder="Procure pela sua Empresa"
                        />
                    </>
                }
                tabelaConfig={{
                    textoEditar: ptBR.tabela.cabecalho.editar,
                    tituloColuna1: ptBR.tabela.cabecalho.nome,
                    tituloColuna2: ptBR.tabela.cabecalho.cpf,
                    routeId: ptBR.tabela.routeId.funcionario,
                    chavesDeAcesso: ptBR.tabela.chavesDeAcesso.funcionario,
                    rotaEdicao: rotas.funcionarios.id,
                    chaveId: "cpf",
                }}
            />
        </section>
    );
}

export default FuncionariosPage;
