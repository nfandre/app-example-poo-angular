import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContaComponent } from './conta/conta.component';
import { ContaCorrenteComponent } from './conta-corrente/conta-corrente.component';
import { ContaPoupancaComponent } from './conta-poupanca/conta-poupanca.component';

@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    ContaCorrenteComponent,
    ContaPoupancaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
