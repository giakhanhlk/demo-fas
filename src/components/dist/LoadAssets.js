"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var expo_1 = require("expo");
var expo_asset_1 = require("expo-asset");
var Font = require("expo-font");
var native_1 = require("@react-navigation/native");
var expo_constants_1 = require("expo-constants");
var NAVIGATION_STATE_KEY = "NAVIGATION_STATE_KEY-" + expo_constants_1["default"].manifest.sdkVersion;
var usePromiseAll = function (promises, cb) {
    return react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        cb();
                        return [2 /*return*/];
                }
            });
        }); })();
    });
};
var useLoadAssets = function (assets, fonts) {
    var _a = react_1.useState(false), ready = _a[0], setReady = _a[1];
    usePromiseAll(__spreadArrays([Font.loadAsync(fonts)], assets.map(function (asset) { return expo_asset_1.Asset.loadAsync(asset); })), function () { return setReady(true); });
    return ready;
};
var LoadAssets = function (_a) {
    var assets = _a.assets, fonts = _a.fonts, children = _a.children;
    var _b = react_1.useState(!__DEV__), isNavigationReady = _b[0], setIsNavigationReady = _b[1];
    var _c = react_1.useState(), initialState = _c[0], setInitialState = _c[1];
    var ready = useLoadAssets(assets || [], fonts || {});
    react_1.useEffect(function () {
        var restoreState = function () { return __awaiter(void 0, void 0, void 0, function () {
            var savedStateString, state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 2, 3]);
                        return [4 /*yield*/, react_native_1.AsyncStorage.getItem(NAVIGATION_STATE_KEY)];
                    case 1:
                        savedStateString = _a.sent();
                        state = savedStateString
                            ? JSON.parse(savedStateString)
                            : undefined;
                        setInitialState(state);
                        return [3 /*break*/, 3];
                    case 2:
                        setIsNavigationReady(true);
                        return [7 /*endfinally*/];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        if (!isNavigationReady) {
            restoreState();
        }
    }, [isNavigationReady]);
    var onStateChange = react_1.useCallback(function (state) {
        return react_native_1.AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state));
    }, []);
    if (!ready || !isNavigationReady) {
        return react_1["default"].createElement(expo_1.AppLoading, null);
    }
    return (react_1["default"].createElement(native_1.NavigationContainer, __assign({}, { onStateChange: onStateChange, initialState: initialState }), children));
};
exports["default"] = LoadAssets;
