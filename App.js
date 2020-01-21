import React, { useEffect } from 'react';
import Routes from './src/Routes';
import PushNotification from 'react-native-push-notification';

const App = () => {
	useEffect(() => {
		PushNotification.configure({
			onNotification: function(notification) {
				console.log('NOTIFICATION:', notification);
			}
		});
	}, []);

	return <Routes />;
};

export default App;
