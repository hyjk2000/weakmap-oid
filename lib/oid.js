"use strict";

function Oid() {
  this._incrementor = -1;
  this._identities = new WeakMap();
}

Oid.prototype.id = function (obj) {
  if (this._identities.has(obj)) {
    return this._identities.get(obj);
  } else {
    this._identities.set(obj, ++this._incrementor);
    return this._incrementor;
  }
};

Oid.prototype.equal = function (a, b) {
  return this.id(a) === this.id(b);
};

module.exports = Oid;
