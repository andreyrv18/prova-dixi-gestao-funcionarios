import type {ICargos} from "../interfaces";
import {rotas} from "../util/rotas.ts";

export const GetCargos = async (): Promise<ICargos[]> => {
    const response = await fetch(rotas.api.cargos, {
        method: "GET",
    });
    const dataJson = await response.json();
    console.info(dataJson);
    return dataJson;
};

export const GetCargosList = async (): Promise<ICargos[]> => {
    const response = await fetch(`${rotas.api.cargos}/list`, {
        method: "GET",
    });

    if (!response.ok) throw await response.json();
    return await response.json();
};

export const GetCargosById = async (id: string): Promise<ICargos> => {
    const response = await fetch(`${rotas.api.cargos}/${id}`, {
        method: "GET",
    });
    if (!response.ok) throw await response.json();
    return response.json();
};

export const PostCargos = async (payload: object) => {
    const response = await fetch(rotas.api.cargos, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    return await response.json();
};

export const PutCargo = async (id: string, cargoDTO: object) => {
    const response = await fetch(`${rotas.api.cargos}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cargoDTO),
    });

    if (!response.ok) {
        throw await response.json();
    }
    return await response.json();
};
