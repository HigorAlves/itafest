import React from 'react';
import { View } from 'react-native';
import { Container, Card, CardLogo, Title, SubTitle, ContainerLogo } from './style';

const Bloquinhos = () => {
	return (
		<Container>
			<Card>
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
