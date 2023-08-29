import {View, Text, SafeAreaView, Image} from "react-native";
import React, {useEffect} from "react";
import {styles} from "./globalstyles";
import {useNavigation} from "@react-navigation/native";
import {ROUTES} from "./../constants/ROUTES";

const Splash = () => {
	const navigation = useNavigation();

	useEffect(() => {
		const timer = setTimeout(() => {
			navigation.navigate(ROUTES.OnboardScreen);
		}, 4000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<SafeAreaView className="flex-1 bg-[#000000] justify-center items-center">
			<View>
				{/* Text */}
				<Text
					className="text-6xl text-white"
					style={{fontFamily: "satoshi-bold"}}>
					regiMark
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default Splash;
