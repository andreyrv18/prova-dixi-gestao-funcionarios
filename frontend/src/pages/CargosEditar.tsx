import Input from "../components/Input.tsx";
import { ptBR } from "../locales/pt-BR.ts";
import { useState } from "react";
import PaginaCabecalho from "../components/PaginaCabecalho.tsx";
import styles from "./pages.module.css";
import InformacoesGerais from "../components/InformacoesGerais.tsx";
import { rotas } from "../util/rotas.ts";
import BotoesPaginaEditar from "../components/BotoesPaginaEditar.tsx";

function CargosEditar() {
    const [descricao, setDescricao] = useState("");
    const [codigo, setCodigo] = useState("");
    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo={ptBR.paginaCargo.listar.titulo}
                subtitulo={ptBR.paginaCargo.listar.subtitulo}
                nomeBotao={ptBR.botao.novoCargo}
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
                    type="text"
                    placeholder={ptBR.paginaCargo.input.placeholderCodigo}
                />
            </InformacoesGerais>
            <BotoesPaginaEditar navLink={rotas.cargos.listar} />
        </section>
    );
}

export default CargosEditar;
