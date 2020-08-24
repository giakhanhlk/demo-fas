import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import Button from "../../components/Button";

interface SubSlideProps {
	subtitle: string;
	description: string;
	onPress: () => void;
	last?: boolean;
	x: Animated.Node<number>;
}

const SubSlide = ({
	subtitle,
	description,
	onPress,
	last,
	x,
}: SubSlideProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.subtitle}>{subtitle}</Text>
			<Text style={styles.description}>{description}</Text>
			<Button label={last ? "Let's get started" : "Next"} {...{ onPress }} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 44,
	},
	subtitle: {
		fontFamily: "SFProText-Semibold",
		fontSize: 24,
		lineHeight: 30,
		marginBottom: 12,
		color: "#0C0D34",
	},
	description: {
		fontFamily: "SFProText-Regular",
		fontSize: 16,
		lineHeight: 24,
		color: "#0c0D34",
		textAlign: "center",
	},
});

export default SubSlide;
