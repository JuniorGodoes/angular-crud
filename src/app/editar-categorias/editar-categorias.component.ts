import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.component.css']
})
export class EditarCategoriasComponent implements OnInit{

  constructor(
    private service: ServiceApiService,
    private route: ActivatedRoute
    ){}

  id:any = ''
  categorias:any = []
  novonome:String = ''
  novacategoria:any = []

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.service.getcategorias().pipe(map((data:any) => data
    )).subscribe(dados => {

      this.categorias = dados
      this.novonome = this.categorias.find((dados:any) => dados.id == this.id).name
    });

  }

  Editar(){
    this.novacategoria = {
      id: this.id,
      name: this.novonome
    }

    this.service.putcategorias(this.novacategoria)
    .subscribe()

    this.novonome = ''
  }
  

}
