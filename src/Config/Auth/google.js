import { GoogleSignin } from '@react-native-community/google-signin';

async function bootstrap() {
	await GoogleSignin.configure({
		scopes: ['https://www.googleapis.com/auth/drive.readonly'],
		webClientId: '1025513194578-a0gdeg5nuuvof157roa53g7qflrrjte8.apps.googleusercontent.com' // required
	});
}

export default bootstrap;
