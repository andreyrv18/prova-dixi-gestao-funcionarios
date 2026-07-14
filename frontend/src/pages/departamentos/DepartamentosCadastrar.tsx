import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaginaCabecalho from "../../components/PaginaCabecalho.tsx";
import { ptBR } from "../../locales/pt-BR.ts";
import styles from "../pages.module.css";
import InformacoesGerais from "../../components/InformacoesGerais.tsx";
import Input from "../../components/Input.tsx";
import { rotas } from "../../util/rotas.ts";
import BotoesPaginaEditar from "../../components/BotoesPaginaEditar.tsx";
import { PostDepartamentos } from "../../services/DepartamentosService.ts";

function DepartamentosCadastrar() {
    const navigate = useNavigate();

    const [descricao, setDescricao] = useState("");
    const [codigo, setCodigo] = useState("");

    const handleSalvar = async () => {
        if (!descricao || !codigo) {
            return '"Por favor, preencha o Código e a Descrição do departamento.';
        }

        try {
            const departamentoDTO = {
                codigoDepartamento: parseInt(codigo),
                descricaoDoDepartamento: descricao,
            };

            await PostDepartamentos(departamentoDTO);

            navigate(rotas.departamentos.listar);
        } catch (error) {
            console.error("Erro ao cadastrar o departamento:", error);
        }
    };

    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo="Cadastro de Departamento"
                subtitulo="Adicione as informações do novo departamento"
            />
            <InformacoesGerais>
                <Input
                    dataTest={ptBR.paginaDepartamento.input.dataTest.descricao}
                    id={ptBR.input.descricaoDoDepartamento}
                    labelName={ptBR.input.descricaoDoDepartamento}
                    name="descricao"
                    onInputChange={e => setDescricao(e.target.value)}
                    value={descricao}
                    type="text"
                    placeholder={ptBR.input.insiraONomeDoFuncionario}
                />
                <Input
                    dataTest={ptBR.paginaDepartamento.input.dataTest.codigo}
                    id={ptBR.input.codigoDoDepartamento}
                    labelName={ptBR.input.codigoDoDepartamento}
                    name={ptBR.paginaDepartamento.input.nameCodigo}
                    onInputChange={e => setCodigo(e.target.value)}
                    value={codigo}
                    type="number"
                    placeholder="Ex: 600"
                />
            </InformacoesGerais>
            <BotoesPaginaEditar
                navLink={rotas.departamentos.listar}
                onClick={handleSalvar}
            />
        </section>
    );
}

export default DepartamentosCadastrar;
