import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import Colors from '../../templates/Colors';
import i18n from 'i18n-js';
import { TUTORIAL } from '../../datas/data-tutorial';

const TopicContainer = props => {
    console.log(props);
    return (
        <View style={styles.topicContainer}>
            <Text>{props.data.desc}</Text>
            <View style={{width:'100%',alignItems:"center"}}>
            <Image source={require('../../assets/tutorial/'+props.data.image)}   style={{width: 300 ,height: (props.data.imageSize.height/props.data.imageSize.width)*300}} />
            </View>
        </View>
    );
};

const MoveTutorialScreen = props => {
    const tutorialData = TUTORIAL.filter(item => item.id == "move");
    return (
        <ScrollView>
            <View style={styles.container}>
                {tutorialData[0].detail.map(item=> <TopicContainer data={item}  key={Math.random()}/>)}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    topicContainer:{
        paddingVertical: 10,
    },
    tutorImage:{
        height: 300, width: 500, overflow:"visible",

    }

});

export default MoveTutorialScreen;