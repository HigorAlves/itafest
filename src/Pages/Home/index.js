import React from 'react';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Button, SlideContainer, ContainerButtons, Title, Text } from './style';
import Colors from '../../Utils/colors';
import { View } from 'react-native';
import { normalize, widthPercentageToDP } from '../../Utils/layout';

const Home = () => {
	const renderItem = ({ item, index }) => {
		return (
			<View style={{ marginTop: 30, height: 100, width: widthPercentageToDP(80), backgroundColor: Colors.blue, borderRadius: 10 }}>
				<Text>{item.id}</Text>
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
				<Button>
					<View>
						<Title>Programação</Title>
						<Text>Confira a programação do carnaval</Text>
					</View>
					<Icon name='mask' size={normalize(32)} solid color={Colors.blue} style={{ position: 'absolute', right: 0, marginRight: 20 }} />
				</Button>
				<Button>
					<View>
						<Title>Bloquinhos</Title>
						<Text>Saiba tudo sobre os blocos</Text>
					</View>
					<Icon name='fire' size={normalize(32)} solid color={Colors.blue} style={{ position: 'absolute', right: 0, marginRight: 20 }} />
				</Button>
				<Button>
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
				<Button>
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