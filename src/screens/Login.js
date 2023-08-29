import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	ActivityIndicator,
	Image,
} from "react-native";
import React, {useState, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {styles} from "./globalstyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Welcome from "../../assets/welcome.png";
import axios from "axios";

const Login = () => {
	const [studentId, setStudentId] = useState("");
	const [pin, setPin] = useState("");

	// Error and login message
	const [errorMessage, setErrorMessage] = useState("");

	// Loading
	const [isLoading, setIsLoading] = useState(false);

	const navigation = useNavigation();

	// Timer

	const handleLogin = async () => {
		// Check if either the student ID or PIN is missing
		if (!studentId || !pin) {
			alert("Please enter both Student ID and PIN.");
			return; // Prevent further execution
		}

		setIsLoading(true);

		const API_URL = "https://jkd6735.pythonanywhere.com";

		try {
			const response = await axios.post(`${API_URL}/api/auth/student/login/`, {
				student_id: studentId,
				pin: pin,
			});

			const {token} = response.data;
			// Handle successful login response
			console.log(response.data);
			alert("Login successful");

			// Store user data in local storage
			await AsyncStorage.setItem(
				"userData",
				JSON.stringify(response.data.data)
			);

			// Set the token in the default headers of axios
			axios.defaults.headers.common["Authorization"] = `Token ${token}`;

			setErrorMessage("");
			// Navigate to the home screen (replace 'homeScreen' with the actual navigation logic)
			navigation.navigate("Home");
		} catch (error) {
			// Handle error
			console.error(error);

			// Display error message
			if (error.response) {
				// error.response && error.response.data && error.response.data.message
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				const errorMessage = error.response.data.message;
				alert("Incorrect Student Id or pin");
			} else if (error.request) {
				// The request was made but no response was received
				alert("No response received from the server");
			} else {
				// Something happened in setting up the request that triggered an Error
				alert("An error occurred during account login");
			}
		}

		setIsLoading(false);
	};

	const handleIdchange = (newStudentID) => {
		if (newStudentID.length <= 8) {
			setStudentId(newStudentID);
		}
	};

	const handlePinchange = (newPin) => {
		if (newPin.length <= 5) {
			setPin(newPin);
		}
	};

	return (
		<SafeAreaView className="flex-1">
			<View className="flex-1 px-5 justify-center">
				<View className="flex items-center">
					<Image source={Welcome} className="w-[80%] h-80" />
				</View>
				<Text
					style={{fontFamily: "satoshi-bold"}}
					className="text-2xl mb-4 text-primary">
					Hi there, welcome!
				</Text>
				<Text
					style={{fontFamily: "dmsans-regular"}}
					className="text-lg text-primary">
					Few steps away to record your attendance. Sign in to QRMark!{" "}
				</Text>
				{/* Render the loading indicator */}
				{/* {isLoading && (
					<ActivityIndicator
						size="large"
						color="#000000"
						style={styles.loader}
					/>
				)} */}

				{/* Render the login form */}

				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					placeholder="Student id"
					placeholderTextColor="#9C9C9C"
					autoCapitalize="none"
					value={studentId}
					onChangeText={handleIdchange}
				/>

				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					placeholder="Password"
					placeholderTextColor="#9C9C9C"
					autoCapitalize="none"
					value={pin}
					onChangeText={handlePinchange}
					secureTextEntry
				/>
				<Text style={styles.error}>{errorMessage}</Text>

				<TouchableOpacity
					className="bg-black px-12 py-4 rounded-lg flex-row justify-center"
					onPress={handleLogin}>
					<Text
						style={{
							fontFamily: "dmsans-bold",
						}}
						className="text-white text-base">
						{isLoading ? "Signing in.." : "Sign In"}
					</Text>
					{isLoading && (
						<ActivityIndicator
							size="small"
							color="white"
							style={{marginLeft: 10}}
						/>
					)}
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Login;
