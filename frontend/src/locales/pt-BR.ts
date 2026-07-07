interface Dicionario {
    navbar: {
        funcionario: string;
        cargo: string;
        departamento: string;
    },
    funcionario: {
        listarFundionarios:
            {
                titulo: string;
                subtitulo: string;
            },
        editarFuncionario: {
            titulo: string;
            subtitulo: string;
        },
    },
    paginaCargo: {
        titulo: string;
        subtitulo: string;
    },
    paginaDepartamento: {
        titulo: string;
        subtitulo: string;
    }

}

export const ptBR: Dicionario = {

    navbar: {
        funcionario: "Funcionario",
        cargo: "Cargo",
        departamento: "Departamento",
    },
    funcionario: {
        listarFundionarios:
            {

                titulo: "Funcionários",
                subtitulo: "Veja os funcionários cadastrados no sistema.",
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
    }

}