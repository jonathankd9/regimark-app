import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {ROUTES} from "./../constants/ROUTES";
// import {BottomTabs} from "./../navigation";
import {Splash, Login, Home, OnboardScreen} from "../screens";

const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		// Check if the user is already authenticated
		checkAuthenticationStatus();
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

	return (
		<Stack.Navigator
			screenOptions={{}}
			initialRouteName={isAuthenticated ? ROUTES.Login : ROUTES.Splash}>
			{/* Only show Splash and OnboardScreen for non-authenticated users */}
			{!isAuthenticated && (
				<>
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
				</>
			)}
			<Stack.Screen
				name={ROUTES.Login}
				component={Login}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
}

export default AuthNavigator;
