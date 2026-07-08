import PaginaCabacalho from "../components/PaginaCabacalho.tsx";
import { ptBR } from "../locales/pt-BR.ts";
import { Card } from "../components/Card.tsx";
import Input from "../components/Input.tsx";
import { useState } from "react";

function DepartamentoPage() {
    const [descricao, setDescricao] = useState("");
    const [codigo, setCodigo] = useState("");

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <PaginaCabacalho
                titulo={ptBR.paginaDepartamento.listar.titulo}
                subtitulo={ptBR.paginaDepartamento.listar.subtitulo}
                nomeBotao={ptBR.botao.novoDepartamento}
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
                tabelaCabecalho={{
                    editar: ptBR.tabela.cabecalho.editar,
                    nome: ptBR.tabela.cabecalho.nome,
                    cpf: ptBR.tabela.cabecalho.cpf,
                }}
            ></Card>
        </div>
    );
}

export default DepartamentoPage;
