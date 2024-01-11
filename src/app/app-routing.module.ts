import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListCategoriasComponent } from './list-categorias/list-categorias.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { CadastroCategoriasComponent } from './cadastro-categorias/cadastro-categorias.component';
import { EditarLivrosComponent } from './editar-livros/editar-livros.component';
import { EditarCategoriasComponent } from './editar-categorias/editar-categorias.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'listlivros', component: ListComponent},
  {path: 'listcategorias', component: ListCategoriasComponent},
  {path: 'cadastrolivros', component: CadastroLivrosComponent},
  {path: 'cadastrocategorias', component: CadastroCategoriasComponent},
  {path: 'editarcategorias/:id', component: EditarCategoriasComponent},
  {path: 'editarlivros/:id', component: EditarLivrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
