import { useEffect, useState } from 'react';
import './App.css';
import { fetchAPI } from "./service.ts";

function App() {
    const [mensagem, setMensagem] = useState<string>('');

    useEffect(() => {
        async function chama() {
            try {
                const api = await fetchAPI();
                setMensagem(api); // Salva o resultado no estado
                console.log("Resposta da API:", api);
            } catch (error) {
                console.error("Erro na requisição:", error);
            }
        }

        void chama();
    }, []);

    return (
        <>
            <h1>{mensagem ? mensagem : "Carregando..."}</h1>
        </>
    )
}

export default App;