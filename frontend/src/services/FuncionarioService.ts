import type { Funcionarios } from "../interfaces";
import { API_BASE_URL } from "../util/rotas.ts";

export const GetFuncionarios = async (): Promise<Funcionarios[]> => {
    const response = await fetch(`${API_BASE_URL}/funcionarios`, {
        method: "GET",
    });
    const dataJson = await response.json();
    console.info(dataJson);
    return dataJson;
};

export const PostFuncionarios = async (payload: object) => {
    const response = await fetch(`${API_BASE_URL}/funcionarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    return await response.json();
};
