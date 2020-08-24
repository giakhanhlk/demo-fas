import React, { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { onScrollEvent, interpolateColor, useValue } from "react-native-redash";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Animated, { multiply } from "react-native-reanimated";
import SubSlide from "./SubSlide";

const BORDER_RADIUS = 75;
const { width } = Dimensions.get("window");

interface Onboarding {}

const slides = [
	{
		title: "Relaxed",
		color: "#BFEAF5",
		subtitle: "Screen 1",
		description: "Đây là demo của React Native",
	},
	{
		title: "Playful",
		color: "#BEECC4",
		subtitle: "Screen 2",
		description: "React Native là một framework xây dựng giao diện mobile",
	},
	{
		title: "Ex",
		color: "#FFE4D9",
		subtitle: "Screen 3",
		description: "Tôi sẽ cố gắng để có thể Master React Native",
	},
	{
		title: "Funky",
		color: "#FFDDDD",
		subtitle: "Screen 4",
		description: "Hết tháng này tôi sẽ chuyển qua học Python",
	},
];

const Onboarding = () => {
	const scroll = useRef<Animated.ScrollView>(null);
	const x = useValue(0);

	// Todo: UseScrollEvent?
	const onScroll = onScrollEvent({ x });
	const backgroundColor = interpolateColor(x, {
		inputRange: slides.map((_, i) => i * width),
		outputRange: slides.map((slide) => slide.color),
	});

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.slider, { backgroundColor }]}>
				<Animated.ScrollView
					ref={scroll}
					horizontal
					snapToInterval={width}
					decelerationRate="fast"
					showsHorizontalScrollIndicator={false}
					bounces={false}
					scrollEventThrottle={1}
					{...{ onScroll }}
				>
					{slides.map(({ title }, index) => (
						<Slide key={index} right={!!(index % 2)} {...{ title }} />
					))}
				</Animated.ScrollView>
			</Animated.View>
			<View style={styles.footer}>
				<Animated.View
					style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
				/>
				<Animated.View
					style={[
						styles.footerContent,
						{
							width: width * slides.length,
							transform: [{ translateX: multiply(x, -1) }],
						},
					]}
				>
					{slides.map(({ subtitle, description }, index) => {
						console.log(index);
						return (
							<SubSlide
								key={index}
								onPress={() => {
									if (scroll.current) {
										scroll.current
											.getNode()
											.scrollTo({ x: width * (index + 1), animated: true });
									}
								}}
								last={index === slides.length - 1}
								{...{ subtitle, description, x }}
							/>
						);
					})}
				</Animated.View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	slider: {
		height: SLIDE_HEIGHT,
		backgroundColor: "cyan",
		borderBottomRightRadius: BORDER_RADIUS,
	},
	footer: {
		flex: 1,
	},
	footerContent: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "white",
		borderTopLeftRadius: BORDER_RADIUS,
	},
});

export default Onboarding;
