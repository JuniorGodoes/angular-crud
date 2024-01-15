import { Component } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { FormControl, FormGroup } from '@angular/forms';

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
  novacategoria = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('')
  })


  Cadastrar(){

    this.service.postcategorias(this.novacategoria.value)
    .subscribe()

    this.novacategoria = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('')
    })


    alert('Cadastrado')
  }

}
