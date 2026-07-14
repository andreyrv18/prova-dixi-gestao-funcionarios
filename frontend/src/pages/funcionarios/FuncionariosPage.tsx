import {ptBR} from "../../locales/pt-BR.ts";
import {Card} from "../../components/Card.tsx";
import Input from "../../components/Input.tsx";
import styles from "../pages.module.css";

import {useEffect, useState} from "react";
import PaginaCabecalho from "../../components/PaginaCabecalho.tsx";
import {rotas} from "../../util/rotas.ts";
import {useNavigate} from "react-router-dom";
import Combobox, {type SelectOption} from "../../components/Combobox.tsx";
import {GetCargosList} from "../../services/CargosService.ts";
import {GetDepartamentosList} from "../../services/DepartamentosService.ts";
import ModalVisualizarVinculos from "../../components/ModalVisualizarVinculos.tsx";

function FuncionariosPage() {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [cpf, setCpf] = useState("");
    const [matricula, setMatricula] = useState("");
    const [empresa, setEmpresa] = useState("");

    const [cargoId, setCargoId] = useState("");
    const [departamentoId, setDepartamentoId] = useState("");

    const [opcoesCargos, setOpcoesCargos] = useState<SelectOption[]>([]);
    const [opcoesDepartamentos, setOpcoesDepartamentos] = useState<
        SelectOption[]
    >([]);

    const [modalVinculosAberto, setModalVinculosAberto] = useState(false);
    const [cpfSelecionado, setCpfSelecionado] = useState("");
    const handleRowClick = (item: any) => {
        setCpfSelecionado(item.cpf);
        setModalVinculosAberto(true);
    };
    useEffect(() => {
        const carregarListas = async () => {
            try {
                const listaCargos = await GetCargosList();
                const listaDepartamentos = await GetDepartamentosList();

                setOpcoesCargos(
                    listaCargos.map((c: any) => ({
                        value: c.id || c.codigoCargo || c.codigoDoCargo,
                        label: c.descricaoDoCargo,
                    })),
                );

                setOpcoesDepartamentos(
                    listaDepartamentos.map((d: any) => ({
                        value: d.id || d.codigoDepartamento,
                        label: d.descricaoDoDepartamento,
                    })),
                );
            } catch (error) {
                console.error("Erro ao buscar cargos/departamentos:", error);
            }
        };
        carregarListas();
    }, []);
    return (
        <section className={styles.pagina}>
            <PaginaCabecalho
                titulo={ptBR.paginaFuncionario.listar.titulo}
                subtitulo={ptBR.paginaFuncionario.listar.subtitulo}
                nomeBotao={ptBR.botao.novoFuncionario}
                onClicarNovo={() => navigate(rotas.funcionarios.cadastrar)}
            />

            <Card
                inputs={
                    <>
                        <Input
                            dataTest="search-funcionario"
                            id="funcionario"
                            labelName="Nome do Funcionário"
                            name="Funcionario"
                            onInputChange={e => setText(e.target.value)}
                            value={text}
                            type="text"
                            placeholder="Procure pelo Funcionário"
                        />
                        <Input
                            dataTest="search-cpf"
                            id="cpf"
                            labelName="CPF"
                            name="CPF"
                            onInputChange={e => setCpf(e.target.value)}
                            value={cpf}
                            type="text"
                            placeholder="000.000.000-00"
                        />
                        <Input
                            dataTest="search-matricula"
                            id="matricula"
                            labelName="Matricula"
                            name="Matricula"
                            onInputChange={e => setMatricula(e.target.value)}
                            value={matricula}
                            type="text"
                            placeholder="000000000000"
                        />
                        <Input
                            dataTest="search-empresa"
                            id="empresa"
                            labelName="Empresa"
                            name="Empresa"
                            onInputChange={e => setEmpresa(e.target.value)}
                            value={empresa}
                            type="text"
                            placeholder="Procure pela sua Empresa"
                        />
                        <Combobox
                            id="cargoSelect"
                            name="cargo"
                            labelName={ptBR.input.cargo}
                            value={cargoId}
                            onSelectChange={e => setCargoId(e.target.value)}
                            options={opcoesCargos}
                            placeholder={ptBR.input.selecioneUmaOpcao}
                            dataTest="select-cargo"
                        />

                        <Combobox
                            id="departamentoSelect"
                            name="departamento"
                            labelName={ptBR.input.departamento}
                            value={departamentoId}
                            onSelectChange={e =>
                                setDepartamentoId(e.target.value)
                            }
                            options={opcoesDepartamentos}
                            placeholder={ptBR.input.selecioneUmaOpcao}
                            dataTest="select-departamento"
                        />
                    </>
                }
                tabelaConfig={{
                    textoEditar: ptBR.tabela.cabecalho.editar,
                    tituloColuna1: ptBR.tabela.cabecalho.nome,
                    tituloColuna2: ptBR.tabela.cabecalho.cpf,
                    routeId: ptBR.tabela.routeId.funcionario,
                    chavesDeAcesso: ptBR.tabela.chavesDeAcesso.funcionario,
                    rotaEdicao: rotas.funcionarios.id,
                    chaveId: "cpf",
                    onRowClick: handleRowClick,
                }}
            />
            <ModalVisualizarVinculos
                isOpen={modalVinculosAberto}
                onClose={() => setModalVinculosAberto(false)}
                cpf={cpfSelecionado}
            />
        </section>
    );
}

export default FuncionariosPage;
