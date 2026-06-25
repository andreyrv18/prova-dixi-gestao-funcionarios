import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import FuncionariosPage from "./pages/FuncionariosPage.tsx";
import DepartamentoPage from "./pages/DepartamentoPage.tsx";
import CargoPage from "./pages/CargoPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import {fetchAPI} from "./service.ts";

const router = createBrowserRouter([
    {

        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/home",
                loader: async () => {
                    return {records: await fetchAPI()};
                },
                element: <HomePage/>,


            },
            {
                path: "/funcionario", element: <FuncionariosPage/>
            },
            {
                path: "/departamento", element: <DepartamentoPage/>
            },
            {
                path: "/cargo", element: <CargoPage/>
            }

        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
