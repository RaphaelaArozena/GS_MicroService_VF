import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { IOceanData } from './models/ocean-data.interface';
import { AppService } from './app.service';
import { InputTextModule  } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableModule, InputTextModule , FormsModule, ButtonModule, DropdownModule, ProgressSpinnerModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rapha_subaru';

  public loading = false;
  
     

  // listas dos filtros
  public regioesFiltro = ["Atlântico Norte", "Atlântico Sul", "Pacífico Norte", "Pacífico Sul", "Índico", "Ártico", "Antártico" ];
  public especiesFiltro = ["Baleia-azul", "Tubarão-branco", "Peixe-palhaço", "Tartaruga-verde", "Coral"];
  public statusConservacaoFiltro = ["Ameaçada", "Vulnerável", "Menos preocupante", "Criticamente ameaçado"]
  public nivelPoluicaoFiltro = ["Baixo", "Moderado", "Alto"];
  // retorno da api
  public oceanData: IOceanData[] = [];
  
  // filtros
  public regiao: string = "";
  public especie: string = ""
  public statusConservacao: string = ""
  public temperaturaMin: string = ""
  public temperaturaMax: string = ""
  public phMin: string = ""
  public phMax: string = ""
  public nivelPoluicao: string = ""
  public pagina: string = ""
  public qtde: string = ""






  constructor(private appService: AppService) {
   
  }


  getData() {
    this.loading = true;
    this.appService.getOceanData(this.regiao, this.especie, this.statusConservacao, this.temperaturaMin, this.temperaturaMax, this.phMin, this.phMax, this.nivelPoluicao, this.pagina, this.qtde).subscribe(res => {
      this.oceanData = res;
      this.loading = false;
    }, 
  err => {
    console.warn(`Erro ao integrar com a api`)
    this.loading = false;
  });
  }


  ngOnInit() {
    this.getData();
   
  }


}
