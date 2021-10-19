(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["custom-jy"] = factory());
})(this, (function () { 'use strict';

  // src/foo.js
  var foo = 'hello world!';

  // src/main.js
  function index () {
    console.log(foo);
  }

  return index;

}));
