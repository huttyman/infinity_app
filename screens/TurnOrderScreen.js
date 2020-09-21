import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import Colors from '../templates/Colors';
import i18n from 'i18n-js';


const RedText = props =>{
    return(
    <Text style={{color:'red'}} >{props.children}</Text>
    );
};
const Bold = props =>{
    return(
    <Text style={{fontWeight:"bold"}} >{props.children}</Text>
    );
};

const TurnOrderScreen = props => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerText}>
                    <Text style={{textDecorationLine:"underline"}}><Bold>Turn Order</Bold></Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.bodyTextTopic}>1.</Text>
                            <Text style={styles.bodyTextDesc}>Count all  <RedText>Order</RedText> in field.</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.bodyTextTopic}>2.</Text>
                            <Text style={styles.bodyTextDesc}>Pick which unit to <RedText>assign Order</RedText> (can be same unit as last order).</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>2.1</Text>
                            <Text style={styles.bodyTextDesc}>Declare <Bold>first action</Bold> (i.e. if move, measure after declare and put miniature there. If attack, tell them attack who).</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>2.2</Text>
                            <Text style={styles.bodyTextDesc}><RedText>Ask opponent for ARO</RedText> (only unit that can see us. If they pass those unit cannot use ARO this round).</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>2.3</Text>
                            <Text style={styles.bodyTextDesc}>Declare <Bold>second action.</Bold></Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>2.4</Text>
                            <Text style={styles.bodyTextDesc}><RedText>Ask opponent for ARO</RedText> (only unit that just saw us this round and not see us in first action).</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>2.5</Text>
                            <Text style={styles.bodyTextDesc}><Bold>Resolve</Bold> – <RedText>Roll dice</RedText> both first and second action here (measure gun range and apply mod in this step).</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.bodyTextTopic}>3.</Text>
                            <Text style={styles.bodyTextDesc}>Go back to do number 2 until run out of Order (optional for <RedText>lieutenant order</RedText>).</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.bodyTextTopic}>4.</Text>
                            <Text style={styles.bodyTextDesc}><Bold>End turn</Bold> (Check end of mission if game end yet)</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    headerText: {
        padding: 15,
    },
    bodyContainer: {
        paddingHorizontal: 5,
    },
    bodyLine: {
        flexDirection: "row",
        paddingBottom: 5,
    },
    bodyTextTopic: {
        width: 35,
        textAlign: "center",
        fontWeight: "bold",
        paddingRight:0,
    },
    bodyTextDesc: {
        flex: 8,
    },
    indent: {
        paddingLeft: 20
    },
    container: {
        backgroundColor: 'white',
        height:screen.height,
        
    },

});

export default TurnOrderScreen;