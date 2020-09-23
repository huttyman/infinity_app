import React, { useState } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CollapseExample from '../screens/CollapseExample';
import CollapseMainExample from '../screens/CollapseMainExample';
import { createBottomTabNavigator,createMaterialTopTabNavigator, } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../templates/Colors';
import ArmyScreen from '../screens/ArmyScreen';
import SummaryOrderScreen from '../screens/SummaryOrderScreen';
import TeachOrderScreen from '../screens/TeachOrderScreen';
import AllOrderScreen from '../screens/AllOrderScreen';
import TurnOrderScreen from '../screens/TurnOrderScreen';
import TurnOrderScreenTH from '../screens/TurnOrderScreenTH';
import ActionOrderScreen from '../screens/ActionOrderScreen';
import ActionOrderScreenTH from '../screens/ActionOrderScreenTH';
import ExplainStat from '../screens/teaching/ExplainStat';
import MoveTutorialScreen from '../screens/teaching/MoveTutorialScreen'
import AllTutorialScreen from '../screens/teaching/AllTutorialScreen';

const AllCartStackNavigator = createStackNavigator({
    Army: {
        screen: ArmyScreen,
        navigationOptions: {
            headerTitle: "Army selection [CODE ONE] v2.8f",
            headerStyle: {
                backgroundColor: Colors.mainGrey,
                height: 35,
                borderColor: Colors.mainGrey,
                borderWidth: 0,
            },
            headerTitleStyle: {
                color: Colors.mainWhite,
                fontSize:16,
            },
        },
    },
    AllCartScreen: {
        screen: CollapseMainExample,
        navigationOptions: {
            headerTitle: "Unit selection",
            headerStyle: {
                backgroundColor: Colors.mainGrey,
                height: 35,
                borderColor: Colors.mainGrey,
                borderWidth: 0,
            },
            headerTitleStyle: {
                color: Colors.mainWhite,
                fontSize:16,
            },
            headerTintColor: Colors.mainWhite,
        },
    }
});

const OrderSummaryStackNavigator = createStackNavigator({
    All:{
        screen: AllOrderScreen,
        navigationOptions: {
            headerTitle: "Help",
            headerStyle: {
                height: 35,
            },
        },
    },
    AllTutorial: AllTutorialScreen,
    ExplainStat: ExplainStat,
    Order: SummaryOrderScreen,
    MoveTutorial:{
        screen: MoveTutorialScreen,
        navigationOptions: {
            headerTitle: "Tutorial",
            headerStyle: {
                height: 35,
            },
        },
    },
    Teaching:{
        screen: TeachOrderScreen,
        navigationOptions: {
            headerTitle: "Teaching",
            headerStyle: {
                height: 35,
            },
        },
    },
    TurnOrder:{
        screen: TurnOrderScreen,
        navigationOptions: {
            headerTitle: "Turn order",
            headerStyle: {
                height: 35,
            },
        },
    },
    TurnOrderTH:{
        screen: TurnOrderScreenTH,
        navigationOptions: {
            headerTitle: "Turn order",
            headerStyle: {
                height: 35,
            },
        },
    },
    ActionOrderTH:{
        screen: ActionOrderScreenTH,
        navigationOptions: {
            headerTitle: "Action order",
            headerStyle: {
                height: 35,
            },
        },
    },
    ActionOrder:{
        screen: ActionOrderScreen,
        navigationOptions: {
            headerTitle: "Action order",
            headerStyle: {
                height: 35,
            },
        },
    },
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


        },
        
    },
    Order: {
        screen: OrderSummaryStackNavigator, navigationOptions: {
            tabBarLabel: 'All summary',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-book' size={24} color={tabInfo.tintColor} />
            },

        }
    },
}, {
    tabBarOptions: {
        activeTintColor: '#ffffff',
        activeBackgroundColor: Colors.mainBlack,
        style: { backgroundColor: Colors.mainGrey },
        
    },
    

});


export default createAppContainer(AllCartTabNavigator);