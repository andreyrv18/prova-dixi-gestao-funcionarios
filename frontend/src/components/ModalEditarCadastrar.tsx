import React, { useEffect, useRef, useState } from "react";
import styles from "./modalEditarCadastrar.module.css";
import Button from "./Button.tsx";
import { ptBR } from "../locales/pt-BR.ts";
import Input from "./Input.tsx";
import { AppIcons } from "../util/AppIcons.ts";
import Combobox, { type SelectOption } from "./Combobox.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { PostVinculo, PutVinculo } from "../services/VinculosService.ts";
import { GetCargosList } from "../services/CargosService.ts";
import { GetDepartamentosList } from "../services/DepartamentosService.ts";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    titulo: string;
    modo: "cadastrar" | "editar";
    item?: any;
}

function ModalEditarCadastrar({
    isOpen,
    onClose,
    titulo,
    modo,
    item,
}: ModalProps) {
    const { id: cpfFuncionario } = useParams();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();

    const [empresa, setEmpresa] = useState("");
    const [matricula, setMatricula] = useState("");
    const [cargoId, setCargoId] = useState("");
    const [departamentoId, setDepartamentoId] = useState("");

    const [opcoesCargos, setOpcoesCargos] = useState<SelectOption[]>([]);
    const [opcoesDepartamentos, setOpcoesDepartamentos] = useState<
        SelectOption[]
    >([]);
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

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
            if (modo === "editar" && item) {
                setEmpresa(item.empresa || "");
                setMatricula(item.matricula || "");
                setCargoId(item.cargoId || "");
                setDepartamentoId(item.departamentoId || "");
            } else {
                setEmpresa("");
                setMatricula("");
                setCargoId("");
                setDepartamentoId("");
            }
        } else {
            dialogRef.current?.close();
        }
    }, [isOpen, item, modo]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === "Escape") {
            onClose();
        }
    };

    const handleSalvar = async (e: React.SubmitEvent) => {
        e.preventDefault();

        try {
            const payload = {
                empresa,
                matricula,
                cargoId,
                departamentoId,
                cpfFuncionario,
            };

            if (modo === "cadastrar") {
                await PostVinculo(payload);
            } else {
                await PutVinculo(item.id, payload);
            }

            onClose();

            navigate(".", { replace: true });
        } catch (error) {
            console.error("Erro ao salvar vínculo:", error);
        }
    };
    return (
        <>
            <dialog
                className={styles.dialog}
                ref={dialogRef}
                onKeyDown={handleKeyDown}
            >
                <header>
                    <h3>{titulo}</h3>
                </header>
                <main>
                    <form onSubmit={handleSalvar}>
                        <div className={styles.inputLinha1}>
                            <Input
                                id="empresaModal"
                                labelName={ptBR.input.nomeDaEmpresa}
                                name={ptBR.input.nomeDaEmpresa}
                                value={empresa}
                                onInputChange={e => setEmpresa(e.target.value)}
                                type="text"
                                placeholder={ptBR.input.insiraONomeDaEmpresa}
                                dataTest="data-test-empresaModal"
                            />
                            <Input
                                id="matriculaModal"
                                labelName={ptBR.input.matricula}
                                name={ptBR.input.mascaraCPF}
                                value={matricula}
                                onInputChange={e =>
                                    setMatricula(e.target.value)
                                }
                                type="text"
                                placeholder={ptBR.input.mascaraMatricula}
                                dataTest="data-test-matriculaModal"
                            />
                        </div>
                        <div
                            className={styles.inputLinha2}
                            style={{
                                display: "flex",
                                gap: "1rem",
                                marginTop: "1rem",
                            }}
                        >
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
                        </div>
                        <br />
                        <div className={styles.botoes}>
                            <Button
                                onClick={onClose}
                                type={"button"}
                                name={ptBR.botao.cancelar}
                                Icon={AppIcons.Fechar}
                            />
                            <Button
                                onClick={() => {}}
                                type={"submit"}
                                name={ptBR.botao.salvar}
                                Icon={AppIcons.Salvar}
                            />
                        </div>
                    </form>
                </main>
            </dialog>
        </>
    );
}

export default ModalEditarCadastrar;
