export class Conta {
  // private
  #numeroConta: number;
  titular: string;
  saldo: number;

  constructor(numeroConta: number, titular: string) {
    this.#numeroConta = numeroConta;
    this.titular = titular;
    this.saldo = 0;
  }


  public sacar(valor: number): boolean {
    if (valor < this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  public depositar(valor: number): boolean {
    this.saldo += valor;
    return true;
  }

  public transferir(contaDestino: any, valor: number) {
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
  public gerarTaxa(): void { }
}