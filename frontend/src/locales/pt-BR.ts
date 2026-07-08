interface Dicionario {
    navbar: {
        funcionario: string;
        cargo: string;
        departamento: string;
    };
    tabela: {
        cabecalho: {
            editar: string;
            nome: string;
            cpf: string;
            descricao: string;
            codigo: string;
        };
        corpo: string;
    };
    funcionario: {
        listarFundionarios: {
            titulo: string;

            subtitulo: string;
            cardSubtitulo: string;
        };
        editarFuncionario: {
            titulo: string;
            subtitulo: string;
        };
    };
    paginaCargo: {
        titulo: string;
        subtitulo: string;
    };
    paginaDepartamento: {
        titulo: string;
        subtitulo: string;
    };
}

export const ptBR: Dicionario = {
    navbar: {
        funcionario: "Funcionario",
        cargo: "Cargo",
        departamento: "Departamento",
    },
    tabela: {
        cabecalho: {
            editar: "Editar",
            nome: "Nome",
            cpf: "Cpf",
            descricao: "Descrição",
            codigo: "Código",
        },
        corpo: "",
    },
    funcionario: {
        listarFundionarios: {
            titulo: "Funcionários",
            subtitulo: "Veja os funcionários cadastrados no sistema.",
            cardSubtitulo:
                "Clique para ver os vínculos de empresa do funcionário",
        },
        editarFuncionario: {
            titulo: "Editar Funcionário",
            subtitulo: "Altere as informaçoes deste funcionário",
        },
    },

    paginaCargo: {
        titulo: "Cargos",
        subtitulo: "Veja os cargos cadastrados no sistema.",
    },
    paginaDepartamento: {
        titulo: "Departamentos",
        subtitulo: "Veja os departamentos cadastrados no sistema.",
    },
};
