// 4-pricing.js

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter for amount attribute
  get amount() {
    return this._amount;
  }

  // Setter for amount attribute
  set amount(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // Getter for currency attribute
  get currency() {
    return this._currency;
  }

  // Setter for currency attribute
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency class');
    }
    this._currency = value;
  }

  // Method to display full price
  displayFullPrice() {
    return `${this.amount} ${this._currency.displayFullCurrency()}`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
