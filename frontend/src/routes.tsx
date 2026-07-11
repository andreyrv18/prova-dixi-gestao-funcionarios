import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import FuncionariosPage from "./pages/FuncionariosPage.tsx";
import DepartamentosPage from "./pages/DepartamentosPage.tsx";
import CargosPage from "./pages/CargosPage.tsx";
import {GetFuncionarios} from "./services/FuncionarioService.ts";
import "./index.css";
import {rotas} from "./util/rotas.ts";
import FuncionariosEditar from "./pages/FuncionariosEditar.tsx";
import {GetCargos} from "./services/CargosService.ts";
import type {Cargos, Departamentos, Funcionarios} from "./interfaces";
import {GetDepartamentos} from "./services/DepartamentosService.ts";

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
                loader: async (): Promise<{ records: Funcionarios[] }> => {
                    return { records: await GetFuncionarios() };
                },
                children: [
                    {
                        id: "rota-funcionarios-editar",
                        path: rotas.funcionarios.editar,
                        element: <FuncionariosEditar />,
                    },
                ],
            },
            {
                id: "rota-cargos",
                path: rotas.cargos.listar,
                element: <CargosPage />,
                loader: async (): Promise<{ records: Cargos[] }> => {
                    return { records: await GetCargos() };
                },
            },
            {
                id: "rota-departamentos",
                path: rotas.departamentos.listar,
                element: <DepartamentosPage />,
                loader: async (): Promise<{ records: Departamentos[] }> => {
                    return { records: await GetDepartamentos() };
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
