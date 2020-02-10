import styled from 'styled-components/native';
import Colors from '../../Utils/colors';
import { heightPercentageToDP, normalize } from '../../Utils/layout';

export const Container = styled.View`
	flex: 1;
`;

export const ContainerProfile = styled.View`
	height: ${heightPercentageToDP(25)}px;
	background-color: ${Colors.darkPurple};
	justify-content: center;
	align-items: center;
`;

export const LogoutButton = styled.TouchableOpacity`
	position: absolute;
	bottom: 0px;
	background-color: ${Colors.darkPurple};
	padding: 10px;
	width: 100%;
`;

export const ButtonText = styled.Text`
	font-size: ${normalize(16)}px;
	color: white;
	text-align: center;
`;
