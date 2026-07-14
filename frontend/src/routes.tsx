import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import FuncionariosPage from "./pages/funcionarios/FuncionariosPage.tsx";
import DepartamentosPage from "./pages/departamentos/DepartamentosPage.tsx";
import CargosPage from "./pages/cargos/CargosPage.tsx";
import {getFuncionarioById, GetFuncionariosList,} from "./services/FuncionarioService.ts";
import "./index.css";
import {rotas} from "./util/rotas.ts";
import {FuncionariosEditar} from "./pages/funcionarios/FuncionariosEditar.tsx";
import {GetCargos, GetCargosById} from "./services/CargosService.ts";
import type {ICargos, IDepartamentos, IFuncionarios} from "./interfaces";
import {GetDepartamentoById, GetDepartamentos,} from "./services/DepartamentosService.ts";
import CargosEditar from "./pages/cargos/CargosEditar.tsx";
import DepartamentosEditar from "./pages/departamentos/DepartamentosEditar.tsx";
import {GetVinculoByCpf} from "./services/VinculosService.ts";
import FuncionariosCadastrar from "./pages/funcionarios/FuncionariosCadastrar.tsx";
import CargosCadastrar from "./pages/cargos/CargosCadastrar.tsx";
import DepartamentosCadastrar from "./pages/departamentos/DepartamentosCadastrar.tsx";

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
                id: "rota-funcionarios-cadastrar",
                path: rotas.funcionarios.cadastrar,
                element: <FuncionariosCadastrar />,
            },
            {
                id: "rota-funcionarios-editar",
                path: rotas.funcionarios.id,
                element: <FuncionariosEditar />,
                loader: async ({ params }): Promise<{ any }> => {
                    const cpf = params.id;
                    if (!cpf) throw new Error("CPF não fornecido");
                    const [funcionario, listaVinculos] = await Promise.all([
                        getFuncionarioById(cpf),
                        GetVinculoByCpf(cpf),
                    ]);
                    return {
                        records: {
                            ...funcionario,
                            vinculos: listaVinculos,
                        },
                    };
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
                id: "rota-cargos-cadastrar",
                path: rotas.cargos.cadastrar,
                element: <CargosCadastrar />,
            },
            {
                id: "rota-cargos-editar",
                path: rotas.cargos.id,
                element: <CargosEditar />,
                loader: async ({ params }): Promise<{ records: ICargos }> => {
                    const id = params.id;
                    if (!id) throw new Error("Id não fornecido");
                    return { records: await GetCargosById(id) };
                },
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
                id: "rota-departamentos-cadastrar",
                path: rotas.departamentos.cadastrar,
                element: <DepartamentosCadastrar />,
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
