import {ptBR} from "../locales/pt-BR.ts";
import type {ChangeEvent} from "react";

export interface SelectOption {
    value: string | number;
    label: string;
}

interface ComboboxProps {
    id: string;
    labelName: string;
    name: string;
    value: string | number;
    onSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    placeholder?: string;
    dataTest?: string;
}
function Combobox({
    id,
    labelName,
    name,
    value,
    onSelectChange,
    options,
    placeholder = ptBR.input.selecioneUmaOpcao,
    dataTest,
}: ComboboxProps) {
    return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label
                htmlFor={id}
                style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginBottom: "4px",
                }}
            >
                {labelName}
            </label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onSelectChange}
                data-test={dataTest}
                style={{
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: "white",
                }}
            >
                <option value="" disabled hidden>
                    {placeholder}
                </option>

                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Combobox;
