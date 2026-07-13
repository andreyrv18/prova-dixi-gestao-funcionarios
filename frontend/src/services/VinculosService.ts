import type {IPageResponse, IVinculos} from "../interfaces";
import {rotas} from "../util/rotas.ts";

export const GetVinculoByCpf = async (id: string): Promise<IVinculos> => {
    const response = await fetch(`${rotas.api.vinculos}/${id}`, {
        method: "GET",
    });
    if (!response.ok) {
        throw await response.json();
    }
    const dataJson = await response.json();
    console.info(dataJson);
    return dataJson;
};

export const GetVinculoList = async (): Promise<IVinculos[]> => {
    const response = await fetch(rotas.api.vinculos, {
        method: "GET",
    });

    if (!response.ok) {
        throw await response.json();
    }

    const dataJson = await response.json();
    console.info(dataJson);
    return dataJson;
};

export const GetVinculoPage = async (): Promise<IPageResponse<IVinculos>> => {
    const response = await fetch(rotas.api.vinculosPage, {
        method: "GET",
    });

    if (!response.ok) {
        throw await response.json();
    }

    const dataJson = await response.json();
    console.info(dataJson);
    return dataJson;
};
