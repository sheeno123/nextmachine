"use strict";
exports.id = 627;
exports.ids = [627];
exports.modules = {

/***/ 637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "eC": () => (/* reexport */ BaseMessageSignerWalletAdapter),
  "sz": () => (/* reexport */ BaseSignerWalletAdapter),
  "QZ": () => (/* reexport */ WalletAdapterNetwork),
  "$w": () => (/* reexport */ WalletConnectionError),
  "at": () => (/* reexport */ WalletDisconnectedError),
  "UG": () => (/* reexport */ WalletDisconnectionError),
  "lj": () => (/* reexport */ WalletError),
  "Db": () => (/* reexport */ WalletKeypairError),
  "oS": () => (/* reexport */ WalletNotConnectedError),
  "l5": () => (/* reexport */ WalletNotFoundError),
  "Yf": () => (/* reexport */ WalletNotInstalledError),
  "OZ": () => (/* reexport */ WalletNotReadyError),
  "Nx": () => (/* reexport */ WalletPublicKeyError),
  "fk": () => (/* reexport */ WalletSignMessageError),
  "PY": () => (/* reexport */ WalletSignTransactionError),
  "NK": () => (/* reexport */ WalletTimeoutError),
  "d2": () => (/* reexport */ WalletWindowBlockedError),
  "hd": () => (/* reexport */ WalletWindowClosedError),
  "_j": () => (/* reexport */ pollUntilReady)
});

// UNUSED EXPORTS: BaseWalletAdapter, EventEmitter, WalletAccountError, WalletSendTransactionError, poll

// EXTERNAL MODULE: external "eventemitter3"
var external_eventemitter3_ = __webpack_require__(553);
var external_eventemitter3_default = /*#__PURE__*/__webpack_require__.n(external_eventemitter3_);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-base/lib/adapter.js


class BaseWalletAdapter extends (external_eventemitter3_default()) {}
var WalletAdapterNetwork;

(function (WalletAdapterNetwork) {
  WalletAdapterNetwork["Mainnet"] = "mainnet-beta";
  WalletAdapterNetwork["Testnet"] = "testnet";
  WalletAdapterNetwork["Devnet"] = "devnet";
})(WalletAdapterNetwork || (WalletAdapterNetwork = {}));
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
class WalletError extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(message, error) {
    super(message);
    this.error = error;
  }

}
class WalletNotFoundError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotFoundError';
  }

}
class WalletNotInstalledError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotInstalledError';
  }

}
class WalletNotReadyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotReadyError';
  }

}
class WalletConnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletConnectionError';
  }

}
class WalletDisconnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectedError';
  }

}
class WalletDisconnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectionError';
  }

}
class WalletAccountError extends (/* unused pure expression or super */ null && (WalletError)) {
  constructor() {
    super(...arguments);
    this.name = 'WalletAccountError';
  }

}
class WalletPublicKeyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletPublicKeyError';
  }

}
class WalletKeypairError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletKeypairError';
  }

}
class WalletNotConnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotConnectedError';
  }

}
class WalletSendTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSendTransactionError';
  }

}
class WalletSignMessageError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignMessageError';
  }

}
class WalletSignTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignTransactionError';
  }

}
class WalletTimeoutError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletTimeoutError';
  }

}
class WalletWindowBlockedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowBlockedError';
  }

}
class WalletWindowClosedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowClosedError';
  }

}
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

function poll(callback, interval, count) {
  if (count > 0) {
    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
      const done = yield callback();
      if (!done) poll(callback, interval, count - 1);
    }), interval);
  }
}
function pollUntilReady(adapter, pollInterval, pollCount) {
  poll(() => {
    const {
      ready
    } = adapter;

    if (ready) {
      if (!adapter.emit('ready')) {
        console.warn(`${adapter.constructor.name} is ready but no listener was registered`);
      }
    }

    return ready;
  }, pollInterval, pollCount);
}
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer_awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



class BaseSignerWalletAdapter extends BaseWalletAdapter {
  sendTransaction(transaction, connection, options = {}) {
    return signer_awaiter(this, void 0, void 0, function* () {
      try {
        try {
          transaction.feePayer || (transaction.feePayer = this.publicKey || undefined);
          transaction.recentBlockhash || (transaction.recentBlockhash = (yield connection.getRecentBlockhash('finalized')).blockhash);

          const {
            signers
          } = options,
                sendOptions = __rest(options, ["signers"]);

          (signers === null || signers === void 0 ? void 0 : signers.length) && transaction.partialSign(...signers);
          transaction = yield this.signTransaction(transaction);
          const rawTransaction = transaction.serialize();
          return yield connection.sendRawTransaction(rawTransaction, sendOptions);
        } catch (error) {
          if (error instanceof WalletError) throw error;
          throw new WalletSendTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}
class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {}
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-base/lib/index.js





/***/ }),

/***/ 627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* reexport */ ConnectionProvider),
  "nS": () => (/* reexport */ WalletProvider),
  "Os": () => (/* reexport */ useWallet_useWallet)
});

// UNUSED EXPORTS: ConnectionContext, WalletContext, WalletNotSelectedError, useAnchorWallet, useConnection, useLocalStorage

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js

const WalletContext = /*#__PURE__*/(0,external_react_.createContext)({});
function useWallet_useWallet() {
  return (0,external_react_.useContext)(WalletContext);
}
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js


function useAnchorWallet() {
  const {
    publicKey,
    signTransaction,
    signAllTransactions
  } = useWallet();
  return useMemo(() => publicKey && signTransaction && signAllTransactions ? {
    publicKey,
    signTransaction,
    signAllTransactions
  } : undefined, [publicKey, signTransaction, signAllTransactions]);
}
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(681);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useConnection.js

const ConnectionContext = /*#__PURE__*/(0,external_react_.createContext)({});
function useConnection() {
  return useContext(ConnectionContext);
}
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/ConnectionProvider.js



const ConnectionProvider = ({
  children,
  endpoint,
  config = {
    commitment: 'confirmed'
  }
}) => {
  const connection = (0,external_react_.useMemo)(() => new web3_js_.Connection(endpoint, config), [endpoint, config]);
  return /*#__PURE__*/external_react_default().createElement(ConnectionContext.Provider, {
    value: {
      connection
    }
  }, children);
};
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/index.js + 4 modules
var lib = __webpack_require__(637);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/errors.js

class WalletNotSelectedError extends lib/* WalletError */.lj {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotSelectedError';
  }

}
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js

function useLocalStorage(key, defaultState) {
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)(() => {
    if (typeof localStorage === 'undefined') return defaultState;
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return defaultState;
  });
  const setLocalStorage = (0,external_react_.useCallback)(newValue => {
    if (newValue === value) return;
    setValue(newValue);

    if (newValue === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  }, [value, setValue, key]);
  return [value, setLocalStorage];
}
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/WalletProvider.js
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};






const initialState = {
  wallet: null,
  adapter: null,
  ready: false,
  publicKey: null,
  connected: false
};
const WalletProvider = ({
  children,
  wallets,
  autoConnect = false,
  onError = error => console.error(error),
  localStorageKey = 'walletName'
}) => {
  const [name, setName] = useLocalStorage(localStorageKey, null);
  const {
    0: {
      wallet,
      adapter,
      ready,
      publicKey,
      connected
    },
    1: setState
  } = (0,external_react_.useState)(initialState);
  const {
    0: connecting,
    1: setConnecting
  } = (0,external_react_.useState)(false);
  const {
    0: disconnecting,
    1: setDisconnecting
  } = (0,external_react_.useState)(false);
  const working = (0,external_react_.useRef)(false); // Map of wallet names to wallets

  const walletsByName = (0,external_react_.useMemo)(() => wallets.reduce((walletsByName, wallet) => {
    walletsByName[wallet.name] = wallet;
    return walletsByName;
  }, {}), [wallets]); // When the selected wallet changes, initialize the state

  (0,external_react_.useEffect)(() => {
    const wallet = name && walletsByName[name] || null;
    const adapter = wallet && wallet.adapter();

    if (adapter) {
      const {
        ready,
        publicKey,
        connected
      } = adapter;
      setState({
        wallet,
        adapter,
        connected,
        publicKey,
        ready
      });
    } else {
      setState(initialState);
    }
  }, [name, walletsByName, setState]); // If autoConnect is enabled, try to connect when the adapter changes and is ready

  (0,external_react_.useEffect)(() => {
    if (working.current || connecting || connected || !autoConnect || !adapter || !ready) return;

    (function () {
      return __awaiter(this, void 0, void 0, function* () {
        working.current = true;
        setConnecting(true);

        try {
          yield adapter.connect();
        } catch (error) {
          // Clear the selected wallet
          setName(null); // Don't throw error, but onError will still be called
        } finally {
          setConnecting(false);
          working.current = false;
        }
      });
    })();
  }, [working, connecting, connected, autoConnect, adapter, ready, setConnecting, setName]); // Select a wallet by name

  const select = (0,external_react_.useCallback)(newName => __awaiter(void 0, void 0, void 0, function* () {
    if (name === newName) return;
    if (adapter) yield adapter.disconnect();
    setName(newName);
  }), [name, adapter, setName]); // Handle the adapter's ready event

  const onReady = (0,external_react_.useCallback)(() => setState(state => Object.assign(Object.assign({}, state), {
    ready: true
  })), [setState]); // Handle the adapter's connect event

  const onConnect = (0,external_react_.useCallback)(() => {
    if (!adapter) return;
    const {
      connected,
      publicKey,
      ready
    } = adapter;
    setState(state => Object.assign(Object.assign({}, state), {
      connected,
      publicKey,
      ready
    }));
  }, [adapter, setState]); // Handle the adapter's disconnect event

  const onDisconnect = (0,external_react_.useCallback)(() => setName(null), [setName]); // Connect the adapter to the wallet

  const connect = (0,external_react_.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (working.current || connecting || disconnecting || connected) return;

    if (!wallet || !adapter) {
      const error = new WalletNotSelectedError();
      onError(error);
      throw error;
    }

    if (!ready) {
      setName(null);

      if (false) {}

      const error = new lib/* WalletNotReadyError */.OZ();
      onError(error);
      throw error;
    }

    working.current = true;
    setConnecting(true);

    try {
      yield adapter.connect();
    } catch (error) {
      setName(null);
      throw error;
    } finally {
      setConnecting(false);
      working.current = false;
    }
  }), [working, connecting, disconnecting, connected, wallet, adapter, onError, ready, setConnecting, setName]); // Disconnect the adapter from the wallet

  const disconnect = (0,external_react_.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (working.current || disconnecting) return;
    if (!adapter) return setName(null);
    working.current = true;
    setDisconnecting(true);

    try {
      yield adapter.disconnect();
    } finally {
      setName(null);
      setDisconnecting(false);
      working.current = false;
    }
  }), [working, disconnecting, adapter, setDisconnecting, setName]); // Send a transaction using the provided connection

  const sendTransaction = (0,external_react_.useCallback)((transaction, connection, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!adapter) {
      const error = new WalletNotSelectedError();
      onError(error);
      throw error;
    }

    if (!connected) {
      const error = new lib/* WalletNotConnectedError */.oS();
      onError(error);
      throw error;
    }

    return yield adapter.sendTransaction(transaction, connection, options);
  }), [adapter, onError, connected]); // Sign a transaction if the wallet supports it

  const signTransaction = (0,external_react_.useMemo)(() => adapter && 'signTransaction' in adapter ? transaction => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new lib/* WalletNotConnectedError */.oS();
      onError(error);
      throw error;
    }

    return yield adapter.signTransaction(transaction);
  }) : undefined, [adapter, onError, connected]); // Sign multiple transactions if the wallet supports it

  const signAllTransactions = (0,external_react_.useMemo)(() => adapter && 'signAllTransactions' in adapter ? transactions => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new lib/* WalletNotConnectedError */.oS();
      onError(error);
      throw error;
    }

    return yield adapter.signAllTransactions(transactions);
  }) : undefined, [adapter, onError, connected]); // Sign an arbitrary message if the wallet supports it

  const signMessage = (0,external_react_.useMemo)(() => adapter && 'signMessage' in adapter ? message => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new lib/* WalletNotConnectedError */.oS();
      onError(error);
      throw error;
    }

    return yield adapter.signMessage(message);
  }) : undefined, [adapter, onError, connected]); // Setup and teardown event listeners when the adapter changes

  (0,external_react_.useEffect)(() => {
    if (adapter) {
      adapter.on('ready', onReady);
      adapter.on('connect', onConnect);
      adapter.on('disconnect', onDisconnect);
      adapter.on('error', onError);
      return () => {
        adapter.off('ready', onReady);
        adapter.off('connect', onConnect);
        adapter.off('disconnect', onDisconnect);
        adapter.off('error', onError);
      };
    }
  }, [adapter, onReady, onConnect, onDisconnect, onError]);
  return /*#__PURE__*/external_react_default().createElement(WalletContext.Provider, {
    value: {
      wallets,
      autoConnect,
      wallet,
      adapter,
      publicKey,
      ready,
      connected,
      connecting,
      disconnecting,
      select,
      connect,
      disconnect,
      sendTransaction,
      signTransaction,
      signAllTransactions,
      signMessage
    }
  }, children);
};
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/index.js








/***/ })

};
;