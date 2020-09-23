import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image,Dimensions } from 'react-native';
import Colors from '../../templates/Colors';
import i18n from 'i18n-js';
import { TUTORIAL } from '../../datas/data-tutorial';

const TopicContainer = props => {
    return (
        <View style={styles.topicContainer}>
            <Text style={styles.tutorText}>{props.data.desc}</Text>
            <View style={{width:'100%',alignItems:"center"}}>
            <Image source={require('../../assets/tutorial/'+props.data.image)}   style={{width: (props.window.width-100) ,height: (props.data.imageSize.height/props.data.imageSize.width)*(props.window.width-100)}} />
            </View>
        </View>
    );
};

const MoveTutorialScreen = props => {
    const tutorialId = props.navigation.getParam('titleId');
    console.log(tutorialId);

    const tutorialData = TUTORIAL.filter(item => item.id == tutorialId);
    const window = Dimensions.get('window');
    return (
        <ScrollView>
            <View style={styles.container}>
                
            <View>
                <Text style={styles.titleText}>{tutorialData[0].title}</Text>
            </View>
                {tutorialData[0].detail.map(item=> <TopicContainer data={item} window={window}  key={Math.random()}/>)}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:"white",
    },
    topicContainer:{
        paddingVertical: 15,
    },
    tutorImage:{
        height: 300, width: 500, overflow:"visible",

    },
    tutorText:{
        padding: 5,
        backgroundColor: Colors.mainWhite,
        fontSize: 16,
    },
    titleText: {
        fontSize: 16,
        fontWeight: "500",
    }

});

export default MoveTutorialScreen;