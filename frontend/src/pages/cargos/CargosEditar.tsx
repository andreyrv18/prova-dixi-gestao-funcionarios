import Input from "../../components/Input.tsx";
import {ptBR} from "../../locales/pt-BR.ts";
import {useEffect, useState} from "react";
import PaginaCabecalho from "../../components/PaginaCabecalho.tsx";
import styles from "../pages.module.css";
import InformacoesGerais from "../../components/InformacoesGerais.tsx";
import {rotas} from "../../util/rotas.ts";
import BotoesPaginaEditar from "../../components/BotoesPaginaEditar.tsx";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import type {ICargos} from "../../interfaces";
import {PutCargo} from "../../services/CargosService.ts";

function CargosEditar() {
    const { id } = useParams();
    const navigate = useNavigate();
    const data = useLoaderData() as { records: ICargos };
    const cargoData = data?.records;

    const [descricao, setDescricao] = useState("");
    const [codigo, setCodigo] = useState(0);

    useEffect(() => {
        if (cargoData) {
            setDescricao(cargoData.descricaoDoCargo || "");
            setCodigo(cargoData.codigoDoCargo);
        }
    }, [cargoData]);

    const handleSalvar = async () => {
        if (!id) return;

        try {
            const cargoDTO = {
                codigoCargo: codigo,
                descricaoDoCargo: descricao,
            };

            await PutCargo(id, cargoDTO);

            navigate(rotas.cargos.listar);
        } catch (error) {
            console.error("Erro ao atualizar o cargo:", error);
        }
    };
    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo={ptBR.paginaCargo.editar.titulo}
                subtitulo={ptBR.paginaCargo.editar.subtitulo}
                // nomeBotao={ptBR.botao.novoCargo}
            />
            <InformacoesGerais>
                <Input
                    dataTest={ptBR.paginaCargo.input.dataTest.descricao}
                    id="cargo-descricao"
                    labelName={ptBR.paginaCargo.input.label}
                    name={ptBR.paginaCargo.input.nameDescricao}
                    onInputChange={e => setDescricao(e.target.value)}
                    value={descricao}
                    type="text"
                    placeholder={ptBR.paginaCargo.input.placeholderDescricao}
                />
                <Input
                    dataTest={ptBR.paginaCargo.input.dataTest.codigo}
                    id="codigo"
                    labelName={ptBR.paginaCargo.input.nameCodigo}
                    name={ptBR.paginaCargo.input.nameCodigo}
                    onInputChange={e => setCodigo(parseFloat(e.target.value))}
                    value={`${codigo}`}
                    type="text"
                    placeholder={ptBR.paginaCargo.input.placeholderCodigo}
                />
            </InformacoesGerais>
            <BotoesPaginaEditar
                navLink={rotas.cargos.listar}
                onClick={handleSalvar}
            />
        </section>
    );
}

export default CargosEditar;
