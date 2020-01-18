import styled from 'styled-components/native';
import Colors from '../../Utils/colors';
import { widthPercentageToDP, heightPercentageToDP } from '../../Utils/layout';

export const ContainerImage = styled.ImageBackground`
	flex: 1;
`;

export const Container = styled.View`
	background-color: rgba(89, 73, 158, 0.7);
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const LoginWithGoogle = styled.TouchableOpacity`
	background-color: white;
	width: ${widthPercentageToDP(90)}px;
	height: 40px;
	border-radius: 20px;
	justify-content: center;
`;

export const LoginWithFacebook = styled.TouchableOpacity`
	background-color: #3b5998;
	width: ${widthPercentageToDP(90)}px;
	height: 40px;
	border-radius: 20px;
	justify-content: center;
`;

export const LoginWithApple = styled.TouchableOpacity`
	background-color: white;
	width: ${widthPercentageToDP(90)}px;
	height: 40px;
	border-radius: 20px;
	justify-content: center;
`;

export const ButtonContainer = styled.View`
	height: 160px;
	justify-content: space-between;
	position: absolute;
	top: ${heightPercentageToDP(65)}px;
`;
