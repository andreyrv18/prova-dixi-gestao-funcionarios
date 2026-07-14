import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaginaCabecalho from "../../components/PaginaCabecalho.tsx";
import { ptBR } from "../../locales/pt-BR.ts";
import styles from "../pages.module.css";
import InformacoesGerais from "../../components/InformacoesGerais.tsx";
import Input from "../../components/Input.tsx";
import { rotas } from "../../util/rotas.ts";
import BotoesPaginaEditar from "../../components/BotoesPaginaEditar.tsx";
import { PostCargos } from "../../services/CargosService.ts";

function CargosCadastrar() {
    const navigate = useNavigate();

    const [descricao, setDescricao] = useState("");
    const [codigo, setCodigo] = useState("");

    const handleSalvar = async () => {
        if (!descricao || !codigo) {
            return "Por favor, preencha o Código e a Descrição do cargo.";
        }

        try {
            const cargoDTO = {
                codigoDoCargo: parseInt(codigo),
                descricaoDoCargo: descricao,
            };

            await PostCargos(cargoDTO);

            navigate(rotas.cargos.listar);
        } catch (error) {
            console.error("Erro ao cadastrar o cargo:", error);
        }
    };

    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo="Cadastro de Cargo"
                subtitulo="Adicione as informações do novo cargo"
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
                    onInputChange={e => setCodigo(e.target.value)}
                    value={codigo}
                    type="number"
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

export default CargosCadastrar;
