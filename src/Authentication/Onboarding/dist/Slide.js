"use strict";
exports.__esModule = true;
exports.SLIDE_HEIGHT = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var _a = react_native_1.Dimensions.get("window"), width = _a.width, height = _a.height;
exports.SLIDE_HEIGHT = 0.61 * height;
var Slide = function (_a) {
    var title = _a.title, right = _a.right;
    var transform = [
        { translateY: (exports.SLIDE_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 - 60 : -width / 2 + 60 },
        { rotate: right ? "-90deg" : "90deg" },
    ];
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: [styles.titleContainer, { transform: transform }] },
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, title))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        width: width
    },
    titleContainer: {
        height: 100,
        justifyContent: "center"
    },
    title: {
        fontSize: 80,
        fontFamily: "SFProText-Bold",
        color: "white",
        textAlign: "center"
    }
});
exports["default"] = Slide;
