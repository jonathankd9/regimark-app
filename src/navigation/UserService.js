import axios from "axios";
import * as Keychain from "react-native-keychain";

const API_URL = "http://127.0.0.1:8000/api/auth/student/login/";
// const API_URL = "http://192.168.4.133/api/auth/student/login/";

class UserService {
	async login(studentId, pin) {
		try {
			const response = await axios.post(
				API_URL,
				{ student_id: studentId, pin: pin },
				{ headers: { "Content-Type": "application/json" } }
			);
			const token = response.data.token;
			await Keychain.setInternetCredentials("auth", "token", token);
			return token;
		} catch (error) {
			console.error(error);
			throw new Error(
				error.response?.data?.non_field_errors?.[0] || "The details is wrong"
			);
		}
	}

	async logout() {
		await Keychain.resetInternetCredentials("auth");
	}

	async getUserInfo() {
		try {
			const token = await this.getToken();
			if (!token) {
				throw new Error("No authentication token found");
			}
			const response = await axios.get(`${API_URL}/profile/`, {
				headers: { Authorization: `Token ${token}` },
			});
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error(
				error.response?.data?.detail || "Unexpected error occurred"
			);
		}
	}

	async getToken() {
		const credentials = await Keychain.getInternetCredentials("auth");
		return credentials ? credentials.password : null;
	}
}

export default new UserService();
