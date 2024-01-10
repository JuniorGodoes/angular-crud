import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-cadastro-livros',
  templateUrl: './cadastro-livros.component.html',
  styleUrls: ['./cadastro-livros.component.css'],
})
export class CadastroLivrosComponent implements OnInit{

  
  constructor(
    private service: ServiceApiService
  ){}

  categorias:any = []
  novascategorias:any = []
  titulo:any = ''
  ano:Number = 0
  novolivro:any = []

  ngOnInit(): void {

    this.service.getcategorias().pipe(map((data:any) => data
    )).subscribe(dados => {

      this.categorias = dados
      console.log(this.categorias)
    });
  }
  
  addnovacategoria(categoria:any){
    this.novascategorias.push(categoria)
    console.log(this.novascategorias)
  }

  teste(){
    alert(this.ano)
  }

  Cadastrar(){
    this.novolivro = {
      id: 0,
      titulo: this.titulo,
      ano: this.ano,
      categorias: this.novascategorias
    }

    this.service.postlivros(this.novolivro)
    .subscribe()

    this.novascategorias = []
    this.titulo = ''
    this.ano = 0

    alert('Cadastrado')
  }

  Editar(){
    
  }


}
