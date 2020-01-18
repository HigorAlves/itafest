import styled from 'styled-components/native';
import Colors from '../../../Utils/colors';

export const Container = styled.TouchableOpacity`
	margin-right: 20px;
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
