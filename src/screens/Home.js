import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native";
import React, {useState, useEffect} from "react";
import {styles} from "./globalstyles";
import {useNavigation} from "@react-navigation/native";
import {ROUTES} from "./../constants/ROUTES";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BigProfile from "../../assets/files/bigprofile.png";

const Home = () => {
	const navigation = useNavigation();

	const [firstName, setFirstName] = useState("");

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				// Retrieve user data from local storage
				const userData = await AsyncStorage.getItem("userData");
				if (userData) {
					const parsedData = JSON.parse(userData);
					setFirstName(parsedData.user_info.first_name);
				}
			} catch (error) {
				// Handle error
				console.log(error);
			}
		};

		fetchUserData();
	}, []);

	const handleStartScan = async () => {
		navigation.navigate(ROUTES.StartScan);
		navigation.navigate("StartScan");
	};

	const handleLogout = async () => {
		try {
			// Remove the token from AsyncStorage
			await AsyncStorage.removeItem("token");

			// Navigate back to the login screen
			navigation.navigate("Login");
		} catch (error) {
			// Handle error
			console.log(error);
		}
	};

	return (
		<SafeAreaView className="flex-1">
			<View className="flex-1 px-5 justify-center">
				<View className="flex-1 items-center justify-center">
					<TouchableOpacity
						className="w-[70%] h-[30%] flex justify-center items-center"
						onPress={() => navigation.navigate(ROUTES.Profile)}>
						<Image source={BigProfile} className="" />
					</TouchableOpacity>
					{/* </View> */}
					<Text
						style={{fontFamily: "satoshi-bold"}}
						className="text-center text-3xl mb-5">
						Welcome, {firstName}
					</Text>
					<Text className="text-center text-lg mb-5">
						Click on the button below to mark your attendance!
					</Text>
					<TouchableOpacity
						className="bg-black py-4 rounded-lg w-[90%] mb-5 flex-row justify-center"
						onPress={handleStartScan}>
						<Text style={styles.buttontext}> Take Attendance </Text>
					</TouchableOpacity>
					<TouchableOpacity
						className="bg-fade py-4 rounded-lg w-[90%] flex-row justify-center"
						onPress={handleLogout}>
						<Text
							style={{
								fontFamily: "dmsans-bold",
							}}
							className="text-white text-base">
							Logout
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
