import type { IFuncionarios, IPageResponse } from "../interfaces";
import { API_BASE_URL, rotas } from "../util/rotas.ts";

export const GetFuncionariosList = async (): Promise<IFuncionarios[]> => {
    const response = await fetch(rotas.api.funcionarios, {
        method: "GET",
    });

    if (!response.ok) {
        throw await response.json();
    }

    const dataJson = await response.json();
    console.info(dataJson);
    return dataJson;
};

export const GetFuncionariosPaginado = async (): Promise<
    IPageResponse<IFuncionarios>
> => {
    const response = await fetch(rotas.api.funcionarios, {
        method: "GET",
    });

    if (!response.ok) {
        throw await response.json();
    }

    const dataJson = await response.json();
    console.info(dataJson);
    return dataJson;
};

export const getFuncionarioById = async (
    id: string,
): Promise<IFuncionarios> => {
    const response = await fetch(`${rotas.api.funcionarios}/${id}`, {
        method: "GET",
    });
    if (!response.ok) {
        throw await response.json();
    }
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
