import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Colors from '../Utils/colors';
import AlertHeader from '../Components/Header/Alert';
import Hamburguer from '../Components/Header/Hamburguer';

import DrawerScreen from '../Pages/Drawer';
import AuthLoadingScreen from '../Pages/Auth/Loading';
import SignInScreen from '../Pages/Auth';
import HomeScreen from '../Pages/Home';
import AgendaScreen from '../Pages/Agenda';

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
				title: null,
				animationEnabled: false,
				headerLeft: () => <Hamburguer openDrawer={() => navigation.toggleDrawer()} />
			})
		},
		Agenda: {
			screen: AgendaScreen,
			navigationOptions: () => ({
				title: 'Programação do Evento',
				animationEnabled: false
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
			headerRight: () => <AlertHeader />
		}
	}
);

const DrawerStack = createDrawerNavigator(
	{
		App: AppStack
	},
	{
		initialRouteName: 'App',
		contentComponent: DrawerScreen,
		unmountInactiveRoutes: true
	}
);

export default createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading: AuthLoadingScreen,
			App: DrawerStack,
			Auth: AuthStack
		},
		{
			initialRouteName: 'AuthLoading'
		}
	)
);
