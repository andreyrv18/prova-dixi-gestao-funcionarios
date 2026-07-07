import style from "./Card.module.css";
import Input from "./Input.tsx";
import {useState} from "react";



function Card() {
    const [text, setText] = useState("");
    const [cpf, setCpf] = useState("");
    const [matricula, setMatricula] = useState("");
    const [empresa, setEmpresa] = useState("");


    return (
        <div className={style.card}>
            <Input dataTest="search-funcionario" id="funcionario" labelName="Nome do Funcionário" name="InputValue"
                   onInputChange={e => setText(e.target.value)} value={text} type="text" placeholder="Procure pelo Funcionário" />
            <Input dataTest="search-cpf" id="cpf" labelName="CPF" name="CPF"
                   onInputChange={e => setCpf(e.target.value)} value={cpf} type="text" placeholder="000.000.000-00"/>
            <Input dataTest="search-matricula" id="matricula" labelName="Matricula" name="Matricula"
                   onInputChange={e => setMatricula(e.target.value)} value={matricula} type="text" placeholder="000000000000"/>
            <Input dataTest="search-empresa" id="empresa" labelName="Empresa" name="Empresa"
                   onInputChange={e => setEmpresa(e.target.value)} value={empresa} type="text" placeholder="Procure pela sua Empresa"/>
        </div>
    );
}

export default Card;