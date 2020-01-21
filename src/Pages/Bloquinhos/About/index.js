import React from 'react';
import { View, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, AboutTitle, AboutText, ContactContainer, ContactTitle, ContactText, Divider, DividerSocial } from './style';
import { normalize } from '../../../Utils/layout';

const AboutBloquinhos = () => {
	return (
		<Container>
			<AboutTitle>Sobre</AboutTitle>
			<AboutText>
				apsodifjoapsjdfoasjdfojasofjoiasjdfoajsdofjaosdjfoasjfoajsodfjasodfjasjdfasjdfjasdpfjasdpofijasopdifjasdijfaopsijd
			</AboutText>
			<ContactContainer>
				<Divider>
					<ContactTitle>Telefone</ContactTitle>
					<ContactText>(37) 9 91100270</ContactText>
				</Divider>
				<Divider>
					<ContactTitle>Email</ContactTitle>
					<ContactText>higoralves@studiomvp.io</ContactText>
				</Divider>
				<DividerSocial>
					<ContactTitle>Redes Sociais</ContactTitle>
					<View style={{ alignItems: 'center' }}>
						<TouchableOpacity onPress={() => Linking.openURL('fb://page/PAGE_ID')}>
							<Icon name='facebook' solid size={normalize(26)} color='#3b5998' />
						</TouchableOpacity>
					</View>
				</DividerSocial>
			</ContactContainer>
		</Container>
	);
};

export default AboutBloquinhos;
