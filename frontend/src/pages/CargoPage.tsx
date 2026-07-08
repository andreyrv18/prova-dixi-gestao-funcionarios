import PaginaCabacalho from "../components/PaginaCabacalho.tsx";
import {ptBR} from "../locales/pt-BR.ts";
import {Card} from "../components/Card.tsx";
import Input from "../components/Input.tsx";
import {useState} from "react";

function CargoPage() {
    const [descricao, setDescricao] = useState("");
    const [codigo, setCodigo] = useState("");
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <PaginaCabacalho
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
                tabelaCabecalho={{
                    editar: ptBR.tabela.cabecalho.editar,
                    nome: ptBR.tabela.cabecalho.nome,
                    cpf: ptBR.tabela.cabecalho.cpf,
                }}
            ></Card>
        </div>
    );
}

export default CargoPage;
