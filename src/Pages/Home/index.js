import React from 'react';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Button, SlideContainer, ContainerButtons, Title, Text } from './style';
import Colors from '../../Utils/colors';
import { View, Image, Linking } from 'react-native';
import { normalize, widthPercentageToDP, heightPercentageToDP } from '../../Utils/layout';

const Home = props => {
	const { navigate } = props.navigation;

	const slides = [
		{
			id: 'studiomvp',
			image: require('../../Images/slides/slide_studiomvp.jpg')
		},
		{
			id: '360brave',
			image: require('../../Images/slides/slide_360brave.jpg')
		}
	];

	const renderItem = ({ item, index }) => {
		return (
			<View
				style={{
					marginTop: 30,
					height: heightPercentageToDP(15),
					width: widthPercentageToDP(80),
					backgroundColor: Colors.blue,
					borderRadius: 10
				}}
			>
				<Image
					source={item.image}
					style={{ width: widthPercentageToDP(80), height: heightPercentageToDP(15), resizeMode: 'cover', borderRadius: 10 }}
				/>
			</View>
		);
	};

	return (
		<Container>
			<SlideContainer>
				<Carousel
					data={slides}
					renderItem={renderItem}
					loop
					autoplay
					sliderWidth={widthPercentageToDP(100)}
					itemWidth={widthPercentageToDP(80)}
				/>
			</SlideContainer>
			<ContainerButtons>
				<Button onPress={() => navigate('Agenda')}>
					<View>
						<Title>Programação</Title>
						<Text>Confira a programação do carnaval</Text>
					</View>
					<Icon name='mask' size={normalize(32)} solid color={Colors.blue} style={{ position: 'absolute', right: 0, marginRight: 20 }} />
				</Button>
				<Button onPress={() => navigate('Blocos')}>
					<View>
						<Title>Bloquinhos</Title>
						<Text>Saiba tudo sobre os blocos</Text>
					</View>
					<Icon name='fire' size={normalize(32)} solid color={Colors.blue} style={{ position: 'absolute', right: 0, marginRight: 20 }} />
				</Button>
				<Button onPress={() => navigate('Taxistas')}>
					<View>
						<Title>Taxistas</Title>
						<Text>Ande com segurança</Text>
					</View>
					<Icon name='taxi' size={normalize(32)} solid color={Colors.blue} style={{ position: 'absolute', right: 0, marginRight: 20 }} />
				</Button>
				<Button onPress={() => navigate('Partners')}>
					<View>
						<Title>Parceiros</Title>
						<Text>Conheça nossos apoiadores</Text>
					</View>
					<Icon
						name='hand-holding-heart'
						size={normalize(32)}
						solid
						color={Colors.blue}
						style={{ position: 'absolute', right: 0, marginRight: 20 }}
					/>
				</Button>
				<Button
					onPress={() =>
						Linking.openURL(
							`whatsapp://send?phone=${5537991100270}&text=Oi, tudo bem? Gostaria de saber sobre a parceria! Entrei em contato via aplicativo ItaFest`
						)
					}
				>
					<View>
						<Title>Contato</Title>
						<Text>Deseja ser um parceiro? Entre em contato</Text>
					</View>
					<Icon name='headset' size={normalize(32)} solid color={Colors.blue} style={{ position: 'absolute', right: 0, marginRight: 20 }} />
				</Button>
			</ContainerButtons>
		</Container>
	);
};

export default Home;
