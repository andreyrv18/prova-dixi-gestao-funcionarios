import type {IDepartamentos} from "../interfaces";
import {rotas} from "../util/rotas.ts";

export const GetDepartamentos = async (): Promise<IDepartamentos[]> => {
    const response = await fetch(rotas.api.departamentos, {
        method: "GET",
    });
    const dataJson = await response.json();
    console.info(dataJson);
    return dataJson;
};

export const GetDepartamentoById = async (
    id: string,
): Promise<IDepartamentos> => {
    const response = await fetch(`${rotas.api.departamentos}/${id}`, {
        method: "GET",
    });
    if (!response.ok) throw await response.json();
    return response.json();
};

export const PostDepartamentos = async (payload: object) => {
    const response = await fetch(rotas.api.departamentos, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    return await response.json();
};

export const PutDepartamento = async (id: string, departamentoDTO: object) => {
    const response = await fetch(`${rotas.api.departamentos}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(departamentoDTO),
    });

    if (!response.ok) {
        throw await response.json();
    }
    return await response.json();
};
