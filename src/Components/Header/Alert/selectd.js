import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import database from '@react-native-firebase/database';
import { Container, Effect, Counter } from './style';
import { normalize } from '../../../Utils/layout';
import { Text } from 'react-native';

const Alert = props => {
	const [number, setNumber] = useState(0);

	async function loadNotifications() {
		const ref = database().ref(`/notification/`);
		let count = 0;
		await ref.on('child_added', snap => {
			count++;
			setNumber(count);
		});
	}

	useEffect(() => {
		// loadNotifications();
	}, []);

	return (
		<Container
			onPress={() => {
				props.navigation.navigate('Notification');
				setNumber(0);
			}}
		>
			{number > 0 ? (
				<Counter>
					<Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>{number}</Text>
				</Counter>
			) : null}
			<Icon name='bell' size={normalize(16)} color='#fff' />
			<Effect />
		</Container>
	);
};
export default Alert;
