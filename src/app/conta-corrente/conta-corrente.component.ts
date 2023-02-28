import { Component, Inject, OnInit } from '@angular/core';
import { ContaComponent } from '../conta/conta.component';

@Component({
  selector: 'app-conta-corrente',
  templateUrl: './conta-corrente.component.html',
  styleUrls: ['./conta-corrente.component.scss']
})
export class ContaCorrenteComponent extends ContaComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  public  gerarTaxa(): void {
    this.saldo += this.saldo * 15.90;
  }
  // Override on typeScript
  public sacar(valor: number, cobraCPMF?: boolean): boolean{
    if (cobraCPMF) {
      this.saldo = this.saldo - valor - ( valor * .0038);
      return true;
    }
    else {
      return this.sacar(valor);
    }
  }
}
