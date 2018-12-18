# weakmap-oid

[![Build Status](https://travis-ci.org/hyjk2000/weakmap-oid.svg?branch=master)](https://travis-ci.org/hyjk2000/weakmap-oid)

[![npm](https://nodei.co/npm/weakmap-oid.png)](https://nodei.co/npm/weakmap-oid/)

Generate unique object IDs with WeakMap-based identity set.

## Why do I need this?

`weakmap-oid` is useful when you need to do shallow (object identity) comparison across objects that were serialized (like in [Electron](https://electronjs.org/)'s IPC module) or transformed to another language (like in [CefSharp](https://cefsharp.github.io)'s JavaScript callbacks) or any other cases in which triple-equals (`===`) is no longer available. Sending a unique object ID along with the object eliminates the need for deep comparisons on the other side.

`weakmap-oid` uses `WeakMap` to maintain the mapping between objects and identities. Since native `WeakMap` [does not prevent garbage collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#Why_WeakMap) of its key objects, using `weakmap-oid` will not lead to memory leak.

## Installation

```bash
$ npm install weakmap-oid

# or

$ yarn add weakmap-oid
```

## Usage

```javascript
import Oid from "weakmap-oid";

const oid = new Oid();

const a = {};
const b = {};
const c = b;

oid.id(a); // 0
oid.id(b); // 1
oid.id(c); // 1

oid.equal(a, b); // false
oid.equal(b, c); // true
```
