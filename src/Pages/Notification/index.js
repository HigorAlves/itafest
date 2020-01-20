import React from 'react';
import { Container, Card, Ball, Text, TimeText, ContainerTime } from './style';

const Notification = () => {
	return (
		<Container>
			<Card>
				<ContainerTime>
					<Ball />
					<TimeText>15 minutos atras</TimeText>
				</ContainerTime>
				<Text>Alerta de um alerta alertado para ser alertado de alertas olha que alerta mais legal esse aqui</Text>
			</Card>
		</Container>
	);
};
export default Notification;
