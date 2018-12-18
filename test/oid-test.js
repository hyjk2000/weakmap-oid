"use strict";

const assert = require("assert");
const util = require("util");

const Oid = require("../lib/oid");
const subject = new Oid();

(function test_id_1(oid) {
  const a = {};
  const b = {};
  const c = b;

  assert.equal(0, oid.id(a));
  assert.equal(1, oid.id(b));
  assert.equal(1, oid.id(c));
})(subject);

global.gc();

(function test_id_2(oid) {
  const a = {};
  const b = {};
  const c = b;

  assert.equal(2, oid.id(a));
  assert.equal(3, oid.id(b));
  assert.equal(3, oid.id(c));
})(subject);

(function test_equal(oid) {
  const a = [];
  const b = [];
  const c = b;

  assert.equal(false, oid.equal(a, b));
  assert.equal(true, oid.equal(b, c));
})(subject);

(function test_gc(oid) {
  assert.equal(5, oid._incrementor);
  assert.equal(
    "WeakMap { {} => 2, {} => 3, {} => 4, {} => 5 }",
    util.inspect(oid._identities, { showHidden: true })
  );
})(subject);

console.log("All tests passed.");
