import styled from 'styled-components/native';
import Colors from '../../Utils/colors';
import { widthPercentageToDP, heightPercentageToDP, normalize } from '../../Utils/layout';

export const Container = styled.ScrollView`
	background-color: ${Colors.background};
	padding-top: 20px;
`;

export const Card = styled.TouchableOpacity`
	width: ${widthPercentageToDP(86)}px;
	background-color: #fff;
	height: ${heightPercentageToDP(12)}px;
	align-self: center;
	border-radius: 10px;
	flex-direction: row;
	align-items: center;
	padding: 0 0 0 10px;
`;

export const CardLogo = styled.Image`
	width: 60px;
	height: ${heightPercentageToDP(9)}px;
`;

export const Title = styled.Text`
	color: ${Colors.blue};
	font-size: ${normalize(18)}px;
	font-weight: bold;
`;

export const SubTitle = styled.Text`
	color: ${Colors.darkPurple};
	margin-top: 8px;
`;
