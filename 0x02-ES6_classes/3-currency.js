// 3-currency.js

export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter for code attribute
  get code() {
    return this._code;
  }

  // Setter for code attribute
  set code(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for name attribute
  get name() {
    return this._name;
  }

  // Setter for name attribute
  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to display currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
