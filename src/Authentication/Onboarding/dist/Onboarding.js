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
var react_native_redash_1 = require("react-native-redash");
var Slide_1 = require("./Slide");
var react_native_reanimated_1 = require("react-native-reanimated");
var SubSlide_1 = require("./SubSlide");
var BORDER_RADIUS = 75;
var width = react_native_1.Dimensions.get("window").width;
var slides = [
    {
        title: "Relaxed",
        color: "#BFEAF5",
        subtitle: "Screen 1",
        description: "Đây là demo của React Native"
    },
    {
        title: "Playful",
        color: "#BEECC4",
        subtitle: "Screen 2",
        description: "React Native là một framework xây dựng giao diện mobile"
    },
    {
        title: "Ex",
        color: "#FFE4D9",
        subtitle: "Screen 3",
        description: "Tôi sẽ cố gắng để có thể Master React Native"
    },
    {
        title: "Funky",
        color: "#FFDDDD",
        subtitle: "Screen 4",
        description: "Hết tháng này tôi sẽ chuyển qua học Python"
    },
];
var Onboarding = function () {
    var scroll = react_1.useRef(null);
    var x = react_native_redash_1.useValue(0);
    // Todo: UseScrollEvent?
    var onScroll = react_native_redash_1.onScrollEvent({ x: x });
    var backgroundColor = react_native_redash_1.interpolateColor(x, {
        inputRange: slides.map(function (_, i) { return i * width; }),
        outputRange: slides.map(function (slide) { return slide.color; })
    });
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_reanimated_1["default"].View, { style: [styles.slider, { backgroundColor: backgroundColor }] },
            react_1["default"].createElement(react_native_reanimated_1["default"].ScrollView, __assign({ ref: scroll, horizontal: true, snapToInterval: width, decelerationRate: "fast", showsHorizontalScrollIndicator: false, bounces: false, scrollEventThrottle: 1 }, { onScroll: onScroll }), slides.map(function (_a, index) {
                var title = _a.title;
                return (react_1["default"].createElement(Slide_1["default"], __assign({ key: index, right: !!(index % 2) }, { title: title })));
            }))),
        react_1["default"].createElement(react_native_1.View, { style: styles.footer },
            react_1["default"].createElement(react_native_reanimated_1["default"].View, { style: __assign(__assign({}, react_native_1.StyleSheet.absoluteFillObject), { backgroundColor: backgroundColor }) }),
            react_1["default"].createElement(react_native_reanimated_1["default"].View, { style: [
                    styles.footerContent,
                    {
                        width: width * slides.length,
                        transform: [{ translateX: react_native_reanimated_1.multiply(x, -1) }]
                    },
                ] }, slides.map(function (_a, index) {
                var subtitle = _a.subtitle, description = _a.description;
                console.log(index);
                return (react_1["default"].createElement(SubSlide_1["default"], __assign({ key: index, onPress: function () {
                        if (scroll.current) {
                            scroll.current
                                .getNode()
                                .scrollTo({ x: width * (index + 1), animated: true });
                        }
                    }, last: index === slides.length - 1 }, { subtitle: subtitle, description: description, x: x })));
            })))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: Slide_1.SLIDE_HEIGHT,
        backgroundColor: "cyan",
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS
    }
});
exports["default"] = Onboarding;
