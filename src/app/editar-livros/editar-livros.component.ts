import { ServiceApiService } from '../service/service-api.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { map } from 'rxjs';


@Component({
  selector: 'app-editar-livros',
  templateUrl: './editar-livros.component.html',
  styleUrls: ['./editar-livros.component.css']
})
export class EditarLivrosComponent {
  
  constructor(
    private service: ServiceApiService,
    private route: ActivatedRoute
  ){}

  categorias:any = []
  novascategorias:any = []
  titulo:any = ''
  ano:Number = 0
  livros:any = []
  livro:any = []
  id:any = ''

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.service.getcategorias().pipe(map((data:any) => data
    )).subscribe(dados => {

      this.categorias = dados
    });

    this.service.getlivros().pipe(map((data:any) => data
    )).subscribe(dados => {

      this.livros = dados
      this.titulo = this.livros.find((dados:any) => dados.id == this.id).titulo
      this.ano = this.livros.find((dados:any) => dados.id == this.id).ano
      this.novascategorias = this.livros.find((dados:any) => dados.id == this.id).categorias
    });
    
  }
  
  addnovacategoria(categoria:any){
    this.novascategorias.push(categoria)
    console.log(this.novascategorias)
  }

  Editar(){
    this.livro = {
      id: this.id,
      titulo: this.titulo,
      ano: this.ano,
      categorias: this.novascategorias
    }

    this.service.putlivros(this.livro)
    .subscribe()

    this.titulo = ''
    this.ano = 0
    this.novascategorias = []
  }

}
