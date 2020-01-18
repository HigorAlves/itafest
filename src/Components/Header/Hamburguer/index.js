import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';

const Hamburguer = props => (
	<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => props.openDrawer()}>
		<Svg width={31.5} height={15.5} viewBox='0 0 31.5 15.5'>
			<G fill='none' stroke='#fff' strokeLinecap='round' strokeWidth={1.5}>
				<Path data-name='Line 1' d='M.75.75h17' />
				<Path data-name='Line 2' d='M.75 7.75h30' />
				<Path data-name='Line 3' d='M13.75 14.75h17' />
			</G>
		</Svg>
	</TouchableOpacity>
);
export default Hamburguer;
