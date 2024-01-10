import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListCategoriasComponent } from './list-categorias/list-categorias.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { CadastroCategoriasComponent } from './cadastro-categorias/cadastro-categorias.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent
  },
  {
    path: 'listlivros', component: ListComponent
  },
  {
    path: 'listcategorias', component: ListCategoriasComponent
  },
  {
    path: 'cadastrolivros', component: CadastroLivrosComponent
  },
  {
    path: 'cadastrocategorias', component: CadastroCategoriasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
