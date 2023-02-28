import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {

  @Input() numeroConta: number = 0;
  @Input()  titular: string = '';
  @Input() saldo: number = 1000;

  constructor() {
  }

  ngOnInit(): void {
  }

  public sacar(valor: number): boolean {
    if (valor < this.saldo) {      
      this.saldo -= valor;
         return true;
      }
      return false;
  }
  
  public depositar(valor: number) : boolean {
    this.saldo += valor;
    return true;
  }

  public transferir(contaDestino: any, valor: number){ 
    const retirou = this.sacar(valor);
    if (retirou) {
       contaDestino.depositar(valor);
       return true;
    }
    return false;
  }

  public getSaldo(): number {
    return this.saldo;
  }
  public  gerarTaxa(): void {}

}
