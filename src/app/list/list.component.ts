import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ServiceApiService } from '../service/service-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  constructor(private service: ServiceApiService){}

  livros:any = []

  ngOnInit(): void {

    this.service.getlivros().pipe(map((data:any) => data
    )).subscribe(dados => {

      this.livros = dados
      console.log(this.livros)
    });

  }

}
