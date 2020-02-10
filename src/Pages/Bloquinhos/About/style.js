import styled from 'styled-components/native';
import Colors from '../../../Utils/colors';
import { normalize, widthPercentageToDP } from '../../../Utils/layout';

export const Container = styled.ScrollView`
	flex: 1;
	margin-bottom: 70px;
`;

export const AboutTitle = styled.Text`
	color: ${Colors.green};
	font-size: ${normalize(20)}px;
	padding-left: 20px;
`;

export const AboutText = styled.Text`
	color: ${Colors.darkPurple};
	padding-left: 20px;
	padding-right: 20px;
	font-size: ${normalize(13)}px;
`;

export const SocialContainer = styled.View`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
	margin-top: 30px;
`;

export const SellButton = styled.TouchableOpacity`
	width: 100%;
	height: 60px;
	background-color: ${Colors.darkPurple};
	justify-content: center;
	position: absolute;
	bottom: 0;
`;
