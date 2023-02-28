
var Conta = function () {
    function Conta(numeroConta, titular) {
        // private
        _Conta_numeroConta.set(this, void 0);
        __classPrivateFieldSet(this, _Conta_numeroConta, numeroConta, "f");
        this.titular = titular;
        this.saldo = 0;
    }

    function  sacar (valor) {
        if (valor < this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    };

    function  depositar (valor) {
        this.saldo += valor;
        return true;
    };
    
    function transferir (contaDestino, valor) {
        var retirou = this.sacar(valor);
        if (retirou) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    };
    
    function getSaldo () {
        return this.saldo;
    };
    
    function gerarTaxa ()  { };
    
    return Conta;
};