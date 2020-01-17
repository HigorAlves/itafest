import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

function normalize(size) {
	const newSize = size * scale;

	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	}

	return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

const widthPercentageToDP = widthPercent => {
	const screenWidth = Dimensions.get('window').width;
	return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
	const screenHeight = Dimensions.get('window').height;
	return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
};

export { normalize, widthPercentageToDP, heightPercentageToDP };
