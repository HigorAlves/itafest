import React from 'react';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Card, Name, CarName, CallButton, ButtonText } from './style';
import { normalize } from '../../Utils/layout';

const Taxista = () => {
	return (
		<Container>
			<Card>
				<Name>Higor Alves</Name>
				<CarName>Renaul Kwid - Placa QQQ-2222</CarName>
				<CallButton onPress={() => Linking.openURL(`tel:${37991100270}`)}>
					<Icon name='phone' solid color='#fff' size={normalize(14)} />
					<ButtonText>Ligar</ButtonText>
				</CallButton>
			</Card>
		</Container>
	);
};

export default Taxista;
