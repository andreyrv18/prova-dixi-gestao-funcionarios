import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

interface ApiError {
    timestamp: string;
    status: number;
    error?: string;
    message: string;
    path: string;
}

function ErrorPage() {
    const error = useRouteError() as ApiError;

    let statusErro, mensagemErro, caminhoErro, timestampErro;

    if (isRouteErrorResponse(error)) {
        statusErro = error.status;
        mensagemErro = error.statusText;
    } else {
        statusErro = error.status || 500;
        mensagemErro = error.message;
        caminhoErro = error.path;
        timestampErro = error.timestamp || "";
    }
    return (
        <div
            style={{
                display: "grid",
                gap: "10px",
                fontSize: "20px",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "75vh",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    padding: "20px",
                    border: "1px solid #ffcccc",
                    borderRadius: "8px",
                    backgroundColor: "#fff5f5",
                }}
            >
                <h1 style={{ fontSize: "80px", margin: "0", color: "#d32f2f" }}>
                    {statusErro}
                </h1>
                <h2 style={{ color: "#333" }}>{mensagemErro}</h2>

                <p style={{ color: "#666", fontSize: "16px" }}>
                    <strong>Caminho:</strong> {caminhoErro}
                </p>
                <p>{timestampErro}</p>
            </div>

            <Link
                to="/"
                style={{
                    color: "#0056b3",
                    textDecoration: "none",
                    fontWeight: "bold",
                }}
            >
                Voltar à página Inicial
            </Link>
        </div>
    );
}

export default ErrorPage;
