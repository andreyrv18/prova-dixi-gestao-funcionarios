interface Dicionario {
    navbar: {
        funcionario: string;
        cargo: string;
        departamento: string;
    };
    input: {
        nomeDoFuncionario: string;
        cpf: string;
        insiraONomeDoFuncionario: string;
        mascaraCPF: string;
        nomeDaEmpresa: string;
        matricula: string;
        cargo: string;
        departamento: string;
        insiraONomeDaEmpresa: string;
        mascaraMatricula: string;
        selecioneUmaOpcao: string;
        codigoDoDepartamento: string;
        descricaoDoDepartamento: string;
    };
    card: {
        titulo: string;
    };
    tabela: {
        cabecalho: {
            editar: string;
            nome: string;
            cpf: string;
            descricao: string;
            codigo: string;
            vinculo: string;
            empresa: string;
            matricula: string;
            cargo: string;
            departamento: string;
        };
        routeId: {
            funcionario: string;
            funcionarioEditar: string;
            cargos: string;
            departamentos: string;
        };
        chavesDeAcesso: {
            funcionario: string[];
            cargos: string[];
            departamentos: string[];
            vinculos: string[];
        };

        corpo: string;
    };

    botao: {
        baixarRelatorio: string;
        cancelar: string;
        confirmar: string;
        salvar: string;
        novoVinculo: string;
        novoFuncionario: string;
        novoCargo: string;
        novoDepartamento: string;
    };

    paginaFuncionario: {
        listar: {
            titulo: string;
            subtitulo: string;
            cardSubtitulo: string;
        };
        editar: {
            titulo: string;
            subtitulo: string;
        };
    };
    paginaCargo: {
        listar: {
            titulo: string;
            subtitulo: string;
            cardSubtitulo: string;
        };
        editar: {
            titulo: string;
            subtitulo: string;
        };
        input: {
            label: string;
            nameCodigo: string;
            nameDescricao: string;
            dataTest: {
                descricao: string;
                codigo: string;
            };
            placeholderDescricao: string;
            placeholderCodigo: string;
        };
    };
    paginaDepartamento: {
        listar: {
            titulo: string;
            subtitulo: string;
            cardSubtitulo: string;
        };
        editar: {
            titulo: string;
            subtitulo: string;
        };
        input: {
            label: string;
            nameCodigo: string;
            nameDescricao: string;
            dataTest: {
                descricao: string;
                codigo: string;
            };
            placeholderDescricao: string;
            placeholderCodigo: string;
        };
    };
}

export const ptBR: Dicionario = {
    navbar: {
        funcionario: "Funcionario",
        cargo: "Cargo",
        departamento: "Departamento",
    },
    input: {
        nomeDoFuncionario: "Nome do Funcionário",
        cpf: "CPF",
        insiraONomeDoFuncionario: "Insira o nome do funcionário",
        insiraONomeDaEmpresa: "Insira o nome da empresa",
        mascaraMatricula: "0000000000",
        mascaraCPF: "000.000.000-00",
        nomeDaEmpresa: "Nome da Empresa",
        matricula: "Matrícula",
        cargo: "Cargo",
        departamento: "Departamento",
        selecioneUmaOpcao: "Selecione Uma Opcão",
        descricaoDoDepartamento: "Descrição do Departamento",
        codigoDoDepartamento: "Código do Departamento",
    },
    card: {
        titulo: "Informações Gerais",
    },
    tabela: {
        cabecalho: {
            editar: "Editar",
            nome: "Nome",
            cpf: "Cpf",
            descricao: "Descrição",
            codigo: "Código",
            vinculo: "Empresas",
            empresa: "Empresa",
            matricula: "Matrícula",
            cargo: "Cargo",
            departamento: "Departamento",
        },
        routeId: {
            funcionario: "rota-funcionarios",
            funcionarioEditar: "rota-funcionarios-editar",
            cargos: "rota-cargos",
            departamentos: "rota-departamentos",
        },
        chavesDeAcesso: {
            funcionario: ["nome", "cpf"],
            cargos: ["descricaoDoCargo", "codigoDoCargo"],
            departamentos: ["descricaoDoDepartamento", "codigoDepartamento"],
            vinculos: ["empresa", "matricula", "cargo", "departamento"],
        },

        corpo: "",
    },
    botao: {
        baixarRelatorio: "Baixar Realatório",
        novoFuncionario: "Novo Funcionário",
        novoCargo: "Novo Cargo",
        novoDepartamento: "Novo Departamento",
        cancelar: "Cancelar",
        confirmar: "Confirmar",
        salvar: "Salvar",
        novoVinculo: "Novo Vínculo",
    },
    paginaFuncionario: {
        listar: {
            titulo: "Funcionários",
            subtitulo: "Veja os funcionários cadastrados no sistema.",
            cardSubtitulo:
                "Clique para ver os vínculos de empresa do funcionário",
        },
        editar: {
            titulo: "Editar Funcionário",
            subtitulo: "Altere as informaçoes deste funcionário",
        },
    },

    paginaCargo: {
        listar: {
            titulo: "Cargos",
            subtitulo: "Veja os cargos cadastrados no sistema.",
            cardSubtitulo:
                "Clique para ver os vínculos de empresa do funcionário",
        },
        editar: {
            titulo: "Editar Funcionário",
            subtitulo: "Altere as informaçoes deste funcionário",
        },
        input: {
            label: "Descrição do Cargo",
            nameDescricao: "Descrição",
            nameCodigo: "Código",
            dataTest: {
                descricao: "search-cargo-descicao",
                codigo: "search-cargo-codigo",
            },

            placeholderDescricao: "Procure pelo nome do cargo",
            placeholderCodigo: "Procure pelo código do cargo",
        },
    },
    paginaDepartamento: {
        listar: {
            titulo: "Departamentos",
            subtitulo: "Veja os departamentos cadastrados no sistema.",
            cardSubtitulo:
                "Clique para ver os vínculos de empresa do funcionário",
        },
        editar: {
            titulo: "Editar Funcionário",
            subtitulo: "Altere as informaçoes deste funcionário",
        },
        input: {
            label: "Descrição do Departamento",
            nameCodigo: "Código",
            nameDescricao: "Descrição",
            dataTest: {
                descricao: "search-departamento-descricao",
                codigo: "search-departamento-codigo",
            },
            placeholderDescricao: "Procure pelo nome do departamento",
            placeholderCodigo: "Procure pelo código do departamento",
        },
    },
};
