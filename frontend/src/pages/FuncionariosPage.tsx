import {ptBR} from "../locales/pt-BR.ts";
import Card from "../components/card.tsx";


function FuncionariosPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
         <div style={{ display: "flex", flexDirection: "column" }}>   <span className="titulo" >{ptBR.funcionario.listarFundionarios.titulo}</span>
             <span className="tituloModal" >{ptBR.funcionario.listarFundionarios.subtitulo}</span></div>

            <Card data={"hi"} >
                <span>sadfaf</span>
            </Card>
        </div>
    );
}

export default FuncionariosPage;