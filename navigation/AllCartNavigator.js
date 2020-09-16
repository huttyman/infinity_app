import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CollapseExample from '../screens/CollapseExample';
import CollapseMainExample from '../screens/CollapseMainExample';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../templates/Colors';
import ArmyScreen from '../screens/ArmyScreen';


const AllCartStackNavigator = createStackNavigator({
    Army: {
        screen: ArmyScreen,
        navigationOptions: {
            headerTitle: "Army selection",
            headerStyle: {
                backgroundColor:Colors.mainGrey,
                height: 40,
                borderColor: Colors.mainGrey,
                borderWidth: 0,
                marginBottom: -30,
            },
            headerTitleStyle:{
                color: Colors.mainWhite,
            },
        },
    } ,
    AllCartScreen: {
        screen: CollapseMainExample,
        navigationOptions: {
            headerTitle: "Unit selection",
            headerStyle: {
                backgroundColor:Colors.mainGrey,
                height: 40,
                borderColor: Colors.mainGrey,
                borderWidth: 0,
                marginBottom: -30,
            },
            headerTitleStyle:{
                color: Colors.mainWhite,
            },
            headerTintColor: Colors.mainWhite,
        },
    }
});

const AllCartTabNavigator = createBottomTabNavigator({
    Army: {
        screen: AllCartStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Army',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-archive' size={24} color={tabInfo.tintColor} />
            },
        }
    },
    Carts: {
        screen: CollapseExample, navigationOptions: {
            tabBarLabel: 'Choosen List',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={24} color={tabInfo.tintColor} />
            }
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: '#ffffff',
        activeBackgroundColor: Colors.mainBlack,
        style: { backgroundColor: Colors.mainGrey }
    }
});



export default createAppContainer(AllCartTabNavigator);