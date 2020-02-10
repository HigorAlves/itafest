import React from 'react';
import { View } from 'react-native';
import { Container, Card, CardLogo, Title, SubTitle, ContainerLogo } from './style';

const Bloquinhos = props => {
	return (
		<Container>
			<Card onPress={() => props.navigation.navigate('AboutBloco', { bloco: 'maldormidos', name: 'Mal Dormidos' })}>
				<CardLogo resizeMode='contain' source={require('../../Images/blocos/maldormidos/logo.png')} />
				<View style={{ marginLeft: 20 }}>
					<Title>Mal Dormidos</Title>
					<SubTitle>O bloco nota 10</SubTitle>
				</View>
			</Card>

			<Card
				style={{ marginTop: 20 }}
				// onPress={() => props.navigation.navigate('AboutBloco', { bloco: 'balacobaku', name: 'BalacoBaku' })}
			>
				<CardLogo resizeMode='contain' source={require('../../Images/blocos/maldormidos/logo.png')} />
				<View style={{ marginLeft: 20 }}>
					<Title>BalacoBaku</Title>
					<SubTitle>Sem informações</SubTitle>
				</View>
			</Card>

			<Card
				style={{ marginTop: 20 }}
				// onPress={() => props.navigation.navigate('AboutBloco', { bloco: 'soanata', name: 'Só a Nata' })}
			>
				<CardLogo resizeMode='contain' source={require('../../Images/blocos/nata/logo.png')} />
				<View style={{ marginLeft: 20 }}>
					<Title>Só a Nata</Title>
					<SubTitle>Sem informações</SubTitle>
				</View>
			</Card>

			<Card
				style={{ marginTop: 20 }}
				// onPress={() => props.navigation.navigate('AboutBloco', { bloco: 'suvacodecobra', name: 'Suvaco de Cobra' })}
			>
				<CardLogo resizeMode='contain' source={require('../../Images/blocos/suvaco/logo.png')} />
				<View style={{ marginLeft: 20 }}>
					<Title>Suvaco de Cobra</Title>
					<SubTitle>Sem informações</SubTitle>
				</View>
			</Card>

			<Card
				style={{ marginTop: 20 }}
				// onPress={() => props.navigation.navigate('AboutBloco', { bloco: 'blocodocleo', name: 'Bloco do Cléo' })}
			>
				<CardLogo resizeMode='contain' source={require('../../Images/blocos/cleo/logo.png')} />
				<View style={{ marginLeft: 20 }}>
					<Title>Bloco do Cléo</Title>
					<SubTitle>Sem informações</SubTitle>
				</View>
			</Card>
		</Container>
	);
};

export default Bloquinhos;
