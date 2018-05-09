import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  digits: string[] = [];
  number1: number = null;
  number2: number = null;
  operator: string = null;
  decimal: boolean = false;

  private value() {
    return parseFloat(this.digits.join(''));
  }

  onClickDecimal() {
    if (!this.decimal) {
      this.decimal = true;
      this.digits.push('.');
    }
  }

  onClickNumber(number) {
    this.digits.push(number);
  }

  onClickOperator(operator) {
    let value = this.value();

    if (!isNaN(value)) {
      this.number1 = value;
    }

    this.digits = [];
    this.number2 = null;
    this.operator = operator;
    this.decimal = false;
  }

  onClickEquals() {
    let value = this.value();

    if (isNaN(value)) {
      return;
    }

    let number1 = this.number1;
    let number2 = this.number2 !== null ? this.number2 : value;
    let result = null;

    switch (this.operator) {
      case '/': result = number1 / number2; break;
      case '*': result = number1 * number2; break;
      case '-': result = number1 - number2; break;
      case '+': result = number1 + number2; break;
    }

    if (result === null) {
      return;
    }

    this.digits = result.toString().split('');
    this.number1 = result;
    this.number2 = number2;
    this.decimal = false;
  }

  onClickClear() {
    this.digits = [];
    this.number1 = null;
    this.number2 = null;
    this.operator = null;
    this.decimal = false;
  }

}
