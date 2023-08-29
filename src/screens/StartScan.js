import {
	View,
	Text,
	Button,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from "react-native";
import React, {useState} from "react";
import {styles} from "./globalstyles";
import {useNavigation} from "@react-navigation/native";
import {ROUTES} from "./../constants/ROUTES";

const StartScan = () => {
	const navigation = useNavigation();

	const handleScan = async () => {
		navigation.navigate(ROUTES.Scan);
	};

	return (
		<SafeAreaView className="flex-1">
			{/* <Button onPress={() => goBack()} title="Go back from ProfileScreen" /> */}

			<View className="flex-1 px-5 justify-center">
				<View className="flex-1 items-center justify-center">
					<View className="h-[40%] w-[90%] border mb-5 items-center justify-center">
						<Image
							className="h-fit"
							source={require("../../assets/scanqr.png")}
						/>
					</View>
					<Text className="text-[18px] text-center mb-5">
						Verifying QR code. <Text className="italic">Please wait ...</Text>
					</Text>
					<TouchableOpacity
						className="bg-black py-4 rounded-lg w-[90%] flex-row justify-center"
						onPress={() => navigation.navigate(ROUTES.BarcodeScreen)}>
						<Text
							style={{
								fontFamily: "dmsans-bold",
							}}
							className="text-white text-base">
							Scan Code
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default StartScan;
