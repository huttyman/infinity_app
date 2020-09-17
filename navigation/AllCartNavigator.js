import React, { useState } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CollapseExample from '../screens/CollapseExample';
import CollapseMainExample from '../screens/CollapseMainExample';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../templates/Colors';
import ArmyScreen from '../screens/ArmyScreen';
import CollapseExampleTestTemplate from '../screens/CollapseExampleTestTemplate';
import SummaryOrderScreen from '../screens/SummaryOrderScreen';
import TeachOrderScreen from '../screens/TeachOrderScreen';
import AllOrderScreen from '../screens/AllOrderScreen';

const AllCartStackNavigator = createStackNavigator({
    Army: {
        screen: ArmyScreen,
        navigationOptions: {
            headerTitle: "Army selection",
            headerStyle: {
                backgroundColor: Colors.mainGrey,
                height: 40,
                borderColor: Colors.mainGrey,
                borderWidth: 0,
                marginBottom: -30,
            },
            headerTitleStyle: {
                color: Colors.mainWhite,
            },
        },
    },
    AllCartScreen: {
        screen: CollapseMainExample,
        navigationOptions: {
            headerTitle: "Unit selection",
            headerStyle: {
                backgroundColor: Colors.mainGrey,
                height: 40,
                borderColor: Colors.mainGrey,
                borderWidth: 0,
                marginBottom: -30,
            },
            headerTitleStyle: {
                color: Colors.mainWhite,
            },
            headerTintColor: Colors.mainWhite,
        },
    }
});

const OrderSummaryStackNavigator = createStackNavigator({
    All: AllOrderScreen,
    Order: SummaryOrderScreen,
    Teaching: TeachOrderScreen,
});

const AllCartTabNavigator = createBottomTabNavigator({
    
    Army: {
        screen: AllCartStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Army',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-archive' size={24} color={tabInfo.tintColor} />
            },
            tabBarOnPress: ({defaultHandler,navigation}) => {
                navigation.setParams({name:'test'});
                defaultHandler();
            },
        },

    },
    Carts: {
        screen: CollapseExample, navigationOptions: {
            tabBarLabel: 'Choosen List',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={24} color={tabInfo.tintColor} />
            },
            tabBarOnPress: ({defaultHandler,navigation}) => {
                navigation.setParams({name:'test'});
                defaultHandler();
            },

        }
    },
    Order: OrderSummaryStackNavigator,
}, {
    tabBarOptions: {
        activeTintColor: '#ffffff',
        activeBackgroundColor: Colors.mainBlack,
        style: { backgroundColor: Colors.mainGrey }
    }
});


export default createAppContainer(AllCartTabNavigator);