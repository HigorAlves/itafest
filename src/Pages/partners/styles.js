import styled from 'styled-components/native';
import { widthPercentageToDP, normalize } from '../../Utils/layout';
import Colors from '../../Utils/colors';

export const Container = styled.ScrollView`
	padding-top: 20px;
`;

export const Card = styled.View`
	align-self: center;
	width: ${widthPercentageToDP(90)}px;
	background-color: #fff;
	border-radius: 10px;
`;

export const Name = styled.Text`
	font-size: ${normalize(20)}px;
	font-weight: bold;
	color: ${Colors.darkPurple};
	padding-left: 10px;
	padding-top: 10px;
`;

export const CarName = styled.Text`
	font-size: ${normalize(13)}px;
	padding-left: 10px;
	padding-top: 6px;
`;

export const CallButton = styled.TouchableOpacity`
	width: ${widthPercentageToDP(45)}px;
	height: 30px;
	margin-top: 10px;
	background-color: ${Colors.darkPurple};
	border-bottom-left-radius: 10px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const WhatsappButton = styled.TouchableOpacity`
	width: ${widthPercentageToDP(45)}px;
	height: 30px;
	margin-top: 10px;
	background-color: ${Colors.green};
	border-bottom-right-radius: 10px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const ButtonText = styled.Text`
	color: #fff;
	font-weight: bold;
	text-align: center;
	font-size: ${normalize(14)}px;
	margin-left: 10px;
`;
