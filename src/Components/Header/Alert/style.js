import styled from 'styled-components';
import Colors from '../../../Utils/colors';

export const Container = styled.View`
	margin-right: 20;
`;

export const Counter = styled.View`
	width: 20;
	height: 20;
	background-color: ${Colors.pink};
	position: absolute;
	border-radius: 10;
	bottom: 12;
	left: 7;
	z-index: 1;
`;
