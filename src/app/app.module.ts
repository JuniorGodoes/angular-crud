import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ListComponent } from './list/list.component';
import { ServiceApiService } from './service/service-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ListCategoriasComponent } from './list-categorias/list-categorias.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { CadastroCategoriasComponent } from './cadastro-categorias/cadastro-categorias.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { EditarLivrosComponent } from './editar-livros/editar-livros.component';
import { EditarCategoriasComponent } from './editar-categorias/editar-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    ListCategoriasComponent,
    CadastroLivrosComponent,
    CadastroCategoriasComponent,
    EditarLivrosComponent,
    EditarCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    ServiceApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
