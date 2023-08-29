import {View, Text, SafeAreaView, TouchableOpacity, Image} from "react-native";
import React, {useState, useEffect} from "react";
import {styles} from "./globalstyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileDetails = ({navigation}) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [otherName, setOtherName] = useState("");
	const [studentId, setStudentId] = useState("");
	const [gender, setGender] = useState("");
	const [email, setEmail] = useState("");
	const [program, setProgram] = useState("");
	const [level, setLevel] = useState("");
	const [semester, setSemester] = useState("");

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
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<Image
					style={styles.img}
					source={require("../../assets/profile.png")}
				/>

				<View style={{marginTop: 30}}>
					<Text style={styles.bold}>
						Name:{" "}
						<Text style={styles.text}>
							{firstName} {otherName} {lastName}
						</Text>
					</Text>
					<Text style={styles.bold}>
						Gender: <Text style={styles.text}>{gender}</Text>
					</Text>
					<Text style={styles.bold}>
						Student ID: <Text style={styles.text}>{studentId}</Text>
					</Text>
					<Text style={styles.bold}>
						Student Mail: <Text style={styles.text}>{email}</Text>
					</Text>
					<Text style={styles.bold}>
						Programme: <Text style={styles.text}>{program}</Text>
					</Text>
					<Text style={styles.bold}>
						Level: <Text style={styles.text}>L{level} </Text>
					</Text>
					<Text style={styles.bold}>
						Semester: <Text style={styles.text}>(2nd Semester) </Text>
					</Text>
				</View>

				<TouchableOpacity style={styles.button} onPress={handleLogout}>
					<Text style={styles.buttontext}> Log Out </Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default ProfileDetails;
