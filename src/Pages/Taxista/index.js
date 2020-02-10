import React from 'react';
import { Linking, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Card, Name, CarName, CallButton, ButtonText, WhatsappButton } from './style';
import { normalize } from '../../Utils/layout';
import Colors from '../../Utils/colors';

const Taxista = () => {
	return (
		<Container>
			<Card>
				<Name>Higor Alves</Name>
				<View style={{ marginLeft: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Icon name='car' solid color={Colors.darkPurple} size={normalize(14)} />
						<CarName>Renaul Kwid</CarName>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Icon name='id-card' solid color={Colors.darkPurple} size={normalize(14)} />
						<CarName>PPP-1111</CarName>
					</View>
				</View>
				<View style={{ dispay: 'flex', flexDirection: 'row' }}>
					<CallButton onPress={() => Linking.openURL(`tel:${37991100270}`)}>
						<Icon name='phone' solid color='#fff' size={normalize(14)} />
						<ButtonText>Ligar</ButtonText>
					</CallButton>
					<WhatsappButton
						onPress={() =>
							Linking.openURL(
								`whatsapp://send?phone=${5537991100270}&text=i, tudo bem? Gostaria de combinar uma corrida! Entrei em contato via aplicativo ItaFest`
							)
						}
					>
						<Icon name='whatsapp' solid color='#fff' size={normalize(14)} />
						<ButtonText>Whatsapp</ButtonText>
					</WhatsappButton>
				</View>
			</Card>
		</Container>
	);
};

export default Taxista;
