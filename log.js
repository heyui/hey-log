(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.log = factory();
}((typeof window == 'object' ? window : typeof global == 'object' ? global : this), function () {
  "use strict";

  function heyLog() {
    console.log.apply(console, arguments);
    return this;
  }

  heyLog.info() {
    console.info.apply(console, arguments);
    return this;
  }

  heyLog.error() {
    console.error.apply(console, arguments);
    return this;
  }
  return heyLog;
}));
