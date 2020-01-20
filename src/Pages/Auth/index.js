import React from 'react';
import { firebase } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import appleAuth, { AppleAuthRequestScope, AppleAuthRequestOperation } from '@invertase/react-native-apple-authentication';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { StatusBar, Text, Image, AsyncStorage } from 'react-native';

import { Container, ContainerImage, LoginWithGoogle, LoginWithFacebook, LoginWithApple, ButtonContainer } from './style';
import { normalize } from '../../Utils/layout';
import BGImage from '../../Images/login-bg.jpg';
import GoogleIcon from '../../Images/google-icon.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = props => {
	async function loginGoogle() {
		await GoogleSignin.configure({
			scopes: ['profile', 'email'],
			webClientId: '1025513194578-a0gdeg5nuuvof157roa53g7qflrrjte8.apps.googleusercontent.com' // required
		});
		const { accessToken, idToken } = await GoogleSignin.signIn();
		const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
		await firebase
			.auth()
			.signInWithCredential(credential)
			.then(async user => {
				await AsyncStorage.setItem('userToken', user.user.uid);
				props.navigation.navigate('App');
			});
	}

	async function loginApple() {
		// 1). start a apple sign-in request
		const appleAuthRequestResponse = await appleAuth.performRequest({
			requestedOperation: AppleAuthRequestOperation.LOGIN,
			requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME]
		});

		// 2). if the request was successful, extract the token and nonce
		const { identityToken, nonce } = appleAuthRequestResponse;
		if (identityToken) {
			// 3). create a Firebase `AppleAuthProvider` credential
			const appleCredential = firebase.auth.AppleAuthProvider.credential(identityToken, nonce);
			await firebase
				.auth()
				.signInWithCredential(appleCredential)
				.then(async user => {
					await AsyncStorage.setItem('userToken', user.user.uid);
					props.navigation.navigate('App');
				});
		}
	}

	async function loginFacebook() {
		LoginManager.logInWithPermissions(['public_profile', 'email'])
			.then(() => {})
			.catch(error => {
				console.warn(error);
			});
	}

	return (
		<ContainerImage source={BGImage}>
			<StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
			<Container>
				<ButtonContainer>
					<LoginWithGoogle onPress={loginGoogle}>
						<Image source={GoogleIcon} style={{ width: 25, height: 25, position: 'absolute', marginLeft: 20 }} />
						<Text style={{ textAlign: 'center', fontSize: normalize(14), fontWeight: '300' }}>Google</Text>
					</LoginWithGoogle>
					<LoginWithFacebook onPress={loginFacebook}>
						<Icon name='facebook' size={25} color='#fff' style={{ position: 'absolute', marginLeft: 20 }} />
						<Text style={{ textAlign: 'center', fontSize: normalize(14), fontWeight: '300', color: 'white' }}>Facebook</Text>
					</LoginWithFacebook>
					<LoginWithApple onPress={loginApple}>
						<Icon name='apple' size={25} color='#000' style={{ position: 'absolute', marginLeft: 20 }} />
						<Text style={{ textAlign: 'center', fontSize: normalize(14), fontWeight: '300' }}>Apple</Text>
					</LoginWithApple>
				</ButtonContainer>
			</Container>
		</ContainerImage>
	);
};

export default Login;
