import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import  Colors  from '../templates/Colors';


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

const ActionOrderScreen = props => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerText}>
                    <Text style={{textDecorationLine:"underline"}}><Bold>Action Order</Bold></Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View>
                        <View style={styles.headerText}>
                            <Text><Bold>Attacker</Bold></Text>
                        </View>
                        <View>
                            <Text style={{paddingLeft:15,paddingBottom:5}}><RedText>*cannot attack camouflaged unit (must discover first)</RedText></Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>1.</Text>
                            <Text style={styles.bodyTextDesc}>Check Range/cover</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>2.</Text>
                            <Text style={styles.bodyTextDesc}>Roll dice with stat (bs/cc) +/- modifier (max-12)</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>3.</Text>
                            <Text style={styles.bodyTextDesc}>If attacked back and they had more success</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>-</Text>
                            <Text style={styles.bodyTextDesc}>Roll ARM for defense</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.headerText}>
                            <Text><Bold>Attacked target</Bold></Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>1.</Text>
                            <Text style={styles.bodyTextDesc}>Declare ARO if possible (attack/dodge/etc.)</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>2.</Text>
                            <Text style={styles.bodyTextDesc}>Check Range/cover/defense skill</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>3.</Text>
                            <Text style={styles.bodyTextDesc}>Roll dice with stat (bs/cc/ph) +/- modifier (max-12)</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>4.</Text>
                            <Text style={styles.bodyTextDesc}>If Attacker had more success</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>-</Text>
                            <Text style={styles.bodyTextDesc}>Roll ARM for defense</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>

        
    );

}

const styles = StyleSheet.create({
    headerText: {
        paddingHorizontal: 15,
        paddingVertical:5
    },
    bodyContainer: {
        paddingHorizontal: 5,
    },
    bodyLine: {
        flexDirection: "row",
        paddingBottom: 5,
    },
    bodyTextTopic: {
        width: 25,
        textAlign: "center",
        fontWeight: "bold",
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
export default ActionOrderScreen;