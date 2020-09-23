import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Color from '../../templates/Colors';

const ExplainStat = props => {
    return (
        <ScrollView>
            <View style={styles.container}>
                
            <View><Text style={styles.topic}>Unit Stat</Text></View>
                <View style={styles.exampleContainer}>
                    <View style={styles.header} >
                        <View style={{ zIndex: 1, backgroundColor: Color.mainBlack, borderRadius: 45, maxWidth: 80, minWidth: 80, flex: 1, borderWidth: 4, borderColor: Color.mainBlack, overflow: "hidden" }}>
                            <Image source={require('../../assets/logos/pano-fusi.svg')} style={{ height: 70, width: 70 }} />
                        </View>
                        <View style={{ zIndex: 0, margin: 2, backgroundColor: Color.mainGrey, flex: 6, alignItems: "flex-start", marginLeft: -40, paddingLeft: 50, paddingVertical: 3, justifyContent: "center" }}>
                            <Text style={styles.headerText}>Fusilliers</Text>
                        </View>
                        <View style={{ margin: 2, backgroundColor: Color.mainGrey, borderTopRightRadius: 13, borderBottomRightRadius: 13, flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <Text style={[styles.headerText, { textTransform: "uppercase" }]}>LI</Text>
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.troopTitle}>
                            <Text style={styles.troopTitleText}>Fusilliers</Text>
                        </View>
                        <View style={styles.detailContainer}>
                            <View style={styles.rowContainer}>
                                <View style={styles.rowWidth}><Text>MOV</Text></View>
                                <View style={styles.rowWidth}><Text>CC</Text></View>
                                <View style={styles.rowWidth}><Text>BS</Text></View>
                                <View style={styles.rowWidth}><Text>PH</Text></View>
                                <View style={styles.rowWidth}><Text>WIP</Text></View>
                                <View style={styles.rowWidth}><Text>ARM</Text></View>
                                <View style={styles.rowWidth}><Text>BTS</Text></View>
                                <View style={styles.rowWidth}><Text>W</Text></View>
                                <View style={styles.rowWidth}><Text>S</Text></View>
                                <View style={styles.rowWidth}><Text>AVA</Text></View>
                            </View>
                            <View style={styles.underline}></View>
                            <View style={styles.rowContainer}>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>4-4</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>13</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>12</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>10</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>12</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>1</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>0</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>1</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>2</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>T</Text></View>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>MOVEMENT (MOV)</Text>
                        <Text style={styles.textBody}>The number of inches this Trooper can move with an Order. The MOV
                        Attribute usually has two values: the first time the Trooper moves in
an Order, and the second.</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>CLOSE COMBAT (CC)</Text>
                        <Text style={styles.textBody}>This conveys the Trooper’s prowess in hand-to-hand combat.</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>BALLISTIC SKILLS (BS)</Text>
                        <Text style={styles.textBody}>This conveys the Trooper’s prowess in ranged combat.</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>PHYSIQUE (PH)</Text>
                        <Text style={styles.textBody}>This represents all physical skills, such as strength, dexterity,
throwing, dodging...</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>WILLPOWER (WIP)</Text>
                        <Text style={styles.textBody}>This represents all mental skills, such as Discover, Doctor, Hacking…</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>ARMOR (ARM)</Text>
                        <Text style={styles.textBody}>This is a numeric value for the Trooper’s overall armor. The higher
                        the value, the heavier and more effective the armor is in reducing the
damage of enemy attacks.</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>BIO-TECHNOLOGICAL SHIELD (BTS)</Text>
                        <Text style={styles.textBody}>This is a numeric value for the Trooper’s NBC (Nuclear, Biological,
                        Chemical), Nanotechnological, Electromagnetic, and Anti-Hacking
protections.</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>WOUNDS (W)</Text>
                        <Text style={styles.textBody}>This represents the physical endurance of the Trooper, and how
                        much punishment it can withstand before losing consciousness or dying.</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>STRUCTURE (STR)</Text>
                        <Text style={styles.textBody}>This alternative to the Wounds Attribute represents the capacity of
                        mechanical Troopers (TAGs, REMs...) or scenery structures to soak up
damage before ceasing to function.</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>AVAILABILITY (AVA)</Text>
                        <Text style={styles.textBody}>This indicates the number of Troopers from this Unit allowed in a
single Army List.</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>SILHOUETTE (S)</Text>
                        <Text style={styles.textBody}>This indicates the three-dimensional volume of the Trooper for game
purposes. The value refers to a specific type of Silhouette Template.</Text>
                    </View>
                </View>

                {/* Weapon Guide */}
                <View style={styles.contentContainer}>
                    <Text style={styles.topic}>Weapon & Ammo Stat</Text>
                    <Image source={require('../../assets/gun.png')} style={{ height: 100, width: 200 }} />
                </View>

                <View style={styles.exampleContainer}>
                    <View style={styles.troopTitle}>
                        <Text style={styles.troopTitleText}>Combi Rifle</Text>
                    </View>

                    <View style={styles.detailContainer}>
                        <View style={styles.rowContainer}>
                            <View style={styles.rowWidth}><Text>Dam</Text></View>
                            <View style={styles.rowWidth}><Text>B</Text></View>
                            <View style={styles.rowWidth}><Text>Ammo</Text></View>
                            <View style={styles.rowWidth}><Text>Save</Text></View>
                        </View>
                        <View style={styles.underline}></View>
                        <View style={styles.rowContainer}>
                            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>14</Text></View>
                            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>3</Text></View>
                            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>N</Text></View>
                            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>ARM</Text></View>
                        </View>
                    </View>

                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>Damage (Dam)</Text>
                        <Text style={styles.textBody}>Damage of your weapon that enemy unit need to defend when got hit</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>Burst (B)</Text>
                        <Text style={styles.textBody}>Amount of bullets(Dice) you make for one attack (always 1 in ARO)</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>Ammo</Text>
                        <Text style={styles.textBody}>Type of ammunition</Text>
                            <Text style={{paddingLeft:10}}>► Normal(N)</Text>
                            <Text style={{paddingLeft:10}}>► Double Action (DA) : After hit enemy, They need to make 2 save roll (as if got hit by 2 shot)</Text>
                            <Text style={{paddingLeft:10}}>► Armor Piercing (AP) : Reduce enemy defence by half(1/2 round up)</Text>
                            <Text style={{paddingLeft:10}}>► Explosive (Exp) : After hit enemy, They need to make 3 save roll (as if got hit by 3 shot)</Text>
                            <Text style={{paddingLeft:10}}>► Para (Para) :(non lethal) After a successful attack, the target must make a PH-6 Roll per hit, if fail target will enter Immobilized state.</Text>
                            <Text style={{paddingLeft:10}}>* All critical hit +1 saving roll (as if got by 1 more shot)</Text>
                       
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>Save</Text>
                        <Text style={styles.textBody}>Which enemy stat need to add for defense our damage (if hit)</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    exampleContainer: {
        padding: 10,
        backgroundColor: "white",
    },
    contentContainer: {
        backgroundColor: "white",
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 3,
        flexDirection: "row",
        backgroundColor: Color.mainBlack
    },
    headerText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: Color.mainWhite,
    },
    listTitle: {
        fontWeight: "bold",
    },
    troopTitle: {
        padding: 10,
        backgroundColor: Color.mainGrey,
        width: '100%',

    },
    detailContainer: {
        paddingHorizontal: '3%',
        width: '100%',
        backgroundColor: Color.mainWhite,
        paddingVertical: 5,
    },
    troopTitleText: {
        fontSize: 18,
        color: 'white',
    },
    rowBodyText: {
        fontWeight: "bold",

    },
    rowHeaderText: {

    },
    rowContainer: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: "center",

    },
    rowWidth: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: "center",
    },
    textHeader: {
        fontWeight: "500",
        padding: 5,
        backgroundColor: Color.mainWhite,
        width: "40%",

    },
    textBody: {
        padding: 5
    },
    textContainer: {
        padding: 10
    },
    underline: {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: "center",

    },
    topic:{
        backgroundColor:"white",
        padding:10,
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: 16,
    }

});

export default ExplainStat;
