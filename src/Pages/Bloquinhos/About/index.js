import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, AboutTitle, AboutText, SocialContainer, SellButton } from './style';
import { widthPercentageToDP, heightPercentageToDP, normalize } from '../../../Utils/layout';
import DataMalDormidos from '../../data/blocos/maldormidos';
import DataBalacoBaku from '../../data/blocos/balacobaku';
import DataSoANata from '../../data/blocos/soanata';
import DataSuvaco from '../../data/blocos/suvacodecobra';
import DataCleo from '../../data/blocos/blocodocleo';
class AboutBloquinhos extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('name', 'NO-ID')
		};
	};

	state = {
		bloco: {}
	};

	componentDidMount() {
		const bloco = this.props.navigation.getParam('bloco', 'none');

		switch (bloco) {
			case 'maldormidos':
				this.setState({ bloco: DataMalDormidos });
				break;
			case 'balacobaku':
				this.setState({ bloco: DataBalacoBaku });
				break;
			case 'soanata':
				this.setState({ bloco: DataSoANata });
				break;
			case 'suvacodecobra':
				this.setState({ bloco: DataSuvaco });
				break;
			case 'blocodocleo':
				this.setState({ bloco: DataCleo });
				break;

			default:
				break;
		}
	}

	renderItem = ({ item, index }) => {
		return (
			<View
				style={{
					height: heightPercentageToDP(25),
					width: widthPercentageToDP(100),
					backgroundColor: '#59499E'
				}}
			>
				<Image source={item.image} style={{ width: widthPercentageToDP(100), height: heightPercentageToDP(25), resizeMode: 'cover' }} />
			</View>
		);
	};

	render() {
		return (
			<>
				<Container>
					<View>
						<Carousel
							data={this.state.bloco.slides}
							renderItem={this.renderItem}
							loop
							autoplay
							sliderWidth={widthPercentageToDP(100)}
							itemWidth={widthPercentageToDP(100)}
							style={{ height: heightPercentageToDP(25) }}
						/>
					</View>
					<View style={{ backgroundColor: '#fff', padding: 10 }}>
						<AboutTitle>Sobre</AboutTitle>
						<AboutText>{this.state.bloco.about}</AboutText>
					</View>

					<View style={{ backgroundColor: '#fff', padding: 10, marginTop: 20 }}>
						<AboutTitle style={{ marginBottom: 10 }}>A Festa</AboutTitle>
						<AboutText style={{ fontWeight: 'bold' }}>Bebidas</AboutText>
						<AboutText>{this.state.bloco?.drinks}</AboutText>
						<AboutText style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Comidas</AboutText>
						<AboutText>{this.state.bloco?.food}</AboutText>
						<AboutText style={{ fontWeight: 'bold', marginTop: 40, textAlign: 'center', marginBottom: 10 }}>
							PROIBIDA A ENTRADA DE MENORES DE IDADE
						</AboutText>
					</View>

					<SocialContainer>
						<TouchableOpacity onPress={() => Linking.openURL(this.state.bloco.facebook)}>
							<Icon name='facebook-f' solid color='#59499E' size={normalize(30)} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => Linking.openURL(this.state.bloco.ig)}>
							<Icon name='instagram' solid color='#59499E' size={normalize(30)} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => Linking.openURL(`whatsapp://send?phone=${this.state.bloco.phone}&text=Contato via ItaFest`)}>
							<Icon name='whatsapp' solid color='#59499E' size={normalize(30)} />
						</TouchableOpacity>
					</SocialContainer>
				</Container>
				<SellButton onPress={() => Linking.openURL(`whatsapp://send?phone=${this.state.bloco.phone}&text=Contato via ItaFest`)}>
					<Text style={{ fontSize: normalize(16), color: 'white', textAlign: 'center' }}>Ingressos a venda</Text>
				</SellButton>
			</>
		);
	}
}

export default AboutBloquinhos;
