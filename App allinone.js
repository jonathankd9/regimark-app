import React, {useState, useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {ROUTES} from "./src/constants/routes";
import {BottomTabs} from "./src/navigation/";
import {
	Splash,
	Login,
	Home,
	Profile,
	Scan,
	Report,
	StartScan,
} from "./src/screens/";
// import Home from "./src/screens/";

import AsyncStorage from "@react-native-async-storage/async-storage";

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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name={ROUTES.Home} component={Home} />
			<Tab.Screen name={ROUTES.Profile} component={Profile} />
			<Tab.Screen name={ROUTES.Report} component={Report} />
		</Tab.Navigator>
	);
};

const App = () => {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize as false

	const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
	const [token, setToken] = useState(null);

	useEffect(() => {
		// Check if the user is authenticated from AsyncStorage
		AsyncStorage.getItem("userToken")
			.then((token) => {
				setIsAuthenticated(!!token);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

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
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Group>
					{isLoggedIn ? (
						<>
							<Stack.Screen
								name={ROUTES.Home}
								component={Home}
								options={{headerShown: false}}
							/>
							<Stack.Screen
								name={ROUTES.StartScan}
								component={StartScan}
								options={{headerShown: false}}
							/>
							<Stack.Screen
								name={ROUTES.Profile}
								component={Profile}
								options={{headerShown: false}}
							/>
						</>
					) : (
						// Auth screens
						<>
							<Stack.Screen
								name={ROUTES.Splash}
								component={Splash}
								options={{headerShown: false}}
							/>
							<Stack.Screen
								name={ROUTES.Login}
								component={Login}
								options={{headerShown: false}}
							/>
							<Stack.Screen
								name={ROUTES.Home}
								component={BottomTabNavigator}
								options={{headerShown: false}}
							/>
						</>
					)}
				</Stack.Group>
				<Stack.Screen
					name={ROUTES.StartScan}
					component={StartScan}
					options={{headerShown: true}}
				/>
				<Stack.Screen
					name={ROUTES.Scan}
					component={Scan}
					options={{headerShown: true}}
				/>
				<Stack.Group></Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
