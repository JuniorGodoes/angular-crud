import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-cadastro-livros',
  templateUrl: './cadastro-livros.component.html',
  styleUrls: ['./cadastro-livros.component.css']
})
export class CadastroLivrosComponent implements OnInit{

  
  constructor(
    private service: ServiceApiService,
    private formBuilder: FormBuilder
  ){}


  todascategorias:any = []
  novascategorias = new FormArray([])


  novolivro = this.formBuilder.group({
    id: 0,
    titulo: ['', Validators.required],
    ano: [0, Validators.required],
    categorias: new FormArray([new FormControl('')], Validators.required)
  })


  ngOnInit(): void {

    this.service.getcategorias().pipe(map((data:any) => data
    )).subscribe(dados => {
      this.todascategorias = dados
    });
    
  }

  get categorias() {
    return this.novolivro.get('categorias') as FormArray;
  }

  getformControl(index: number): FormControl{
    return this.categorias.controls[index] as FormControl
  }


  addAlias() {
    this.categorias.push(this.formBuilder.control(''));
  }


  teste(){
    console.log(this.novolivro)
  }

  Cadastrar(){

    this.service.postlivros(this.novolivro.value)
    .subscribe()

    this.novolivro = this.formBuilder.group({
      id: 0,
      titulo: ['', Validators.required],
      ano: [0, Validators.required],
      categorias: new FormArray([new FormControl('')], Validators.required)
    })

    alert('Cadastrado')
  }


}
