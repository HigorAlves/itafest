import React, { useEffect } from 'react';
import Login from './src/Routes';
import OneSignal from 'react-native-onesignal';

const App = () => {
	const onReceived = notification => {
		console.log('Notification received: ', notification);
	};

	useEffect(() => {
		OneSignal.init('a6f59299-b61c-4199-941f-216b4cd1c1d3');
		OneSignal.addEventListener('received', onReceived);
		console.log('asdf');
	}, []);

	return <Login />;
};

export default App;
