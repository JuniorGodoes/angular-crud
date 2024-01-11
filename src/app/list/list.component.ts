import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ServiceApiService } from '../service/service-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  constructor(
    private service: ServiceApiService,
    private router: Router
    ){}

  livros:any = []

  ngOnInit(): void {
    this.service.getlivros().pipe(map((data:any) => data
    )).subscribe(dados => {

      this.livros = dados
      console.log(this.livros)
    });
  }

  Editar(livro:any){
    this.router.navigate(['/editarlivros', livro.id])
  }

  Delete(id:any){
    this.service.deletelivros(id)
    .subscribe()

    console.log(id)
    console.log(typeof(id))
  }
}
