import styled from 'styled-components/native';
import Colors from '../../../Utils/colors';

export const Container = styled.TouchableOpacity`
	margin-right: 20px;
`;

export const Effect = styled.View`
	position: absolute;
	width: 40px;
	height: 40px;
	background-color: ${Colors.background};
	top: 27px;
	border-radius: 6px;
	transform: rotate(45deg);
	right: -12px;
`;

export const Counter = styled.View`
	width: 20px;
	height: 20px;
	background-color: ${Colors.pink};
	position: absolute;
	border-radius: 10px;
	bottom: 12px;
	left: 7px;
	z-index: 1;
`;
