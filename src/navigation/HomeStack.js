import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {
	Login,
	Home,
	StartScan,
	Profile,
	BarcodeScreen,
	TakeAttendance,
	AttendanceDetails,
	Record,
} from "./../screens";
import {ROUTES} from "./../constants/ROUTES";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import BottomTabs from "./BottomTabs";

// const Stack = createStackNavigator();

const Stack = createNativeStackNavigator();

const HomeStack = () => (
	<Stack.Navigator>
		<Stack.Screen
			name={ROUTES.Home}
			component={Home}
			options={{headerShown: false}}
			// options={{

			// 	title: "Home", // Set the title here, which is the name of the screen
			// 	headerTitleAlign: "center",
			// }}
		/>

		<Stack.Screen
			name={ROUTES.StartScan}
			component={StartScan}
			options={{headerShown: true}}
			// options={{
			// 	title: "Take Attendance", // Set the title here, which is the name of the screen
			// 	headerTitleAlign: "center",
			// }}
		/>

		<Stack.Screen
			name={ROUTES.BarcodeScreen}
			component={BarcodeScreen}
			// options={{
			// 	title: "Scan Code", // Set the title here, which is the name of the screen
			// 	headerTitleAlign: "center",
			// }}
			options={{headerShown: true}}
		/>

		<Stack.Screen
			name={ROUTES.TakeAttendance}
			component={TakeAttendance}
			// options={{
			// 	title: "Take Attendance", // Set the title here, which is the name of the screen
			// 	headerTitleAlign: "center",
			// 	headerLeft: null, // Remove the back button
			// }}
			options={{headerShown: true}}
		/>

		<Stack.Screen
			name={ROUTES.Record}
			component={Record}
			// options={{
			// 	title: "Take Attendance", // Set the title here, which is the name of the screen
			// 	headerTitleAlign: "center",
			// 	headerLeft: null, // Remove the back button
			// }}
			options={{headerShown: true}}
		/>

		<Stack.Screen
			name={ROUTES.AttendanceDetails}
			component={AttendanceDetails}
			// options={{
			// 	title: "Take Attendance", // Set the title here, which is the name of the screen
			// 	headerTitleAlign: "center",
			// 	headerLeft: null, // Remove the back button
			// }}
			options={{headerShown: true}}
		/>

		<Stack.Screen
			name={ROUTES.Profile}
			component={Profile}
			// options={{
			// 	title: "Profile", // Set the title here, which is the name of the screen
			// 	headerTitleAlign: "center",
			// }}
			options={{headerShown: true}}
		/>
	</Stack.Navigator>
);

export default HomeStack;
