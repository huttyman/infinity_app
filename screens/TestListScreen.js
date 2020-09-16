import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


const TestListScreen = props => {
    const [tempList, setTempList] = useState('');

    

    return(
        <View><Text>Test{tempList}</Text></View>
    );
};
const addTempListHandler = input =>{
    setTempList(input);
};

export default TestListScreen;