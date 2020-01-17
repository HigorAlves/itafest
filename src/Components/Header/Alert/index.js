import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Counter } from './style';
import { normalize } from '../../../Utils/layout';
import { Text } from 'react-native';

const Alert = () => {
	return (
		<Container>
			<Counter>
				<Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>4</Text>
			</Counter>
			<Icon name='bell' size={normalize(16)} color='#fff' />
		</Container>
	);
};
export default Alert;
