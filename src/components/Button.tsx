import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
	variant: "default" | "primary";
	label: string;
	onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
	const backgroundColor =
		variant === "primary" ? "2CB9B0" : "rgba(12, 13, 52, 0.05)";
	const color = variant === "primary" ? "white" : "#0C0D34";

	return (
		<RectButton
			style={[styles.container, { backgroundColor }]}
			{...{ onPress }}
		>
			<View>
				<Text style={[styles.label, { color }]}>{label}</Text>
			</View>
		</RectButton>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 25,
		height: 50,
		width: 245,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
	},
	label: {
		fontFamily: "SFProText-Regular",
	},
});

Button.defaultProps = { variant: "default" };

export default Button;
