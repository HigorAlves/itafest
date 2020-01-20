import React from 'react';
import { Text, View } from 'react-native';
import {
	Container,
	Line,
	LineContainer,
	ContainerCard,
	Circle,
	Hour,
	Card,
	CardTitle,
	CardButton,
	CardTitleContainer,
	TextButton,
	Picker,
	ContainerPicker
} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../Utils/colors';

const Agenda = () => {
	return (
		<>
			<Line />
			<LineContainer>
				<ContainerPicker>
					<Circle color={Colors.pink} />
					<Picker mode='dialog'>
						<Picker.Item value='first' label='Primeiro Dia' />
						<Picker.Item value='second' label='Segundo Dia' />
					</Picker>
					{/* <Icon name='chevron-down' color={Colors.pink} size={20} style={{ position: 'absolute', right: 30 }} /> */}
				</ContainerPicker>
				<ContainerCard>
					<View style={{ flexDirection: 'row' }}>
						<Circle />
						<Hour>9:00 - 13:00</Hour>
					</View>
					<Card>
						<CardTitleContainer>
							<CardTitle>Abertura do Evento</CardTitle>
							<View style={{ flexDirection: 'row' }}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Icon name='map-marked' solid color='rgba(96, 78, 166,0.6)' size={16} style={{ marginRight: 10 }} />
									<Text>Praça do coreto</Text>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 40 }}>
									<Icon name='ticket-alt' solid color='rgba(96, 78, 166,0.6)' size={16} style={{ marginRight: 10 }} />
									<Text>Gratis</Text>
								</View>
							</View>
						</CardTitleContainer>
						<CardButton>
							<TextButton>Info</TextButton>
							<Icon name='plus' solide color='#fff' size={16} style={{ marginTop: 10 }} />
						</CardButton>
					</Card>
				</ContainerCard>
			</LineContainer>
		</>
	);
};
export default Agenda;
