import {
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	Image,
	Text,
	View,
	TextInput,
	ActivityIndicator,
} from "react-native";
import React, {useState} from "react";
import Modal from "react-native-modal";
import {ROUTES} from "./../constants/ROUTES";
import Success from "./../../assets/files/success.png";
import Fail from "./../../assets/files/fail.png";
import {
	useFocusEffect, // import useFocusEffect from react-navigation
} from "@react-navigation/native";

const Record = ({navigation}) => {
	const [isLoading, setIsLoading] = useState(false);

	const hideSuccessModal = () => {
		setIsSuccessModalVisible(false);
	};

	const hideErrorModal = () => {
		setIsErrorModalVisible(false);
	};

	useFocusEffect(
		React.useCallback(() => {
			return () => {
				hideSuccessModal();
				hideErrorModal();
			};
		}, [])
	);
	// Constants for modals
	const [isSuccessModalVisible, setIsSuccessModalVisible] =
		React.useState(false);
	const [isErrorModalVisible, setIsErrorModalVisible] = React.useState(false);

	const handleDetails = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);

			// Perform any necessary cleanup or other actions here

			// Navigate to the "Details" screen
			navigation.navigate(ROUTES.AttendanceDetails);
		}, 3000);
	};

	const handleSuccessModal = () => {
		setIsLoading(true);

		// Set a timer for 5 seconds and then close the modal
		setTimeout(() => {
			setIsSuccessModalVisible(() => !isSuccessModalVisible);
			setIsLoading(false);
		}, 3000);
	};

	const handleErrorModal = () =>
		setIsErrorModalVisible(() => !isErrorModalVisible);

	// Constants for inputs
	const [fullName, setFullName] = React.useState(false);
	const [id, setId] = React.useState(false);

	return (
		<SafeAreaView className="flex-1">
			<View className="flex-1 px-5 justify-start">
				{/* Header */}
				<Text
					style={{fontFamily: "satoshi-bold"}}
					className="text-center text-xl mb-10">
					Confirm Attendance
				</Text>

				<Text
					style={{fontFamily: "dmsans-regular"}}
					className="text-base mb-10">
					Kindly provide the necessary information below to record your
					attendance
				</Text>

				{/* Input form */}

				<View>
					<TextInput
						style={{fontFamily: "dmsans-regular"}}
						className="border-b h-10 text-base mb-8"
						underlineColorAndroid="transparent"
						placeholder="Full Name"
						placeholderTextColor="#9C9C9C"
						autoCapitalize="none"
						value={fullName}
						// onChangeText={handleIdchange}
					/>
					<TextInput
						style={{fontFamily: "dmsans-regular"}}
						className="border-b h-10 text-base mb-8"
						underlineColorAndroid="transparent"
						placeholder="Student ID"
						placeholderTextColor="#9C9C9C"
						autoCapitalize="none"
						value={id}
						// onChangeText={handlePinchange}
					/>

					<TextInput
						style={{fontFamily: "dmsans-regular"}}
						className="border-b h-10 text-base mb-8"
						underlineColorAndroid="transparent"
						placeholder="Unique Code"
						placeholderTextColor="#9C9C9C"
						autoCapitalize="none"
						value={id}
						// onChangeText={handlePinchange}
						secureTextEntry
					/>
				</View>

				{/* Button */}

				<TouchableOpacity
					title="Hide modal"
					onPress={handleSuccessModal}
					className="bg-black px-12 py-4 rounded-lg flex-row justify-center mb-5">
					<Text
						style={{
							fontFamily: "dmsans-bold",
						}}
						className="text-white text-base">
						{isLoading ? "Recording..." : "Record Attendance"}
					</Text>
					{isLoading && (
						<ActivityIndicator color="white" style={{marginLeft: 10}} />
					)}
				</TouchableOpacity>

				<TouchableOpacity
					className="bg-red px-12 py-4 rounded-lg items-center"
					onPress={handleErrorModal}>
					<Text
						style={{
							fontFamily: "dmsans-bold",
						}}
						className="text-white text-base">
						Error Message
					</Text>
				</TouchableOpacity>

				<View className="">
					<Modal isVisible={isSuccessModalVisible} animationType="slide">
						<View className="flex-1 justify-center items-center bg-white my-56 mx-4 rounded-2xl px-8">
							<View className="justify-center items-center ">
								<Image className="mb-3 h-12 w-12" source={Success} alt="" />
								<Text
									style={{fontFamily: "satoshi-bold", textAlign: "center"}}
									className="text-xl mb-2 text-blue ">
									Success!🥳
								</Text>
							</View>
							<Text
								style={{fontFamily: "dmsans-regular"}}
								className="text-base text-center mb-4 text-primary">
								Your attendance has been recorded. Thank You!
							</Text>
							<Text className="text-xs text-center mb-4 text-placeholder">
								(DCIT 408 - Compiler - 28/08/23)
							</Text>
							<TouchableOpacity
								title="Hide modal"
								onPress={handleDetails}
								className="bg-black px-12 py-4 rounded-lg flex-row">
								<Text
									style={{fontFamily: "dmsans-bold"}}
									className="text-white text-base">
									{isLoading ? "Viewing.." : "Done"}
								</Text>
								{isLoading && (
									<ActivityIndicator color="white" style={{marginLeft: 10}} />
								)}
							</TouchableOpacity>
						</View>
					</Modal>
					<Modal isVisible={isErrorModalVisible} animationType="slide">
						<View className="flex-1 justify-center items-center bg-white my-56 mx-4 rounded-2xl px-8 ">
							<View className="justify-center items-center ">
								<Image className="mb-3 h-12 w-12" source={Fail} alt="" />
								<Text
									style={{fontFamily: "satoshi-bold", textAlign: "center"}}
									className="text-xl mb-2 text-red">
									Oops! ☹️️
								</Text>
							</View>
							<Text
								style={{fontFamily: "dmsans-regular"}}
								className="text-base text-center mb-4 text-primary">
								Attendance not recorded. Unique code already used.
							</Text>
							<Text className="text-xs text-center mb-4 text-placeholder">
								See your instructor!
							</Text>
							<TouchableOpacity
								title="Hide modal"
								onPress={handleErrorModal}
								className="bg-fade px-12 py-2 rounded-lg  mb-3">
								<Text
									style={{fontFamily: "dmsans-bold"}}
									className="text-white text-base">
									Retry
								</Text>
							</TouchableOpacity>
						</View>
					</Modal>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Record;
