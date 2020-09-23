import React from 'react';
import { StyleSheet, View, Text, ScrollView,TouchableOpacity } from 'react-native';
import Colors from '../../templates/Colors';
import i18n from 'i18n-js';
import { TUTORIAL } from '../../datas/data-tutorial';

const ListItem = props =>{
    
    console.log(props);
    return(
        <TouchableOpacity onPress={()=>{
            props.navigation.navigate({ routeName: 'MoveTutorial',params:{titleId:props.data.id} });
            }}>
        <View>
            <Text>{props.data.title}</Text>
        </View>
        </TouchableOpacity>
    );
};

const AllTutorialScreen = props => {
    console.log(TUTORIAL);
    return (
        <ScrollView>
            <View style={styles.container}>
         
                {TUTORIAL.map(item=> <ListItem data={item} navigation={props.navigation} key={Math.random()}/>)}
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

export default AllTutorialScreen;