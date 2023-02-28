import { Component, Inject, OnInit } from '@angular/core';
import { ContaComponent } from '../conta/conta.component';

@Component({
  selector: 'app-conta-poupanca',
  templateUrl: './conta-poupanca.component.html',
  styleUrls: ['./conta-poupanca.component.scss']
})
export class ContaPoupancaComponent extends ContaComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  public  gerarTaxa(): void {
    this.saldo += this.saldo * .006;
  }
}
