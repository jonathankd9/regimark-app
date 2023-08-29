import React, {useState, useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {ROUTES} from "./src/constants/ROUTES";
import {BottomTabs} from "./src/navigation/";

import {Home} from "./src/screens/";
import {Login} from "./src/screens/";
import {Splash} from "./src/screens/";

import {AuthNavigator, HomeStack} from "./src/navigation/";

// import AsyncStorage from "@react-native-async-storage/async-storage";

// Fonts
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const getFonts = () => {
	return Font.loadAsync({
		"dmsans-regular": require("./assets/fonts/DMSans-Regular.ttf"),
		"dmsans-bold": require("./assets/fonts/DMSans-Bold.ttf"),
		"satoshi-regular": require("./assets/fonts/Satoshi-Regular.otf"),
		"satoshi-bold": require("./assets/fonts/Satoshi-Bold.otf"),
		"satoshi-italic": require("./assets/fonts/Satoshi-Italic.otf"),
	});
};

// const Stack = createStackNavigator();

const Stack = createNativeStackNavigator();

const App = () => {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if (!fontsLoaded) {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => setFontsLoaded(true)}
				onError={console.warn}
			/>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Splash">
				<Stack.Screen
					name={ROUTES.Splash}
					component={AuthNavigator}
					r
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name={ROUTES.Home}
					component={HomeStack}
					r
					options={{headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
