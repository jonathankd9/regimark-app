import {
	View,
	Text,
	SafeAreaView,
	Button,
	TouchableOpacity,
	Image,
} from "react-native";
import React, {useEffect, useState} from "react";
import {styles} from "./globalstyles";
import {AntDesign} from "@expo/vector-icons";
import {ROUTES} from "./../constants/ROUTES";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BigProfile from "../../assets/files/bigprofile.png";

// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Profile = ({navigation}) => {
	// const handleProfileDetails = async () => {
	// 	navigation.navigate("ProfileDetails");
	// };
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [otherName, setOtherName] = useState("");
	const [studentId, setStudentId] = useState("");
	const [gender, setGender] = useState("");
	const [email, setEmail] = useState("");
	const [program, setProgram] = useState("");
	const [level, setLevel] = useState("");
	const [semester, setSemester] = useState("");

	const [registeredCourses, setRegisteredCourses] = useState([]);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				// Retrieve user data from local storage
				const userData = await AsyncStorage.getItem("userData");
				if (userData) {
					const parsedData = JSON.parse(userData);
					setFirstName(parsedData.user_info.first_name);
					setLastName(parsedData.user_info.last_name);
					setOtherName(parsedData.user_info.other_names);
					setStudentId(parsedData.user_info.user_id);
					setGender(parsedData.user_info.gender);
					setEmail(parsedData.user_info.email);
					setProgram(parsedData.student_info.program);
					setLevel(parsedData.student_info.level);
					setSemester(parsedData.student_info.semester);
				}
				console.log(program);
				console.log(semester);
			} catch (error) {
				// Handle error
				console.log(error);
			}
		};

		fetchUserData();
	}, []);

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
			<View className="flex px-5 justify-start">
				{/* Header */}
				<Text
					style={{fontFamily: "satoshi-bold"}}
					className="text-center text-xl py-2 mb-10">
					Profile
				</Text>

				<View className="justify-center items-center">
					<Image className="mb-5" source={BigProfile} />
				</View>

				<View className="mb-5">
					<Text className="text-xl mb-3" style={{fontFamily: "dmsans-bold"}}>
						Name:
						<Text className="" style={{fontFamily: "dmsans-regular"}}>
							{" "}
							{firstName} {otherName} {lastName}
						</Text>
					</Text>
					<Text className="text-xl mb-3" style={{fontFamily: "dmsans-bold"}}>
						Gender:{" "}
						<Text className="" style={{fontFamily: "dmsans-regular"}}>
							{gender}
						</Text>
					</Text>
					<Text className="text-xl mb-3" style={{fontFamily: "dmsans-bold"}}>
						Student ID:{" "}
						<Text className="" style={{fontFamily: "dmsans-regular"}}>
							{studentId}
						</Text>
					</Text>
					<Text className="text-xl mb-3" style={{fontFamily: "dmsans-bold"}}>
						Student Mail:{" "}
						<Text className="" style={{fontFamily: "dmsans-regular"}}>
							{email}
						</Text>
					</Text>
					<Text className="text-xl mb-3" style={{fontFamily: "dmsans-bold"}}>
						Programme:{" "}
						<Text className="" style={{fontFamily: "dmsans-regular"}}>
							{program}
						</Text>
					</Text>
					<Text className="text-xl mb-3" style={{fontFamily: "dmsans-bold"}}>
						Level:{" "}
						<Text className="" style={{fontFamily: "dmsans-regular"}}>
							L{level}{" "}
						</Text>
					</Text>
					<Text className="text-xl mb-3" style={{fontFamily: "dmsans-bold"}}>
						Semester:{" "}
						<Text className="" style={{fontFamily: "dmsans-regular"}}>
							(2nd Semester){" "}
						</Text>
					</Text>
				</View>

				{/* <Text className="text-xl" style={{fontFamily: "dmsans-bold"}}>
					Courses Registered
				</Text>
				{registeredCourses?.map((course, index) => (
					<Text key={index}>{course.course}</Text>
				))} */}
			</View>
		</SafeAreaView>
	);
};

export default Profile;
