import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private http: HttpClient) { }

  urlapi = 'http://localhost:5237/api'

  getlivros(){
    return this.http.get(`${this.urlapi}/livros`)
  }

  postlivros(livro:any){
    return this.http.post(`${this.urlapi}/livros`, livro)
  }

  getcategorias(){
    return this.http.get(`${this.urlapi}/categorias`)
  }

  postcategorias(categoria:any){
    return this.http.post(`${this.urlapi}/categorias`, categoria)
  }
}
