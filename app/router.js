import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import {StackNavigator, createStackNavigator, createBottomTabNavigator, withNavigation} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Bookcase from './screens/Bookcase';
import Explore from './screens/Explore';
import AddBook from './screens/AddBook';
import Lists from './screens//Lists';
import Profile from './screens/Profile';
import Welcome from './screens/Welcome';

import Home from './screens/home';

let screen = Dimensions.get('window');

const ProfileS = createStackNavigator(
    {
        Profile: Profile,  
    },
    {
      initialRouteName: 'Profile',
      defaultNavigationOptions: {
        headerStyle: {
        //   backgroundColor: '#25a0f5',
        },
        // headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  )
export const Tabs = createBottomTabNavigator({
    'Explore': {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({tintColor}) => <Icon name="ios-map" type="ionicon" size={28} color={tintColor}/>
        },
    },
    'Lists': {
        screen: Lists,
        navigationOptions: {
            tabBarLabel: 'Lists',
            tabBarIcon: ({tintColor}) => <Icon name="list" type="entypo" size={28} color={tintColor}/>
        },
    },
    'My Profile': {
        screen: ProfileS,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="ios-person" type="ionicon" size={28} color={tintColor}/>
        },

    },
    'Bookcase': {
        screen: Bookcase,
        navigationOptions: {
            tabBarLabel: 'Bookcase',
            tabBarIcon: ({tintColor}) => <Icon name="open-book" type="entypo" size={28} color={tintColor}/>
        },
    },
    'Add Book': {
        screen: AddBook,
        navigationOptions: {
            tabBarLabel: 'Add Book',
            tabBarIcon: ({tintColor}) => <Icon name="ios-add-circle-outline" type="ionicon" size={28}
                                               color={tintColor}/>
        },
    },
});

export const BookcaseStack = createStackNavigator({
    Bookcase: {
        screen: Bookcase,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    Explore: {
        screen: Explore,
        navigationOptions: ({navigation}) => ({
            header: null,
            tabBarVisible: false,
            gesturesEnabled: false
        }),
    },
});

export const createRootNavigator = createStackNavigator(
    {
        Welcome: {
            screen: Welcome,
        },
        Home: {
            screen: Home,
        },
        
        Profile: {
            screen: Profile,
        },
        Tabs: {
            screen: Tabs,
            navigationOptions: ({navigation}) => ({
                gesturesEnabled: false,
            })
        },
        BookcaseStack: {
            screen: BookcaseStack,
            navigationOptions: ({navigation}) => ({
                gesturesEnabled: false,
            })
        }

    },
    {
        mode: "modal",
        headerMode: "none",
        initialRouteName: 'Tabs',
    }
);