import {useEffect, useRef, useState} from "react";
import styles from "./modalVisualizarVinculos.module.css";
import Button from "./Button.tsx";
import {GetVinculoByCpf} from "../services/VinculosService.ts";

interface ModalVisualizarVinculosProps {
    isOpen: boolean;
    onClose: () => void;
    cpf: string;
}

function ModalVisualizarVinculos({
    isOpen,
    onClose,
    cpf,
}: ModalVisualizarVinculosProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [vinculos, setVinculos] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const carregarVinculos = async () => {
        setLoading(true);
        try {
            const dados = await GetVinculoByCpf(cpf);
            setVinculos(Array.isArray(dados) ? dados : []);
        } catch (error) {
            console.error("Erro ao carregar vínculos:", error);
            setVinculos([]);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
            if (cpf) carregarVinculos();
        } else {
            dialogRef.current?.close();
            setVinculos([]);
        }
    }, [isOpen, cpf]);

    return (
        <dialog className={styles.dialog} ref={dialogRef}>
            <header className={styles.header}>
                <h3>Vínculos de Empresa</h3>
            </header>
            <main>
                {loading ? (
                    <p style={{ padding: "20px", textAlign: "center" }}>
                        Carregando vínculos...
                    </p>
                ) : vinculos.length === 0 ? (
                    <p style={{ padding: "20px", textAlign: "center" }}>
                        Nenhum vínculo encontrado.
                    </p>
                ) : (
                    <table className={styles.tabelaContainer}>
                        <thead>
                            <tr className={styles.tabelaHeader}>
                                <th className={styles.th}>Empresa</th>
                                <th className={styles.th}>Matrícula</th>
                                <th className={styles.th}>Cargo</th>
                                <th className={styles.th}>Departamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vinculos.map((v, index) => (
                                <tr key={index}>
                                    <td className={styles.td}>{v.empresa}</td>
                                    <td className={styles.td}>{v.matricula}</td>
                                    <td className={styles.td}>{v.cargo}</td>
                                    <td className={styles.td}>
                                        {v.departamento}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <div className={styles.botoesContainer}>
                    <Button onClick={onClose} type="button" name="Fechar" />
                </div>
            </main>
        </dialog>
    );
}

export default ModalVisualizarVinculos;
