"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Conta_numeroConta;
exports.__esModule = true;
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numeroConta, titular) {
        // private
        _Conta_numeroConta.set(this, void 0);
        __classPrivateFieldSet(this, _Conta_numeroConta, numeroConta, "f");
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
_Conta_numeroConta = new WeakMap();
