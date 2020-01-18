import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { Text, AsyncStorage, Image } from 'react-native';
import { Container, ContainerProfile, LogoutButton, ButtonText } from './style';

const Drawer = props => {
	const [profilePhoto, setProfilePhoto] = useState('');

	const logout = () => {
		auth()
			.signOut()
			.then(() => {
				AsyncStorage.removeItem('userToken');
				props.navigation.navigate('Auth');
			});
	};

	useEffect(() => {
		setProfilePhoto(auth().currentUser.photoURL);
	}, []);

	return (
		<Container>
			<ContainerProfile>
				<Image source={{ uri: profilePhoto }} style={{ width: 100, height: 100, borderRadius: 200 }} />
				<Text style={{ marginTop: 20, color: 'white', fontSize: 18 }}>{auth().currentUser.displayName}</Text>
			</ContainerProfile>
			<LogoutButton onPress={logout}>
				<ButtonText>Sair do App</ButtonText>
			</LogoutButton>
		</Container>
	);
};

export default Drawer;
