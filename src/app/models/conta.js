"use strict";
exports.__esModule = true;
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numeroConta, titular) {
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = 0;
    }
    Conta.prototype.sacar = function (valor) {
        if (valor < this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
        return true;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        var retirou = this.sacar(valor);
        if (retirou) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    };
    Conta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.gerarTaxa = function () { };
    return Conta;
}());
exports.Conta = Conta;
