import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private http: HttpClient) { }

  urlapi = 'http://localhost:5237/api'


  // Livros

  getlivros(){
    return this.http.get(`${this.urlapi}/livros`)
  }

  postlivros(livro:any){
    return this.http.post(`${this.urlapi}/livros`, livro)
  }

  putlivros(livro:any){
    return this.http.put(`${this.urlapi}/livros`, livro)
  }

  deletelivros(id:any){
    return this.http.delete(`${this.urlapi}/livros/${id}`, id)
  }


  // Categorias

  getcategorias(){
    return this.http.get(`${this.urlapi}/categorias`)
  }

  postcategorias(categoria:any){
    return this.http.post(`${this.urlapi}/categorias`, categoria)
  }

  putcategorias(categoria:any){
    return this.http.put(`${this.urlapi}/categorias`, categoria)
  }

  deletecategorias(id:any){
    return this.http.delete(`${this.urlapi}/categorias/${id}`, id)
  }
}
