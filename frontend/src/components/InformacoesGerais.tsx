import {Card} from "./Card.tsx";
import Input from "./Input.tsx";
import {ptBR} from "../locales/pt-BR.ts";
import styles from "./informacoesGerais.module.css";

function InformacoesGerais() {
    return (
        <>
            <Card>
                <h1>{ptBR.card.titulo}</h1>

                <section className={styles.inputs}>
                    <Input
                        dataTest={"a"}
                        id={ptBR.input.nomeDoFuncionario}
                        labelName={ptBR.input.nomeDoFuncionario}
                        name={ptBR.input.nomeDoFuncionario}
                        onInputChange={() => ""}
                        value={""}
                        type={"text"}
                        placeholder={ptBR.input.insiraONomeDoFuncionario}
                    />
                    <Input
                        dataTest={"b"}
                        id={ptBR.input.cpf}
                        labelName={ptBR.input.cpf}
                        name={ptBR.input.cpf}
                        onInputChange={() => ""}
                        value={""}
                        type={"text"}
                        placeholder={ptBR.input.mascaraCPF}
                    />
                </section>
            </Card>
        </>
    );
}

export default InformacoesGerais;
