import React from "react";
import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
	splash: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		backgroundColor: "#1E1E1E",
	},
	container: {
		paddingHorizontal: 14,
		justifyContent: "center",
		flex: 1,
	},
	qrcontainer: {
		flex: 0.7,
		borderColor: "black",
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
	},
	img: {
		height: 110,
		alignItems: "center",
	},
	image: {
		flex: 1,
		resizeMode: "contain",
	},
	img: {
		alignSelf: "center",
		// marginBottom: 30,
		// marginTop: 30,
	},
	
	text: {
		fontSize: 18,
		color: "#444444",
		lineHeight: 25,
		fontFamily: "dmsans-regular",
	},
	bold: {
		fontSize: 18,
		color: "#444444",
		lineHeight: 25,
		textAlign: "left",
		marginBottom: 20,
		fontFamily: "satoshi-bold",
	},
	input: {
		marginTop: 15,
		marginBottom: 15,
		height: 40,
		borderBottomWidth: 1,
		fontSize: 16,
		fontFamily: "dmsans-regular",
	},

	buttontext: {
		fontSize: 16,
		color: "white",
		textAlign: "center",
		fontFamily: "dmsans-bold",
	},
	error: {
		color: "red",
	},
	loader: {
		marginTop: 20,
	},
});

export {styles};
