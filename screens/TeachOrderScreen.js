import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../templates/Colors';
import SummaryOrderScreen from './SummaryOrderScreen';

const TeachOrderScreen = props => {
    const [toggleFirstCard, setToggleFirstCard] = useState(false);
    const [toggleSecondCard, setToggleSecondCard] = useState(false);


    let firstCard = <View></View>;
    if (toggleFirstCard) {
        firstCard = <View style={styles.disableCard}>
        </View>;
    }
    let secondCard = <View></View>;
    if (toggleSecondCard) {
        secondCard = <View style={styles.disableCard}>
        </View>;
    }

    return (
        <ScrollView>

            <View style={{ justifyContent: "space-around", flexDirection: "row",padding:5 }}>
                <TouchableOpacity  onPress={()=>props.navigation.navigate({ routeName: 'TurnOrder' })}>
                    <Text style={{textDecorationLine:"underline"}}>Turn Order</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>props.navigation.navigate({ routeName: 'ActionOrder' })}>
                    <Text style={{textDecorationLine:"underline"}}>Attack order</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ width: '100%', backgroundColor: 'white',paddingTop:5 }}>
                    <Text style={{ width: '100%', textAlign: "center", padding: 5, backgroundColor: 'white' }}><Text style={{ color: "red" }}>1 Order</Text> = Choose both action in any order</Text>
                </View>
                <View style={styles.cardContainer}>
                    <TouchableOpacity onPress={() => { setToggleFirstCard(!toggleFirstCard) }}>

                        <View style={[styles.card, { backgroundColor: Colors.shortMovement }]}>
                            <Text style={[styles.cardText, { paddingTop: 20 }]}>Move/Idle/
            Discovery</Text>
                            <Text style={[styles.cardText, { fontWeight: "bold" }]}>Short Movement</Text>
                        </View>
                        {firstCard}


                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setToggleSecondCard(!toggleSecondCard) }}>
                        <View style={styles.card}>
                            <View style={[styles.bottomTopBox, { backgroundColor: Colors.shortMovement }]}>

                                <Text style={[styles.cardText, { paddingTop: 3 }]}>Move/Idle/
                                Discovery</Text>
                                <Text style={[styles.cardText, { fontWeight: "bold" }]}>Short Movement</Text>
                            </View>
                            <View style={styles.middleBox}>
                                <Text style={styles.cardText}>or</Text>
                            </View>
                            <View style={[styles.bottomTopBox, { backgroundColor: Colors.shortSkill }]}>
                                <Text style={[styles.cardText, { paddingTop: 12 }]}>Attack/Hack/
                                                        Heal/etc.</Text>
                                <Text style={[styles.cardText, { fontWeight: "bold" }]}>Short Skills</Text>
                            </View>
                        </View>

                        {secondCard}
                    </TouchableOpacity>
                </View>
                <View>
                    <SummaryOrderScreen />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        width: '100%',
        backgroundColor: 'white',

    },
    card: {
        height: '150px',
        width: '130px',
        margin: 10,
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,

        borderColor: Colors.mainWhite,
        borderWidth: 3,

    },


    disableCard: {
        height: '150px',
        width: '130px',
        margin: 10,
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
        backgroundColor: 'black',
        opacity: 0.8,
        marginTop: -160,

    },
    cardText: {
        width: '100%',
        padding: "auto",
        textAlign: "center",
    },
    middleBox: {
        backgroundColor: 'white',
        width: '40%',
        height: '15%',
        zIndex: 1,
        marginVertical: -11,
    },
    bottomTopBox: {
        height: '50%',
        zIndex: 0,
        width: "100%"
    },
});

export default TeachOrderScreen;