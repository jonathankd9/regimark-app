import {
	View,
	Text,
	SafeAreaView,
	Button,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Image,
} from "react-native";
import React from "react";
import {styles} from "./globalstyles";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Confirmation = ({navigation, route}) => {
	// Retrieve the scannedData parameter from the route
	const {scannedData} = route.params;

	// Split the scannedData into its constituent parts using the underscore (_) delimiter
	const parts = scannedData.split("_");

	// Extract the course and lecturer information from the parts
	const lecturer = parts[1];
	const course = parts[2];

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<Image
					style={styles.img}
					source={require("../../assets/confirm.png")}
				/>
				<Text style={[styles.heading, {textAlign: "center", marginTop: 30}]}>
					MARKED PRESENT!
				</Text>
				<View>
					{/* <Text style={[styles.bold, {textAlign: "center"}]}>
						Scanned Data: <Text style={styles.text}>{scannedData}</Text>
					</Text> */}

					{/* You can display more information from the scanned data as needed */}
					{/* For example, parse the scannedData if it's in a specific format */}
					{/* <Text style={[styles.bold, {textAlign: "center"}]}>
						Course:
						<Text style={styles.text}>DCIT 312 - Info. Security Mgt</Text>
					</Text>
					<Text style={[styles.bold, {textAlign: "center"}]}>
						Current Attendance: <Text style={styles.text}>3/5</Text>
					</Text> */}
					<Text style={[styles.bold, {textAlign: "center"}]}>
						Lecturer: <Text style={styles.text}>{lecturer}</Text>
					</Text>
					<Text style={[styles.bold, {textAlign: "center"}]}>
						Course: <Text style={styles.text}>{course}</Text>
					</Text>
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Report")}>
					<Text style={styles.buttontext}> View Attendance </Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Home")}>
					<Text style={styles.buttontext}> Return to Homepage </Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Confirmation;
