import type { ICargos } from "../interfaces";
import { rotas } from "../util/rotas.ts";

export const GetCargos = async (): Promise<ICargos[]> => {
    const response = await fetch(rotas.api.cargos, {
        method: "GET",
    });
    const dataJson = await response.json();
    console.info(dataJson);
    return dataJson;
};

export const PostCargos = async (payload: object) => {
    const response = await fetch(rotas.api.cargos, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    return await response.json();
};
