export const API_BASE_URL = "http://localhost:8080/api";

interface rotasProps {
    api: {
        funcionarios: string;
        funcionariosPage: string;
        cargos: string;
        departamentos: string;
        vinculos: string;
        vinculosPage: string;
    };
    funcionarios: {
        listar: string;
        editar: string;
        id: string;
    };
    cargos: {
        listar: string;
        editar: string;
        id: string;
    };
    departamentos: {
        listar: string;
        editar: string;
        id: string;
    };
}

export const rotas: rotasProps = {
    api: {
        funcionarios: `${API_BASE_URL}/funcionarios`,
        funcionariosPage: `${API_BASE_URL}/funcionarios?page=0&size=10&sort=id`,
        cargos: `${API_BASE_URL}/cargos`,
        departamentos: `${API_BASE_URL}/departamentos`,
        vinculos: `${API_BASE_URL}/vinculos`,
        vinculosPage: `${API_BASE_URL}/vinculos?page=0&size=10&sort=id`,
    },
    funcionarios: {
        listar: "/funcionarios",
        editar: "/funcionarios/editar",
        id: "/funcionarios/:id",
    },
    cargos: {
        listar: "/cargos",
        editar: "/cargos/editar",
        id: "/cargos/editar/:id",
    },

    departamentos: {
        listar: "/departamentos",
        editar: "/departamentos/editar",
        id: "/departamentos/editar/:id",
    },
};
