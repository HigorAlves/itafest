import styled from 'styled-components/native';
import Colors from '../../Utils/colors';
import { widthPercentageToDP, normalize } from '../../Utils/layout';

export const Container = styled.View`
	flex: 1;
	background-color: ${Colors.background};
	align-items: center;
`;

export const SlideContainer = styled.View`
	flex: 0.22;
	background-color: ${Colors.primary};
	width: ${widthPercentageToDP(100)};
	margin-bottom: 40px;
`;

export const ContainerButtons = styled.View`
	flex: 0.5;
	justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
	background-color: #fff;
	width: ${widthPercentageToDP(90)};
	height: 60;
	border-radius: 10;
	align-items: center;
	padding-left: 20;
	flex-direction: row;
`;

export const Title = styled.Text`
	font-size: ${normalize(16)};
	color: ${Colors.darkPurple};
	font-weight: 300;
`;

export const Text = styled.Text`
	font-size: ${normalize(10)};
	font-weight: 300;
	color: ${Colors.darkPurple};
	opacity: 0.8;
`;
