import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../Utils/colors';
import AlertHeader from '../Components/Header/Alert';

import LoginScreen from '../Pages/Auth';
import HomeScreen from '../Pages/Home';

const AppNavigator = createStackNavigator(
	{
		Login: {
			screen: LoginScreen,
			navigationOptions: ({ navigation }) => ({
				header: null,
				backgroundColor: 'transparent'
			})
		},
		Home: {
			screen: HomeScreen,
			navigationOptions: ({ navigation }) => ({
				headerRight: <AlertHeader/>
			})
		}
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Colors.primary,
				elevation: 0,
				borderBottomWidth: 0
			},
			headerTintColor: '#fff',
			
		}
	}
);

export default createAppContainer(AppNavigator);
