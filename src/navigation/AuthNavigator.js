import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {ROUTES} from "./../constants/ROUTES";
// import {BottomTabs} from "./../navigation";
import {Splash, Login, Home, OnboardScreen} from "../screens";

const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
	return (
		<Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.Splash}>
			<Stack.Screen
				name={ROUTES.Splash}
				component={Splash}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name={ROUTES.OnboardScreen}
				component={OnboardScreen}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name={ROUTES.Login}
				component={Login}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
}

export default AuthNavigator;
