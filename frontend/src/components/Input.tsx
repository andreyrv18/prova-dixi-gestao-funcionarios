import React from "react";
import style from "./input.module.css";

interface InputProps<T extends string> {
    dataTest: T;
    id: string;
    labelName: string;
    name: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    type: string;
    placeholder: string;
}

function Input<T extends string>({
    dataTest,
    id,
    labelName,
    name,
    onInputChange,
    value,
    type,
    placeholder,
}: InputProps<T>) {
    return (
        <label htmlFor={id} className={style.label}>
            {labelName}
            <input
                className={style.input}
                data-testid={dataTest}
                id={id}
                name={name}
                onChange={onInputChange}
                type={type}
                value={value}
                placeholder={placeholder}
            />
        </label>
    );
}

export default Input;
