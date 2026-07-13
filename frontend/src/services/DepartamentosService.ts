import type { IDepartamentos } from "../interfaces";
import { rotas } from "../util/rotas.ts";

export const GetDepartamentos = async (): Promise<IDepartamentos[]> => {
    const response = await fetch(rotas.api.departamentos, {
        method: "GET",
    });
    const dataJson = await response.json();
    console.info(dataJson);
    return dataJson;
};

export const PostDepartamentos = async (payload: object) => {
    const response = await fetch(rotas.api.departamentos, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    return await response.json();
};
