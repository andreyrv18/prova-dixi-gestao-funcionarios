import imagem from "../assets/404.webp";
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div
            style={{
                display: "grid",
                gap: "10px",
                fontSize: "40px",
                alignItems: "center",
                height: "75vh",
                overflow: "hidden",
            }}
        >
            <img src={imagem} alt="relógio ponto erro"></img>
            <Link to="/">Voltar a página Inicial</Link>
        </div>
    );
}

export default ErrorPage;
