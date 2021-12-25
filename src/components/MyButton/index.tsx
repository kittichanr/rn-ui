import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
};

const styles = StyleSheet.create({
	button: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 4,
		alignSelf: 'flex-start',
		flexGrow: 0,
		backgroundColor: 'purple',
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export const MyButton = ({ text, onPress, color, textColor }: ButtonProps) => (
	<View>
		<TouchableOpacity
			style={[styles.button, !!color && { backgroundColor: color }]}
			onPress={onPress}
			activeOpacity={0.8}
		>
			<Text style={[styles.buttonText, !!textColor && { color: textColor }]}>
				{text}
			</Text>
		</TouchableOpacity>
	</View>
)
