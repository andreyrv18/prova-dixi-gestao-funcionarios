import {ptBR} from "../locales/pt-BR.ts";

function CargoPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="titulo" >{ptBR.paginaCargo.titulo}</span>
            <span className="tituloModal" >{ptBR.paginaCargo.subtitulo}</span>


        </div>
    );
}

export default CargoPage;