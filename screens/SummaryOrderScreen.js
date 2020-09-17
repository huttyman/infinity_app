import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import  Colors  from '../templates/Colors';

const SummaryOrderScreen = props => {
    return (
        <ScrollView>
            <View style={styles.bodyContainer}>
                {/*ARO*/}
                <View style={styles.topicContainer}>
                    <View style={[styles.mainHeader, { backgroundColor: Colors.aro }]}>
                        <Text style={styles.headerText}>AROS</Text>
                    </View>
                    <View style={[styles.topicHeader, { backgroundColor: Colors.aro }]}>
                        <Text style={styles.headerText}>NAME</Text>
                        <Text style={styles.headerText}>TYPE</Text>
                        <Text style={styles.headerText}>PAGE</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>BS ATTACK</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>43</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>CARBONITE</Text>
                        <Text style={styles.bodyText}>HACKER</Text>
                        <Text style={styles.bodyText}>54</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>CC ATTACK</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>48</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>DISCOVER</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>61</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>DODGE</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>64</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>PLACE DEPLOYABLE</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>66</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>RESET</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>66</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>SPOTLIGHT</Text>
                        <Text style={styles.bodyText}>HACKER</Text>
                        <Text style={styles.bodyText}>54</Text>
                    </View>
                </View>

                {/*Short movement skills*/}
                <View style={styles.topicContainer}>
                    <View style={[styles.mainHeader, { backgroundColor: Colors.shortMovement }]}>
                        <Text style={styles.headerText}>SHORT MOVEMENT SKILLS</Text>
                    </View>
                    <View style={[styles.topicHeader, { backgroundColor: Colors.shortMovement }]}>
                        <Text style={styles.headerText}>NAME</Text>
                        <Text style={styles.headerText}>TYPE</Text>
                        <Text style={styles.headerText}>PAGE</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>DISCOVER</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>61</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>IDLE</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>65</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>MOVE</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>34</Text>
                    </View>
                </View>

                {/*SHORT SKILLS*/}
                <View style={styles.topicContainer}>
                    <View style={[styles.mainHeader, { backgroundColor: Colors.shortSkill }]}>
                        <Text style={styles.headerText}>SHORT SKILLS</Text>
                    </View>
                    <View style={[styles.topicHeader, { backgroundColor: Colors.shortSkill }]}>
                        <Text style={styles.headerText}>NAME</Text>
                        <Text style={styles.headerText}>TYPE</Text>
                        <Text style={styles.headerText}>PAGE</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>BS ATTACK</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>43</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>CARBONITE</Text>
                        <Text style={styles.bodyText}>HACKER</Text>
                        <Text style={styles.bodyText}>54</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>CC ATTACK</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>48</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>DOCTOR</Text>
                        <Text style={styles.bodyText}>SPECIAL S.</Text>
                        <Text style={styles.bodyText}>70</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>DODGE</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>64</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>ENGINEER</Text>
                        <Text style={styles.bodyText}>SPECIAL S.</Text>
                        <Text style={styles.bodyText}>70</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>MEDIKIT</Text>
                        <Text style={styles.bodyText}>EQUIPMENT</Text>
                        <Text style={styles.bodyText}>78</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>PLACE DEPLOYABLE</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>66</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>RESET</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>66</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>SPOTLIGHT</Text>
                        <Text style={styles.bodyText}>HACKER</Text>
                        <Text style={styles.bodyText}>54</Text>
                    </View>

                </View>

                {/*ENTIRE ORDER*/}
                <View style={styles.topicContainer}>
                    <View style={[styles.mainHeader, { backgroundColor: Colors.entireOrder }]}>
                        <Text style={styles.headerText}>ENTIRE ORDER</Text>
                    </View>
                    <View style={[styles.topicHeader, { backgroundColor: Colors.entireOrder }]}>
                        <Text style={styles.headerText}>NAME</Text>
                        <Text style={styles.headerText}>TYPE</Text>
                        <Text style={styles.headerText}>PAGE</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>PARACHUTIST</Text>
                        <Text style={styles.bodyText}>SPECIAL S.</Text>
                        <Text style={styles.bodyText}>74</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>JUMP</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>37</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>COMBAT JUMP</Text>
                        <Text style={styles.bodyText}>SPECIAL S.</Text>
                        <Text style={styles.bodyText}>70</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.bodyText}>CLIMB</Text>
                        <Text style={styles.bodyText}>COMMON S.</Text>
                        <Text style={styles.bodyText}>39</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    topicContainer: {
        alignContent: "center",

    },
    bodyContainer: {
        alignContent: "center",
        marginBottom: 10,
        backgroundColor: 'white'
    },
    mainHeader: {
        alignContent: "center",
        marginHorizontal: 10,
        marginBottom: 2,
        marginTop: 20,
    },
    topicHeader: {
        flexDirection: "row",
        alignContent: "center",
        marginHorizontal: 10,
        marginVertical: 2
    },
    bodyRow: {
        flexDirection: "row",
        alignContent: "center",
        backgroundColor: "#dad3c7",
        marginHorizontal: 10,
        marginVertical: 2
    },
    headerText:{
        flex: 1,
        textAlign: "center",
        paddingVertical:2,
        fontWeight:"bold",

    },
    bodyText: {
        flex: 1,
        textAlign: "center",
        paddingVertical:2,
    }
});

export default SummaryOrderScreen;