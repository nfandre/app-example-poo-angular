import { Component, Inject, OnInit } from '@angular/core';
import { Conta } from '../models/conta';

@Component({
  selector: 'app-conta-poupanca',
  templateUrl: './conta-poupanca.component.html',
  styleUrls: ['./conta-poupanca.component.scss']
})
export class ContaPoupancaComponent extends Conta implements OnInit {
  
  constructor() {
    super( 2020, 'Pedro', 1000);
  }

  ngOnInit(): void {
  }
  public  gerarTaxa(): void {
    this.saldo += this.saldo * .006;
  }
}
