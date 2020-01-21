import React from 'react';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Button, SlideContainer, ContainerButtons, Title, Text } from './style';
import Colors from '../../Utils/colors';
import { View, Image } from 'react-native';
import { normalize, widthPercentageToDP, heightPercentageToDP } from '../../Utils/layout';

const Home = props => {
	const { navigate } = props.navigation;

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
				{/* <Text>{item.id}</Text> */}
				<Image
					source={{
						uri:
							'https://firebasestorage.googleapis.com/v0/b/seminovosjf-app.appspot.com/o/slides%2Faxt32e_1576328768063.jpeg?alt=media&token=d1f67169-c003-4450-815e-061c5ee7c0a6'
					}}
					style={{ width: widthPercentageToDP(80), height: heightPercentageToDP(15), resizeMode: 'cover', borderRadius: 10 }}
				/>
			</View>
		);
	};

	return (
		<Container>
			<SlideContainer>
				<Carousel
					data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
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
				<Button>
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
					onPress={() => {
						firebase.firestore().sendMessage({
							data: {
								loggedIn: Date.now(),
								uid: firebase.auth().currentUser.uid
							}
						});
					}}
				>
					<View>
						<Title>Contato</Title>
						<Text>Entre em contato com a nossa equipe</Text>
					</View>
					<Icon name='headset' size={normalize(32)} solid color={Colors.blue} style={{ position: 'absolute', right: 0, marginRight: 20 }} />
				</Button>
			</ContainerButtons>
		</Container>
	);
};

export default Home;
