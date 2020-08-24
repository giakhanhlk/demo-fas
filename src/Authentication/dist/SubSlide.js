"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var SubSlide = function (_a) {
    var subtitle = _a.subtitle, description = _a.description, last = _a.last, x = _a.x;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.Text, { style: styles.subtitle }, subtitle),
        react_1["default"].createElement(react_native_1.Text, { style: styles.description }, description),
        react_1["default"].createElement(react_native_1.Button, { label: last ? "Let's get started" : "Next", primary: last })));
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
