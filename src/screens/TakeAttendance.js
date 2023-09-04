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
import {useNavigation} from "@react-navigation/native";
import {ROUTES} from "./../constants/ROUTES";

const Scan = ({navigation, route}) => {
	const {scannedData} = route.params;

	// Split the scannedData into its constituent parts using the underscore (_) delimiter
	const parts = scannedData.split("_");

	// Extract the course and lecturer information from the parts
	const lecturer = parts[1];
	const course = parts[2];

	return (
		<SafeAreaView className="flex-1">
			<View className="flex-1 px-5 justify-center items-center">
				<View className="h-[40%] w-[90%] border mb-5 items-center justify-center">
					<Image
						style={styles.img}
						source={require("../../assets/scanqr.png")}
					/>
				</View>

				<View>
					<Text
						className="text-xl mb-5  text-center text-primary"
						style={{fontFamily: "dmsans-bold"}}>
						Scanned Data:
						<Text style={{fontFamily: "dmsans-regular"}}>{scannedData}</Text>
					</Text>

					{/* <Text
						className="text-xl mb-5 text-primary"
						style={{fontFamily: "dmsans-bold"}}>
						Semester:
						<Text style={{fontFamily: "dmsans-regular"}}>
							II (2nd Semester) - L300
						</Text>
					</Text> */}
					{/* <Text
						className="text-xl mb-5 text-primary"
						style={{fontFamily: "dmsans-bold"}}>
						Lecturer:
						<Text style={{fontFamily: "dmsans-regular"}}> {lecturer}</Text>
					</Text> */}
					<Text
						className="text-xl mb-5 text-primary"
						style={{fontFamily: "dmsans-bold"}}>
						Course Scanned:{" "}
						<Text style={{fontFamily: "dmsans-regular"}}>{course}</Text>
					</Text>
				</View>

				<TouchableOpacity
					className="bg-black py-4 rounded-lg w-[90%] flex-row justify-center"
					onPress={() =>
						navigation.navigate(ROUTES.Record, {scannedData: scannedData})
					}>
					<Text
						style={{
							fontFamily: "dmsans-bold",
						}}
						className="text-white text-base">
						Proceed
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Scan;
