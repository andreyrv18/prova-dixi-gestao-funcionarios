import {useEffect, useRef} from "react";
import styles from "./modalEditarCadastrar.module.css";
import Button from "./Button.tsx";
import {ptBR} from "../locales/pt-BR.ts";
import Input from "./Input.tsx";
import {AppIcons} from "../util/AppIcons.ts";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    titulo: string;
}

function ModalEditarCadastrar({ isOpen, onClose, titulo }: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        const dialogNode = dialogRef.current;
        if (isOpen) {
            dialogNode?.showModal();
        } else {
            dialogNode?.close();
        }
    }, [isOpen]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === "Escape") {
            onClose();
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
                    {/* Aqui entra o conteúdo dinâmico (children) */}
                    <form>
                        <Input
                            id="nomeModal"
                            labelName="Nome"
                            name="nome"
                            value=""
                            onInputChange={() => {}}
                            type="text"
                            placeholder="s"
                            dataTest="data-"
                        />
                        <br />
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
                    </form>
                </main>
            </dialog>
        </>
    );
}

export default ModalEditarCadastrar;
