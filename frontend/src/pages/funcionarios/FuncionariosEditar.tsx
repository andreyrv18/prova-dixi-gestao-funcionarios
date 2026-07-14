import styles from "../pages.module.css";
import PaginaCabecalho from "../../components/PaginaCabecalho.tsx";
import { ptBR } from "../../locales/pt-BR.ts";
import { Card } from "../../components/Card.tsx";
import InformacoesGerais from "../../components/InformacoesGerais.tsx";
import { rotas } from "../../util/rotas.ts";
import Input from "../../components/Input.tsx";
import BotoesPaginaEditar from "../../components/BotoesPaginaEditar.tsx";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import type { IFuncionarios } from "../../interfaces";
import { PutFuncionario } from "../../services/FuncionarioService.ts";

export function FuncionariosEditar() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    const data = useLoaderData() as { records: IFuncionarios };
    const { id } = useParams();

    const navigate = useNavigate();

    const funcionarioData = data?.records;
    useEffect(() => {
        if (funcionarioData) {
            setNome(funcionarioData.nome);
            setCpf(funcionarioData.cpf);
        }
    }, [funcionarioData]);

    const handleSalvar = async () => {
        if (!id) return;

        try {
            const funcionarioDTO = {
                nome: nome,
                cpf: cpf,
            };

            await PutFuncionario(id, funcionarioDTO);

            navigate(rotas.funcionarios.listar);
        } catch (error) {
            console.error("Erro ao atualizar o departamento:", error);
        }
    };

    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo={ptBR.paginaFuncionario.editar.titulo}
                subtitulo={ptBR.paginaFuncionario.editar.subtitulo}
            />

            <InformacoesGerais>
                <Input
                    dataTest={"dataTest-funcionario-nome"}
                    id="nome-funcionario"
                    labelName={ptBR.input.nomeDoFuncionario}
                    name={ptBR.input.nomeDoFuncionario}
                    onInputChange={e => setNome(e.target.value)}
                    value={nome}
                    type="text"
                    placeholder={ptBR.input.insiraONomeDoFuncionario}
                />
                <Input
                    dataTest={"dataTest-funcionario-cpf"}
                    id={ptBR.input.cpf}
                    labelName={ptBR.input.cpf}
                    name={ptBR.input.cpf}
                    onInputChange={e => setCpf(e.target.value)}
                    value={cpf}
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
                    chaveId: "id",
                }}
            ></Card>

            <BotoesPaginaEditar
                navLink={rotas.funcionarios.listar}
                onClick={handleSalvar}
            />
        </section>
    );
}
