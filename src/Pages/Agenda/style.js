import styled from 'styled-components/native';
import { heightPercentageToDP, normalize, widthPercentageToDP } from '../../Utils/layout';
import Colors from '../../Utils/colors';

export const Line = styled.View`
	position: absolute;
	height: 100%;
	border-color: ${Colors.darkPurple};
	border-left-width: 0.5px;
	margin-left: 10%;
`;

export const LineContainer = styled.ScrollView`
	margin-left: 6.5%;
`;

export const ContainerCard = styled.View`
	flex-direction: column;
	margin-top: 20px;
`;

export const Circle = styled.View`
	background-color: white;
	height: 30px;
	width: 30px;
	border-radius: 30px;
	border-color: ${props => (props.color ? props.color : Colors.blue)};
	border-width: 4px;
	padding-left: 20px;
`;

export const Hour = styled.Text`
	margin-left: 10px;
	color: ${Colors.blue};
	font-size: ${normalize(15)}px;
	font-weight: 700;
	margin-top: 3px;
`;

export const Card = styled.View`
	flex-direction: row;
	justify-content: space-between;
	background-color: white;
	width: ${widthPercentageToDP(76)}px;
	height: ${heightPercentageToDP(10)}px;
	margin-left: 10%;
	margin-top: 10px;
	border-radius: 6px;
`;

export const CardTitle = styled.Text`
	color: ${Colors.darkPurple};
	font-size: ${normalize(18)}px;
	font-weight: bold;
`;

export const CardTitleContainer = styled.View`
	margin: 10px 0 10px 10px;
	justify-content: space-between;
`;

export const CardButton = styled.TouchableOpacity`
	background-color: ${Colors.green};
	height: ${heightPercentageToDP(12)}px;
	width: 10%;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
	justify-content: center;
	align-items: center;
`;

export const TextButton = styled.Text`
	transform: rotate(270deg);
	color: #fff;
	font-size: ${normalize(16)}px;
`;

export const Picker = styled.Picker`
	width: ${widthPercentageToDP(76)}px;
	border-radius: 6px;
	padding: 0;
	color: ${Colors.pink};
	font-weight: bold;
	font-size: ${normalize(18)}px;
`;

export const ContainerPicker = styled.View`
	flex-direction: row;
	margin-top: 20px;
	align-items: center;
`;
