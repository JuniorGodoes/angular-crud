import { Component } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';

@Component({
  selector: 'app-cadastro-categorias',
  templateUrl: './cadastro-categorias.component.html',
  styleUrls: ['./cadastro-categorias.component.css']
})
export class CadastroCategoriasComponent {

  constructor(
    private service: ServiceApiService
  ){}

  nome: String = ''
  novacategoria: any = []

  Cadastrar(){
    this.novacategoria = {
      id: 0,
      name: this.nome,
    }

    this.service.postcategorias(this.novacategoria)
    .subscribe()

    this.nome = ''


    alert('Cadastrado')
  }

}
