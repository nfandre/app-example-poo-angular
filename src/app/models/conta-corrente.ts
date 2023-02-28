import { Conta } from "./conta";

export class ContaCorrente extends Conta {
    constructor(numeroConta: number, titular: string) {
        super(numeroConta, titular);
    }


    public gerarTaxa(): void {
        this.saldo += this.saldo * 15.90;
    }
    // Override on typeScript
    public sacar(valor: number, cobraCPMF?: boolean): boolean {
        if (cobraCPMF) {
            return this.sacar(valor + valor * .0038);
        }
        else {
            return this.sacar(valor);
        }
    }

}