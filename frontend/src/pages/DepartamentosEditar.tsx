import PaginaCabecalho from "../components/PaginaCabecalho.tsx";
import {ptBR} from "../locales/pt-BR.ts";
import styles from "./pages.module.css";
import InformacoesGerais from "../components/InformacoesGerais.tsx";
import Input from "../components/Input.tsx";
import {rotas} from "../util/rotas.ts";
import BotoesPaginaEditar from "../components/BotoesPaginaEditar.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {PutDepartamento} from "../services/DepartamentosService.ts";

function DepartamentosEditar() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [descricao, setDescricao] = useState("");
    const [codigo, setCodigo] = useState("");

    const handleSalvar = async () => {
        if (!id) return;

        try {
            const departamentoDTO = {
                codigoDepartamento: codigo,
                descricaoDoDepartamento: descricao,
            };

            await PutDepartamento(id, departamentoDTO);

            alert("Departamento atualizado com sucesso!");
            navigate(rotas.departamentos.listar);
        } catch (error) {
            console.error("Erro ao atualizar o departamento:", error);
            alert("Falha ao salvar. Verifique a consola.");
        }
    };
    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo={ptBR.paginaDepartamento.listar.titulo}
                subtitulo={ptBR.paginaDepartamento.listar.subtitulo}
                nomeBotao={ptBR.botao.novoDepartamento}
            />
            <InformacoesGerais>
                <Input
                    dataTest={ptBR.paginaDepartamento.input.dataTest.descricao}
                    id={ptBR.input.descricaoDoDepartamento}
                    labelName={ptBR.input.descricaoDoDepartamento}
                    name="descricao"
                    onInputChange={e => setDescricao(e.target.value)}
                    value="descricao"
                    type={"text"}
                    placeholder={ptBR.input.insiraONomeDoFuncionario}
                />
                <Input
                    dataTest={ptBR.paginaDepartamento.input.dataTest.codigo}
                    id={ptBR.input.codigoDoDepartamento}
                    labelName={ptBR.input.codigoDoDepartamento}
                    name={ptBR.paginaDepartamento.input.nameCodigo}
                    onInputChange={e => setCodigo(e.target.value)}
                    value={ptBR.paginaDepartamento.input.nameCodigo}
                    type={"text"}
                    placeholder={ptBR.input.mascaraCPF}
                />
            </InformacoesGerais>
            <BotoesPaginaEditar
                navLink={rotas.departamentos.listar}
                onClick={handleSalvar}
            />
        </section>
    );
}

export default DepartamentosEditar;
