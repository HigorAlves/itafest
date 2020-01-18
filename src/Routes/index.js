import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../Utils/colors';
import AlertHeader from '../Components/Header/Alert';

import AuthLoadingScreen from '../Pages/Auth/Loading';
import SignInScreen from '../Pages/Auth';
import HomeScreen from '../Pages/Home';

const AuthStack = createStackNavigator({
	SignIn: {
		screen: SignInScreen,
		navigationOptions: ({ navigation }) => ({
			backgroundColor: 'transparent',
			headerShown: false
		})
	}
});

const AppStack = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: ({ navigation }) => ({
				headerRight: <AlertHeader />
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
			headerTintColor: '#fff'
		}
	}
);

export default createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading: AuthLoadingScreen,
			App: AppStack,
			Auth: AuthStack
		},
		{
			initialRouteName: 'AuthLoading'
		}
	)
);
