import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Colors from '../Utils/colors';
import AlertHeader from '../Components/Header/Alert';
import AlertHeaderSelect from '../Components/Header/Alert/selectd';
import Hamburguer from '../Components/Header/Hamburguer';

import DrawerScreen from '../Pages/Drawer';
import NotificationScreen from '../Pages/Notification';
import AuthLoadingScreen from '../Pages/Auth/Loading';
import SignInScreen from '../Pages/Auth';
import HomeScreen from '../Pages/Home';
import AgendaScreen from '../Pages/Agenda';
import BloquinhosScreen from '../Pages/Bloquinhos';

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
				headerLeft: () => <Hamburguer openDrawer={() => navigation.toggleDrawer()} />,
				headerRight: () => <AlertHeader navigation={navigation} />
			})
		},
		Agenda: {
			screen: AgendaScreen,
			navigationOptions: ({ navigation }) => ({
				title: 'Programação do Evento',
				animationEnabled: false,
				headerRight: () => <AlertHeader navigation={navigation} />
			})
		},
		Notification: {
			screen: NotificationScreen,
			navigationOptions: ({ navigation }) => ({
				title: 'Notificações',
				animationEnabled: false,
				headerRight: () => <AlertHeaderSelect />
			})
		},
		Blocos: {
			screen: BloquinhosScreen,
			navigationOptions: ({ navigation }) => ({
				title: 'Blocos',
				animationEnabled: false,
				headerRight: () => <AlertHeader navigation={navigation} />
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
