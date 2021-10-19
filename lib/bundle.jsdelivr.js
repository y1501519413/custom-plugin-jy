/**
 * 自定义插件
 * @version: 1.0.4
 * @author: yang <m15009010297@163.com>
 * @date: 2021-10-19
 **/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.custom = factory());
})(this, (function () { 'use strict';

  var index$1 = 42;

  var index = (function () {
    console.log("the answer is ".concat(index$1));
  });

  return index;

}));
