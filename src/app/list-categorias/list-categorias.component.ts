import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categorias',
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.css']
})
export class ListCategoriasComponent implements OnInit{

  constructor(
    private service: ServiceApiService,
    private router: Router
  ){}

  categorias:any = []

  ngOnInit(): void {

    this.service.getcategorias().pipe(map((data:any) => data
    )).subscribe(dados => {

      this.categorias = dados
      console.log(this.categorias)
    });
  }

  Editar(categoria:any){
    this.router.navigate(['/editarcategorias', categoria.id])
  }

  Delete(id:any){
    this.service.deletecategorias(id)
    .subscribe(console.log)
  }

}
