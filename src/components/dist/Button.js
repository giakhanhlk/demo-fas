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
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var Button = function (_a) {
    var variant = _a.variant, label = _a.label, onPress = _a.onPress;
    var backgroundColor = variant === "primary" ? "2CB9B0" : "rgba(12, 13, 52, 0.05)";
    var color = variant === "primary" ? "white" : "#0C0D34";
    return (react_1["default"].createElement(react_native_gesture_handler_1.RectButton, __assign({ style: [styles.container, { backgroundColor: backgroundColor }] }, { onPress: onPress }),
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.Text, { style: [styles.label, { color: color }] }, label))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    label: {
        fontFamily: "SFProText-Regular"
    }
});
Button.defaultProps = { variant: "default" };
exports["default"] = Button;
