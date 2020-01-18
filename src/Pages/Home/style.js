import styled from 'styled-components/native';
import Colors from '../../Utils/colors';
import { widthPercentageToDP, normalize, heightPercentageToDP } from '../../Utils/layout';

export const Container = styled.View`
	flex: 1;
	background-color: ${Colors.background};
	align-items: center;
`;

export const SlideContainer = styled.View`
	height: ${heightPercentageToDP(24)}px;
	background-color: ${Colors.primary};
	width: ${widthPercentageToDP(100)}px;
	margin-bottom: 40px;
`;

export const ContainerButtons = styled.View`
	height: ${heightPercentageToDP(50)}px;
	justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
	background-color: #fff;
	width: ${widthPercentageToDP(90)}px;
	height: 60px;
	border-radius: 10px;
	align-items: center;
	padding-left: 20px;
	flex-direction: row;
`;

export const Title = styled.Text`
	font-size: ${normalize(16)}px;
	color: ${Colors.darkPurple};
	font-weight: 300;
`;

export const Text = styled.Text`
	font-size: ${normalize(10)}px;
	font-weight: 300;
	color: ${Colors.darkPurple};
	opacity: 0.8;
`;
