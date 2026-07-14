import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "../pages.module.css";
import PaginaCabecalho from "../../components/PaginaCabecalho.tsx";
import {ptBR} from "../../locales/pt-BR.ts";
import {Card} from "../../components/Card.tsx";
import InformacoesGerais from "../../components/InformacoesGerais.tsx";
import Input from "../../components/Input.tsx";
import BotoesPaginaEditar from "../../components/BotoesPaginaEditar.tsx";
import {rotas} from "../../util/rotas.ts";
import {PostFuncionarios} from "../../services/FuncionarioService.ts";

export function FuncionariosCadastrar() {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    const handleSalvar = async () => {
        if (!nome || !cpf) {
            return '"Por favor, preencha o Nome e o CPF."';
        }

        try {
            const payload = {
                nome: nome,
                cpf: cpf,
            };

            await PostFuncionarios(payload);

            navigate(rotas.funcionarios.listar);
        } catch (error) {
            console.error("Erro ao cadastrar funcionário:", error);
        }
    };

    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo="Cadastro de Funcionário"
                subtitulo="Adicione as informações do novo funcionário"
            />

            <InformacoesGerais>
                <Input
                    dataTest="input-novo-nome"
                    id="novo-nome"
                    labelName={ptBR.input.nomeDoFuncionario}
                    name="nome"
                    onInputChange={e => setNome(e.target.value)}
                    value={nome}
                    type="text"
                    placeholder={ptBR.input.insiraONomeDoFuncionario}
                />
                <Input
                    dataTest="input-novo-cpf"
                    id="novo-cpf"
                    labelName={ptBR.input.cpf}
                    name="cpf"
                    onInputChange={e => setCpf(e.target.value)}
                    value={cpf}
                    type="text"
                    placeholder={ptBR.input.mascaraCPF}
                />
            </InformacoesGerais>

            <Card
                tabelaConfig={{
                    textoEditar: ptBR.tabela.cabecalho.editar,
                    tituloColuna1: ptBR.tabela.cabecalho.empresa,
                    tituloColuna2: ptBR.tabela.cabecalho.matricula,
                    tituloColuna3: ptBR.tabela.cabecalho.cargo,
                    tituloColuna4: ptBR.tabela.cabecalho.departamento,
                    routeId: "nova-rota-vazia",
                    chavesDeAcesso: ptBR.tabela.chavesDeAcesso.vinculos,
                    rotaEdicao: "",
                    chaveId: "id",
                }}
            />

            <BotoesPaginaEditar
                navLink={rotas.funcionarios.listar}
                onClick={handleSalvar}
            />
        </section>
    );
}

export default FuncionariosCadastrar;
