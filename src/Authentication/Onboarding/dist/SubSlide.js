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
var react_1 = require("react");
var react_native_1 = require("react-native");
var Button_1 = require("../../components/Button");
var SubSlide = function (_a) {
    var subtitle = _a.subtitle, description = _a.description, onPress = _a.onPress, last = _a.last, x = _a.x;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.Text, { style: styles.subtitle }, subtitle),
        react_1["default"].createElement(react_native_1.Text, { style: styles.description }, description),
        react_1["default"].createElement(Button_1["default"], __assign({ label: last ? "Let's get started" : "Next" }, { onPress: onPress }))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44
    },
    subtitle: {
        fontFamily: "SFProText-Semibold",
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 12,
        color: "#0C0D34"
    },
    description: {
        fontFamily: "SFProText-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0c0D34",
        textAlign: "center"
    }
});
exports["default"] = SubSlide;
