export const API_BASE_URL = "http://localhost:8080/api";

interface rotasProps {
    api: {
        funcionarios: string;
        cargos: string;
        departamentos: string;
    };
    funcionarios: {
        listar: string;
        editar: string;
    };
    cargos: {
        listar: string;
        editar: string;
    };
    departamentos: {
        listar: string;
        editar: string;
    };
}

export const rotas: rotasProps = {
    api: {
        funcionarios: `${API_BASE_URL}/funcionarios`,
        cargos: `${API_BASE_URL}/cargos`,
        departamentos: `${API_BASE_URL}/departamentos`,
    },
    funcionarios: {
        listar: "/funcionarios",
        editar: "/funcionarios/editar",
    },
    cargos: {
        listar: "/cargo",
        editar: "/cargo/editar",
    },

    departamentos: {
        listar: "/departamento",
        editar: "/departamento/editar",
    },
};
