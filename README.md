# Simple Banking System

A project created to practice Object-Oriented Programming concepts in JavaScript, including classes, encapsulation, inheritance, abstraction, and method overriding.

## Features

* *BankAccount*: base class with deposit, withdrawal, and balance inquiry functionality. The balance is protected through encapsulation using a private attribute.
* *CheckingAccount*: inherits from BankAccount and adds an overdraft limit, allowing withdrawals even when the balance is insufficient, up to the defined limit.
* *SavingsAccount*: inherits from BankAccount and adds interest earnings on the balance through the `applyInterest()` method.

## Concepts Practiced

* Classes and objects
* Encapsulation (private attributes using `#`)
* Inheritance (`extends` and `super`)
* Method overriding
* Reusing logic between parent and child classes
