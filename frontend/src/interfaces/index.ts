export interface IFuncionarios {
    cpf: string;
    nome: string;
}

export interface ICargos {
    codigoDoCargo: number;
    descricaoDoCargo: string;
}

export interface IDepartamentos {
    codigoDepartamento: number;
    descricaoDoDepartamento: string;
}

export interface IPageResponse<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}

export interface IVinculos {
    cargo: string;
    departamento: string;
    empresa: string;
    funicionario: string;
    matricula: number;
}

export interface IVinculoItem {
    id?: number | string;
    empresa: string;
    matricula: string;
    cargo: string;
    departamento: string;
    cpf?: string;
    [key: string]: any;
}
