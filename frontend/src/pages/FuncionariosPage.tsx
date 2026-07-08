import {ptBR} from "../locales/pt-BR.ts";
import {Card} from "../components/Card.tsx";
import Input from "../components/Input.tsx";

import {useState} from "react";
import PaginaCabacalho from "../components/PaginaCabacalho.tsx";

function FuncionariosPage() {
    const [text, setText] = useState("");
    const [cpf, setCpf] = useState("");
    const [matricula, setMatricula] = useState("");
    const [empresa, setEmpresa] = useState("");

    return (
        <section style={{ display: "flex", flexDirection: "column" }}>
            <PaginaCabacalho
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
                tabelaCabecalho={{
                    editar: ptBR.tabela.cabecalho.editar,
                    nome: ptBR.tabela.cabecalho.nome,
                    cpf: ptBR.tabela.cabecalho.cpf,
                }}
            ></Card>
        </section>
    );
}

export default FuncionariosPage;
