import { Component, Inject, OnInit } from '@angular/core';
import { ContaComponent } from '../conta/conta.component';

@Component({
  selector: 'app-conta-corrente',
  templateUrl: './conta-corrente.component.html',
  styleUrls: ['./conta-corrente.component.scss']
})
export class ContaCorrenteComponent extends ContaComponent implements OnInit {

  constructor(@Inject('numeroConta') numeroConta: number,  @Inject('titular')  titular: string) {
    super(numeroConta, titular);
  }

  ngOnInit(): void {
  }
  public  gerarTaxa(): void {
    this.saldo += this.saldo * 15.90;
  }
  // Override on typeScript
  public sacar(valor: number, cobraCPMF?: boolean): boolean{
    if (cobraCPMF) {
      return this.sacar(valor + valor * .0038);
    }
    else {
      return this.sacar(valor);
    }
  }
}
