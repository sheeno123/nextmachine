"use strict";
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useWalletBalance),
/* harmony export */   "P": () => (/* binding */ WalletBalanceProvider)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(627);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(681);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(391);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const BalanceContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
const rpcHost = "https://borgarpresale.herokuapp.com/";
console.log(rpcHost);
const connection = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_3__.web3.Connection(rpcHost);
function useWalletBalance() {
  const {
    0: balance,
    1: setBalance
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(BalanceContext);
  return [balance, setBalance];
}
const WalletBalanceProvider = ({
  children
}) => {
  const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__/* .useWallet */ .Os)();
  const {
    0: balance,
    1: setBalance
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (async () => {
      if (wallet !== null && wallet !== void 0 && wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (async () => {
      if (wallet !== null && wallet !== void 0 && wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(BalanceContext.Provider, {
    value: [balance, setBalance],
    children: children
  });
};

/***/ })

};
;