import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import CollapseExample from '../screens/CollapseExample';
import CollapseMainExample from '../screens/CollapseMainExample';

const AllCartNavigator =  createStackNavigator({
    AllCartScreen : CollapseMainExample,
     CartScreen : CollapseExample,
});

const AllCartTabNavigator = '';

export default createAppContainer(AllCartNavigator);