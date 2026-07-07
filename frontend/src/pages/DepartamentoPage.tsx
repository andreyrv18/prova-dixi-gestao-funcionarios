import {ptBR} from "../locales/pt-BR.ts";

function DepartamentoPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="titulo" >{ptBR.paginaDepartamento.titulo}</span>
            <span className="tituloModal" >{ptBR.paginaDepartamento.subtitulo}</span>


        </div>
    );
}

export default DepartamentoPage;