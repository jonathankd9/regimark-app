import {SafeAreaView, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import {ROUTES} from "../constants/ROUTES";
import {CommonActions} from "@react-navigation/native";

const AttendanceDetails = ({navigation}) => {
	const handleFinish = () => {
		// navigation.navigate(ROUTES.Home);
		alert("Thank you for marking attendance for today!");

		setTimeout(() => {
			navigation.dispatch(
				CommonActions.navigate({
					name: "Home",
					params: {
						// user: "jane",
					},
				})
			);
		}, 3000);
	};
	return (
		<SafeAreaView className="flex-1">
			<View className="flex-1 justify-start px-5">
				{/* Header */}
				<Text
					style={{fontFamily: "satoshi-bold"}}
					className="text-center text-xl py-2 mb-10">
					Attendance Details
				</Text>

				<Text style={{fontFamily: "dmsans-regular"}} className="text-xl mb-10">
					Great job! Here are the details of your recorded attendance:
				</Text>

				{/* Course information */}
				<View className="flex-row gap-3 mb-14 items-center">
					<View className="gap-y-3">
						<Text>Course: </Text>
						<Text>Instructor: </Text>
						<Text>Ticket: </Text>
						<Text>Student ID: </Text>
						<Text>Timestamp: </Text>
					</View>
					<View className="gap-y-3">
						<Text style={{fontFamily: "dmsans-bold"}} className="">
							DCIT 418 - Wireless Networks & Sys.{" "}
						</Text>
						<Text style={{fontFamily: "dmsans-bold"}} className="">
							Albert Nana Benyin Ampah{" "}
						</Text>
						<Text style={{fontFamily: "dmsans-bold"}} className="">
							AE 1236GH
						</Text>
						<Text style={{fontFamily: "dmsans-bold"}} className="">
							10826194
						</Text>
						<Text style={{fontFamily: "dmsans-bold"}} className="">
							28-08-23 - 09:23 am
						</Text>
					</View>
				</View>

				<TouchableOpacity
					onPress={handleFinish}
					className="bg-black px-12 py-4 rounded-lg ">
					<Text
						style={{fontFamily: "dmsans-bold"}}
						className="text-white text-center text-base">
						Finish
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default AttendanceDetails;
