import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOceanData } from './models/ocean-data.interface';
import API from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  public getOceanData(regiao: string, especie: string, statusConservacao: string, temperaturaMin: string, temperaturaMax: string, phMin: string, phMax: string,
    nivelPoluicao: string, pagina: string, qtde: string,
   ): Observable<IOceanData[]> {
    return this.http.get<IOceanData[]>(`${API.BASE_URL}/OceanData?regiao=${regiao}&especie=${especie}&statusConservacao=${statusConservacao}&temperaturaMin=${temperaturaMin}&temperaturaMax=${temperaturaMax}&phMin=${phMin}&phMax=${phMax}&nivelPoluicao=${nivelPoluicao}`);
  }
}
