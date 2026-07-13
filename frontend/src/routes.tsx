import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import FuncionariosPage from "./pages/FuncionariosPage.tsx";
import DepartamentosPage from "./pages/DepartamentosPage.tsx";
import CargosPage from "./pages/CargosPage.tsx";
import {GetFuncionariosList} from "./services/FuncionarioService.ts";
import "./index.css";
import {rotas} from "./util/rotas.ts";
import {FuncionariosEditar} from "./pages/FuncionariosEditar.tsx";
import {GetCargos} from "./services/CargosService.ts";
import type {ICargos, IDepartamentos, IFuncionarios, IVinculos,} from "./interfaces";
import {GetDepartamentoById, GetDepartamentos,} from "./services/DepartamentosService.ts";
import CargosEditar from "./pages/CargosEditar.tsx";
import DepartamentosEditar from "./pages/DepartamentosEditar.tsx";
import {GetVinculoByCpf} from "./services/VinculosService.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                id: "rota-funcionarios",
                path: rotas.funcionarios.listar,
                element: <FuncionariosPage />,
                loader: async (): Promise<{ records: IFuncionarios[] }> => {
                    return { records: await GetFuncionariosList() };
                },
            },
            {
                id: "rota-funcionarios-editar",
                path: rotas.funcionarios.id,
                element: <FuncionariosEditar />,
                loader: async ({ params }): Promise<{ records: IVinculos }> => {
                    const id = params.id;
                    if (!id) throw new Error("Id não fornecido");
                    return { records: await GetVinculoByCpf(id) };
                },
            },
            {
                id: "rota-cargos",
                path: rotas.cargos.listar,
                element: <CargosPage />,
                loader: async (): Promise<{ records: ICargos[] }> => {
                    return { records: await GetCargos() };
                },
            },
            {
                id: "rota-cargos-editar",
                path: rotas.cargos.editar,
                element: <CargosEditar />,
            },
            {
                id: "rota-departamentos",
                path: rotas.departamentos.listar,
                element: <DepartamentosPage />,
                loader: async (): Promise<{ records: IDepartamentos[] }> => {
                    return { records: await GetDepartamentos() };
                },
            },
            {
                id: "rota-departamentos-editar",
                path: rotas.departamentos.id,
                element: <DepartamentosEditar />,
                loader: async ({
                    params,
                }): Promise<{ records: IDepartamentos }> => {
                    const id = params.id;
                    if (!id) throw new Error("Id não fornecido");
                    return { records: await GetDepartamentoById(id) };
                },
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
