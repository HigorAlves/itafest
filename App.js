import React, { useEffect } from 'react';
import Login from './src/Routes';
import PushNotification from 'react-native-push-notification';

const App = () => {
	useEffect(() => {
		PushNotification.configure({
			onNotification: function(notification) {
				console.log('NOTIFICATION:', notification);
			}
		});
	}, []);

	return <Login />;
};

export default App;
