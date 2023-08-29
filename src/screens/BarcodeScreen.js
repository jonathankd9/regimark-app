import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet, SafeAreaView, Button} from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
import {useNavigation} from "@react-navigation/native";

const BarcodeScreen = () => {
	const navigation = useNavigation();

	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const {status} = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === "granted");
		};

		getBarCodeScannerPermissions();
	}, []);

	const handleBarCodeScanned = ({type, data}) => {
		setScanned(true);
		alert(
			// `Bar code with type ${type} and data ${data} has been scanned! Continue to mark present`
			"Thank you for scanning the code"
		);
		console.log(type);

		// Pass the scanned data to the "Confirmation" screen
		navigation.navigate("TakeAttendance", {scannedData: data});
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<SafeAreaView className="flex-1">
			<View className="flex-1">
				<Text
					className="text-lg px-5 py-2 text-center text-primary"
					style={{fontFamily: "dmsans-regular"}}>
					Please scan the QR Code for this code and mark attendance
				</Text>
				<View style={styles.qrScannerContainer}>
					<BarCodeScanner
						onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
						style={StyleSheet.absoluteFillObject}
					/>
					<View style={styles.qrFrame} />
				</View>
				{scanned && (
					<Button
						title={"Tap to Scan Again"}
						onPress={() => setScanned(false)}
					/>
				)}

				<Text
					className="text-lg px-5 py-2 text-center text-primary"
					style={{fontFamily: "dmsans-regular"}}>
					Please scan the QR Code for this code and mark attendance
				</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	qrScannerContainer: {
		flex: 1,
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		// backgroundColor: "red", // Adjust the last value (0.5) for opacity
	},
	qrFrame: {
		width: 300, // Adjust the width and height of the green frame as needed
		height: 300,
		borderWidth: 2,
		borderColor: "green",
		position: "absolute",
		zIndex: 1,
		opacity: 0.2,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default BarcodeScreen;
