import {View, Text, SafeAreaView} from "react-native";
import React from "react";
import {styles} from "./globalstyles";

const Report = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>This is the Report Screen</Text>
			</View>
		</SafeAreaView>
	);
};

export default Report;
