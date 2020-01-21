import styled from 'styled-components/native';
import Colors from '../../../Utils/colors';
import { normalize, widthPercentageToDP } from '../../../Utils/layout';

export const Container = styled.SafeAreaView``;

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

export const ContactContainer = styled.View`
	width: ${widthPercentageToDP(90)}px;
	background-color: #fff;
	align-self: center;
	margin-top: 20px;
	border-radius: 10px;
`;

export const ContactTitle = styled.Text`
	color: ${Colors.green};
	font-size: ${normalize(16)}px;
	margin-left: 20px;
`;

export const ContactText = styled.Text`
	color: ${Colors.darkPurple};
	margin-bottom: 10px;
	margin-top: 8px;
	margin-left: 20px;
`;

export const Divider = styled.View`
	border-bottom-width: 0.3px;
	border-bottom-color: gray;
	margin-top: 4px;
	margin-bottom: 4px;
`;

export const DividerSocial = styled.View`
	margin-top: 4px;
	margin-bottom: 4px;
`;
