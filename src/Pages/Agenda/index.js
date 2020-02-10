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
import { widthPercentageToDP } from '../../Utils/layout';

const eventData = {
	primeiro: [
		{
			title: 'Abertura',
			hour: '9:00 - 13:00',
			local: 'Centro',
			price: 'Gratis'
		}
	],
	segundo: [
		{
			title: 'Seguno dia',
			hour: '9:00 - 13:00',
			local: 'Centro',
			price: 'Pago'
		},
		{
			title: 'Seguno-dia',
			hour: '9:00 - 13:00',
			local: 'Centro',
			price: 'Pago'
		}
	]
};

const Agenda = () => {
	const [day, setDay] = React.useState('primeiro');
	const [data, setData] = React.useState(eventData.primeiro);

	React.useEffect(() => {
		switch (day) {
			case 'primeiro':
				setData(eventData.primeiro);
				break;
			case 'segundo':
				setData(eventData.segundo);
				break;

			default:
				break;
		}
	}, [day]);

	return (
		<>
			<Line />
			<LineContainer>
				<ContainerPicker>
					<Circle color={Colors.pink} />
					<Picker mode='dialog' onValueChange={value => setDay(value)} selectedValue={day}>
						<Picker.Item value='primeiro' label='Primeiro Dia - 21/02' />
						<Picker.Item value='segundo' label='Segundo Dia - 22/02' />
						<Picker.Item value='terceiro' label='Terceiro Dia - 23/02' />
						<Picker.Item value='quarto' label='Quarto Dia - 24/02' />
						<Picker.Item value='quinto' label='Quinto Dia - 25/02' />
						<Picker.Item value='sexto' label='Sexto Dia - 26/02' />
					</Picker>
				</ContainerPicker>
				{data.map(event => (
					<ContainerCard key={event.title}>
						<View style={{ flexDirection: 'row' }}>
							<Circle />
							<Hour>{event.hour}</Hour>
						</View>
						<Card>
							<CardTitleContainer>
								<CardTitle>{event.title}</CardTitle>

								<View style={{ flexDirection: 'row' }}>
									<View style={{ flexDirection: 'row', alignItems: 'center' }}>
										<Icon name='map-marked' solid color='rgba(96, 78, 166,0.6)' size={16} style={{ marginRight: 10 }} />
										<Text>{event.local}</Text>
									</View>

									<View style={{ flexDirection: 'row', marginLeft: widthPercentageToDP(40) }}>
										<Icon name='ticket-alt' solid color='rgba(96, 78, 166,0.6)' size={16} style={{ marginRight: 10 }} />
										<Text>{event.price}</Text>
									</View>
								</View>
							</CardTitleContainer>
							{/* <CardButton>
							<TextButton>Info</TextButton>
							<Icon name='plus' solide color='#fff' size={16} style={{ marginTop: 10 }} />
						</CardButton> */}
						</Card>
					</ContainerCard>
				))}
			</LineContainer>
		</>
	);
};
export default Agenda;
