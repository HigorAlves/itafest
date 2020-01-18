import React from 'react';
import { Text, View } from 'react-native';
import { Container, Line, LineContainer, ContainerCard, Circle, Hour, Card, CardTitle, CardButton, CardTitleContainer } from './style';
import { ScrollView } from 'react-native-gesture-handler';

const Agenda = () => {
	return (
		<>
			<Line />
			<LineContainer>
				<ContainerCard>
					<View style={{ flexDirection: 'row' }}>
						<Circle />
						<Hour>9:00 - 13:00</Hour>
					</View>
					<Card>
						<CardTitleContainer>
							<CardTitle>Abertura do Evento</CardTitle>
							<Text>Praça do coreto</Text>
						</CardTitleContainer>
						<CardButton></CardButton>
					</Card>
				</ContainerCard>
			</LineContainer>
		</>
	);
};
export default Agenda;
