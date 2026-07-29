// Classe base que representa uma conta bancária genérica
class ContaBancaria {
    #saldo // saldo privado, só acessível dentro da própria classe

    constructor(titular, numeroConta){
        this.titular = titular
        this.numeroConta = numeroConta
        this.#saldo = 0 // toda conta nova começa com saldo zerado
    }

    // Adiciona um valor ao saldo, validando que seja positivo
    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
        } else {
            console.log("Valor inválido.")
        }
    }

    // Remove um valor do saldo, respeitando o saldo disponível.
    // O parâmetro "limiteExtra" permite que subclasses,
    // como ContaCorrente, reutilizem esse método considerando
    // um limite adicional de saque.
    sacar(valor, limiteExtra = 0){
        if(valor > 0 && valor <= this.#saldo + limiteExtra){
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente.")
        }
    }

    // Retorna o saldo atual (única forma de acessá-lo de fora da classe)
    verSaldo(){
        return (this.#saldo)
    }
}

// Conta corrente: possui um limite de cheque especial,
// permitindo saques mesmo com saldo abaixo do valor sacado
class ContaCorrente extends ContaBancaria{
    #limite

    constructor(titular, numeroConta, limite){
        super(titular, numeroConta)
        this.#limite = limite
    }

    // Sobrescreve o sacar() da classe pai, repassando o #limite
    // como limite extra disponível para o saque
    sacar(valor){
        super.sacar(valor, this.#limite)
    }
}

// Conta poupança: não possui limite de saque, mas rende juros
// sobre o saldo através do método renderJuros()
class ContaPoupança extends ContaBancaria{
    #juros // taxa de juros da conta (ex: 0.01 = 1%)

    constructor(titular, numeroConta, juros){
        super(titular, numeroConta)
        this.#juros = juros
    }

    // Calcula o valor do juro com base na taxa da conta
    // e adiciona esse valor ao saldo via depositar()
    renderJuros(){
        const juro = this.verSaldo() * this.#juros;
        this.depositar(juro);
    }
}