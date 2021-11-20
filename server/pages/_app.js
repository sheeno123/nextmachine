"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _hooks_useWalletBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(730);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






__webpack_require__(121);

const WalletConnectionProvider = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(526), __webpack_require__.e(87), __webpack_require__.e(354)]).then(__webpack_require__.bind(__webpack_require__, 354)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(354)],
    modules: ["_app.tsx -> " + "../components/WalletConnection/WalletConnectionProvider"]
  }
});

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(WalletConnectionProvider, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_hooks_useWalletBalance__WEBPACK_IMPORTED_MODULE_1__/* .WalletBalanceProvider */ .P, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ 492:
/***/ ((module) => {

module.exports = require("@ledgerhq/hw-transport");

/***/ }),

/***/ 631:
/***/ ((module) => {

module.exports = require("@ledgerhq/hw-transport-webhid");

/***/ }),

/***/ 391:
/***/ ((module) => {

module.exports = require("@project-serum/anchor");

/***/ }),

/***/ 681:
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ 619:
/***/ ((module) => {

module.exports = require("@toruslabs/openlogin");

/***/ }),

/***/ 209:
/***/ ((module) => {

module.exports = require("@toruslabs/openlogin-ed25519");

/***/ }),

/***/ 815:
/***/ ((module) => {

module.exports = require("bs58");

/***/ }),

/***/ 553:
/***/ ((module) => {

module.exports = require("eventemitter3");

/***/ }),

/***/ 307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [627,492,730], () => (__webpack_exec__(476)));
module.exports = __webpack_exports__;

})();