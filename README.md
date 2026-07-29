# Sistema Bancário Simples

Projeto criado para praticar conceitos de Orientação a Objetos em JavaScript: classes, encapsulamento, herança, abstração e sobrecarga de métodos (override).

## Funcionalidades

- *ContaBancaria*: classe base com depósito, saque e consulta de saldo, com o saldo protegido por encapsulamento (atributo privado).
- *ContaCorrente*: herda de ContaBancaria e adiciona um limite de cheque especial, permitindo saques mesmo com saldo insuficiente, até o limite definido.
- *ContaPoupanca*: herda de ContaBancaria e adiciona rendimento de juros sobre o saldo através do método renderJuros().

## Conceitos praticados

- Classes e objetos
- Encapsulamento (atributos privados com #)
- Herança (extends e super)
- Sobrescrita de métodos (override)
- Reaproveitamento de lógica entre classe pai e filha
