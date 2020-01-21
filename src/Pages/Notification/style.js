import styled from 'styled-components/native';
import Colors from '../../Utils/colors';
import { widthPercentageToDP, normalize } from '../../Utils/layout';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${Colors.background};
`;

export const Card = styled.View`
	width: ${widthPercentageToDP(90)}px;
	align-self: center;
	margin-top: 20px;
`;

export const ContainerTime = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 10px;
`;

export const Ball = styled.View`
	width: 20px;
	height: 20px;
	background-color: #fff;
	border-radius: 20px;
	border-color: ${props => (props.color ? props.color : Colors.blue)};
	border-width: 2.5px;
`;

export const TimeText = styled.Text`
	margin-left: 10px;
	color: ${Colors.blue};
	font-size: ${normalize(14)}px;
`;

export const Text = styled.Text`
	margin-left: 30px;
	font-size: ${normalize(15)}px;
	font-weight: bold;
`;
