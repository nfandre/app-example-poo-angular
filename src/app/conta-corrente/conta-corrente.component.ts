import { Component, OnInit } from '@angular/core';
import { Conta } from '../models/conta';

@Component({
  selector: 'app-conta-corrente',
  templateUrl: './conta-corrente.component.html',
  styleUrls: ['./conta-corrente.component.scss']
})
export class ContaCorrenteComponent extends Conta implements OnInit {

  constructor() {
    super( 1010, 'Lucas', 1000);
  }

  ngOnInit(): void {
  }
  public  gerarTaxa(): void {
    this.saldo += this.saldo * 15.90;
  }
  // Override on typeScript
  public override sacar(valor: number, cobraCPMF?: boolean): boolean{
    if (cobraCPMF) {
      this.saldo = this.saldo - valor - ( valor * .0038);
      return true;
    }
    else {
      this.saldo -= valor;
      return true;
    }
  }
}
