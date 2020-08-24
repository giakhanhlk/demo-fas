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
exports.__esModule = true;
var stack_1 = require("@react-navigation/stack");
var React = require("react");
require("react-native-gesture-handler");
var Onboarding_1 = require("./src/Authentication/Onboarding");
var components_1 = require("./src/components");
var fonts = {
    "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
    "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
    "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf")
};
var AuthenticationStack = stack_1.createStackNavigator();
var AuthenticationNavigator = function () {
    return (React.createElement(AuthenticationStack.Navigator, { headerMode: "none" },
        React.createElement(AuthenticationStack.Screen, { name: "Onboarding", component: Onboarding_1.Onboarding })));
};
function App() {
    return (React.createElement(components_1.LoadAssets, __assign({}, { fonts: fonts }),
        React.createElement(AuthenticationNavigator, null)));
}
exports["default"] = App;
