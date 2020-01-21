import React from 'react';
import { View } from 'react-native';
import { Container, Card, CardLogo, Title, SubTitle, ContainerLogo } from './style';

const Bloquinhos = props => {
	return (
		<Container>
			<Card onPress={() => props.navigation.navigate('AboutBloco')}>
				<CardLogo resizeMode='contain' source={require('../../Images/logo-light.png')} />
				<View style={{ marginLeft: 20 }}>
					<Title>Nome do Bloco</Title>
					<SubTitle>Alguma frase tema</SubTitle>
				</View>
			</Card>
		</Container>
	);
};

export default Bloquinhos;
