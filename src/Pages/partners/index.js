import React from 'react';
import { Linking, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Card, Name, CarName, CallButton, ButtonText, WhatsappButton } from './styles';
import { normalize, widthPercentageToDP } from '../../Utils/layout';
import Colors from '../../Utils/colors';

const Partners = () => {
	return (
		<Container>
			<Card>
				<Image
					source={require('../../Images/slides/slide_360brave.jpg')}
					style={{ height: 100, width: widthPercentageToDP(90), borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
					resizeMode='cover'
				/>
				<Name>360 Brave</Name>
				<View style={{ marginLeft: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Icon name='handshake' color={Colors.darkPurple} size={normalize(14)} />
						<CarName>Mais que uma consultoria, uma maquina de sonhos!</CarName>
					</View>
				</View>
				<View style={{ dispay: 'flex', flexDirection: 'row' }}>
					<CallButton onPress={() => Linking.openURL(`tel:${37991100270}`)}>
						<Icon name='phone' solid color='#fff' size={normalize(14)} />
						<ButtonText>Ligar</ButtonText>
					</CallButton>
					<WhatsappButton onPress={() => Linking.openURL(`whatsapp://send?phone=${5537991100270}`)}>
						<Icon name='whatsapp' solid color='#fff' size={normalize(14)} />
						<ButtonText>Whatsapp</ButtonText>
					</WhatsappButton>
				</View>
			</Card>
		</Container>
	);
};

export default Partners;
