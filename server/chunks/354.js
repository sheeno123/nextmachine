"use strict";
exports.id = 354;
exports.ids = [354];
exports.modules = {

/***/ 354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(627);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(526);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(681);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const WalletConnectionProvider = ({
  children
}) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = "mainnet-beta";
  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl)(network), [network]);
  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => [(0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__/* .getPhantomWallet */ .yJ)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__/* .getSlopeWallet */ .Wf)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__/* .getSolflareWallet */ .IS)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__/* .getTorusWallet */ .sc)({
    options: {
      clientId: "CLIENT_ID"
    }
  }), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__/* .getLedgerWallet */ .DT)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__/* .getSolletWallet */ .Dy)({
    network
  }), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__/* .getSolletExtensionWallet */ .KR)({
    network
  })], [network]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__/* .ConnectionProvider */ .U, {
    endpoint: endpoint,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__/* .WalletProvider */ .nS, {
      wallets: wallets,
      autoConnect: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__/* .WalletModalProvider */ .sR, {
        children: children
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletConnectionProvider);

/***/ })

};
;