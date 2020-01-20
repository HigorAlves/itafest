import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Effect, Counter } from './style';
import { normalize } from '../../../Utils/layout';
import { Text } from 'react-native';

const Alert = props => {
	return (
		<Container onPress={() => props.navigation.navigate('Notification')}>
			<Counter>
				<Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>4</Text>
			</Counter>
			<Icon name='bell' size={normalize(16)} color='#fff' />
			<Effect />
		</Container>
	);
};
export default Alert;
