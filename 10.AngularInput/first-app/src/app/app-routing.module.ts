import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputCompComponent } from './input-comp/input-comp.component';
import { TabelCompComponent } from './tabel-comp/tabel-comp.component';
import { AppComponent } from './app.component';
import { HelloUserComponent } from './hello-user/hello-user.component';

const routes: Routes = [{path:'', component: AppComponent},
{path:'demo', component: InputCompComponent},
{path:'tabel', component: TabelCompComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
