import React, {useState, useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {ROUTES} from "./src/constants/ROUTES";
import {Login} from "./src/screens";

import {AuthNavigator, HomeStack} from "./src/navigation/";

import AsyncStorage from "@react-native-async-storage/async-storage";

// Fonts
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

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
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		// Check if the user is already authenticated
		checkAuthenticationStatus();
		// Load fonts
		// loadFonts();
	}, []);

	const checkAuthenticationStatus = async () => {
		try {
			// Check if the user is authenticated by looking for a token in AsyncStorage
			const token = await AsyncStorage.getItem("userToken");
			if (token) {
				// User is authenticated, set isAuthenticated to true
				setIsAuthenticated(true);
			} else {
				// User is not authenticated, set isAuthenticated to false
				setIsAuthenticated(false);
			}
		} catch (error) {
			console.error("Error checking authentication status:", error);
		}
	};

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
			<Stack.Navigator
				initialRouteName={isAuthenticated ? ROUTES.Home : ROUTES.Login}>
				<Stack.Screen
					name={ROUTES.Login}
					component={Login}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name={ROUTES.Home}
					component={HomeStack}
					options={{headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
