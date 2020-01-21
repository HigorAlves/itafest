import React, { useState, useEffect } from 'react';
import database from '@react-native-firebase/database';
import { Container, Card, Ball, Text, TimeText, ContainerTime } from './style';

const Notification = () => {
	const [notification, setNotification] = useState([]);

	async function loadNotifications() {
		const ref = database().ref(`/notification/`);
		let data = [];
		await ref.once('value', snap => {
			snap.forEach(doc => {
				data.push({ id: doc.key, ...doc.val() });
			});
			setNotification(data);
		});
	}

	useEffect(() => {
		loadNotifications();
	}, []);

	return (
		<Container>
			{notification.map((item, index) => (
				<Card key={index}>
					<ContainerTime>
						<Ball color={item.color} />
						<TimeText>{item.time}</TimeText>
					</ContainerTime>
					<Text>{item.text}</Text>
				</Card>
			))}
		</Container>
	);
};
export default Notification;
