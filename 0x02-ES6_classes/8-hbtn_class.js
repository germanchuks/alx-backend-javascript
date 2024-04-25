// 8-hbtn_class.js

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  __toString__() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
