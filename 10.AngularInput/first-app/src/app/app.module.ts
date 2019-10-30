import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputCompComponent } from './input-comp/input-comp.component';
import { TabelCompComponent } from './tabel-comp/tabel-comp.component';
import { AppRoutingModule } from './app-routing.module';
import { MainCompComponent } from './main-comp/main-comp.component';
import { HelloUserComponent } from './hello-user/hello-user.component';

@NgModule({
  declarations: [
    AppComponent,
    InputCompComponent,
    TabelCompComponent,
    MainCompComponent,
    HelloUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainCompComponent]
})
export class AppModule { }

