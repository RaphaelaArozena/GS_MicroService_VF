import { IEspeciesInterface } from "./especies.interface";

export interface IOceanData {
    regiao: string;
    temperaturaAgua: number;
    pH: number;
    nivelPoluicao: string;
    especies: Array<IEspeciesInterface>
} 