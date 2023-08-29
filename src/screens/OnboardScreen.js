import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import React from "react";
import {ROUTES} from "./../constants/ROUTES";
import Onboarding from "react-native-onboarding-swiper";
import Ionicons from "@expo/vector-icons/Ionicons";

import {FontAwesome} from "@expo/vector-icons"; // You may need to install the FontAwesome package

const OnboardScreen = ({navigation}) => {
	const handleDone = () => {
		navigation.navigate(ROUTES.Login);
	};

	const CustomPrevButton = ({onPress}) => (
		<TouchableOpacity onPress={onPress}>
			<Ionicons name="arrow-back" size={24} color="black" />{" "}
		</TouchableOpacity>
	);

	const CustomNextButton = ({onPress}) => (
		<TouchableOpacity onPress={onPress}>
			<Ionicons name="arrow-back" size={24} color="black" />{" "}
		</TouchableOpacity>
	);

	return (
		<View className="flex-1">
			<Onboarding
				onDone={handleDone}
				onSkip={handleDone}
				showSkip={false} // Hide the default "Skip" button
				showNext={false} // Hide the default "Next" button
				bottomBarColor="#ffffff" // Set the bottom bar color to transparent
				showPagination={true} // Hide the pagination dots
				bottomBarStyle={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#ffee98",
				}}
				subTitleStyles={{
					color: "#444444",
					fontFamily: "dmsans-regular",
					paddingHorizontal: 15,
				}}
				titleStyles={{fontFamily: "satoshi-bold"}}
				pages={[
					{
						backgroundColor: "#fff",
						image: <Image source={require("../../assets/onboarding/1.png")} />,
						title: "Welcome",
						subtitle:
							"Get ready to revolutionize attendance tracking with our seamless solution",
					},

					{
						backgroundColor: "#fff",
						image: <Image source={require("../../assets/onboarding/2.png")} />,
						title: "Simple",
						subtitle:
							"Say goodbye to traditional methods and welcome simplicity",
					},
					{
						backgroundColor: "#fff",
						image: <Image source={require("../../assets/onboarding/3.png")} />,
						title: "Efficient",
						subtitle:
							"Streamline attendance tracking for both instructors and students",
					},
				]}
				bottomBarContent={
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						{/* Custom Previous Button */}
						<CustomPrevButton onPress={() => {}} />

						{/* Custom Pagination */}
						<Text className="text-red">Hello world</Text>

						{/* Custom Next Button */}
						<CustomNextButton onPress={() => {}} />
					</View>
				}
			/>
		</View>
	);
};

export default OnboardScreen;
