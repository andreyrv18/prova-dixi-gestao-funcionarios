import PaginaCabecalho from "../../components/PaginaCabecalho.tsx";
import {ptBR} from "../../locales/pt-BR.ts";
import styles from "../pages.module.css";
import InformacoesGerais from "../../components/InformacoesGerais.tsx";
import Input from "../../components/Input.tsx";
import {rotas} from "../../util/rotas.ts";
import BotoesPaginaEditar from "../../components/BotoesPaginaEditar.tsx";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {PutDepartamento} from "../../services/DepartamentosService.ts";
import type {IDepartamentos} from "../../interfaces";

function DepartamentosEditar() {
    const [descricao, setDescricao] = useState("");
    const [codigo, setCodigo] = useState(0);

    const data = useLoaderData() as { records: IDepartamentos };
    const { id } = useParams();

    const navigate = useNavigate();

    const departamentoData = data?.records;
    useEffect(() => {
        if (departamentoData) {
            setDescricao(departamentoData.descricaoDoDepartamento);
            setCodigo(departamentoData.codigoDepartamento);
        }
    }, [departamentoData]);

    const handleSalvar = async () => {
        if (!id) return;

        try {
            const departamentoDTO = {
                codigoDepartamento: codigo,
                descricaoDoDepartamento: descricao,
            };

            await PutDepartamento(id, departamentoDTO);

            navigate(rotas.departamentos.listar);
        } catch (error) {
            console.error("Erro ao atualizar o departamento:", error);
        }
    };

    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo={ptBR.paginaDepartamento.editar.titulo}
                subtitulo={ptBR.paginaDepartamento.editar.subtitulo}
                // nomeBotao={ptBR.botao.novoDepartamento}
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
                    onInputChange={e => setCodigo(parseInt(e.target.value))}
                    value={`${codigo}`}
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
