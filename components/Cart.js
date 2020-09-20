import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ARMY_UNIT, UNITLIST, WEAPON } from '../datas/data-unit';
import Color from '../templates/Colors';


const HackerCard = props => {
    if (props.data.equipmentList) {
        if (props.data.equipmentList.includes('hack')) {
            return (
                <View style={{ width: '100%' }}>
                    <View key={Math.random()} style={styles.cardContainer}>
                        <View style={styles.troopTitle}>
                            <Text style={styles.troopTitleText}>Carbonite</Text>
                        </View>

                        <View style={styles.detailContainer}>
                            <View style={styles.rowContainer}>
                                <View style={styles.rowWidth}><Text>Att. MOD</Text></View>
                                <View style={styles.rowWidth}><Text>Opp. MOD</Text></View>
                                <View style={styles.rowWidth}><Text>Dam</Text></View>
                                <View style={styles.rowWidth}><Text>B</Text></View>
                            </View>
                            <View style={styles.underline}></View>
                            <View style={styles.rowContainer}>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>0</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>0</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>13</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>2</Text></View>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Text style={{ textAlign: "left" }}>Targets: <Text style={{ fontWeight: "bold" }}>TAG, IP, REM, Hacker</Text></Text>
                            <Text style={{ textAlign: "left" }}>Special: <Text style={{ fontWeight: "bold" }}>DA Ammo, State: IMM-B</Text></Text>
                        </View>
                    </View>
                    <View key={Math.random()} style={styles.cardContainer}>
                        <View style={styles.troopTitle}>
                            <Text style={styles.troopTitleText}>Spotlight</Text>
                        </View>

                        <View style={styles.detailContainer}>
                            <View style={styles.rowContainer}>
                                <View style={styles.rowWidth}><Text>Att. MOD</Text></View>
                                <View style={styles.rowWidth}><Text>Opp. MOD</Text></View>
                                <View style={styles.rowWidth}><Text>Dam</Text></View>
                                <View style={styles.rowWidth}><Text>B</Text></View>
                            </View>
                            <View style={styles.underline}></View>
                            <View style={styles.rowContainer}>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>0</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>0</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>--</Text></View>
                                <View style={styles.rowWidth}><Text style={styles.rowBodyText}>1</Text></View>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Text style={{ textAlign: "left" }}>Special: <Text style={{ fontWeight: "bold" }}>State: Targeted</Text></Text>
                        </View>
                    </View>
                </View>

            );

        } else {
            return null;
        }

    } else {
        return null;
    }

};

const DiscoverCard = props => {
    return (
        <View style={{ width: '100%' }} >
            <View key={Math.random()} style={styles.cardContainer}>
                <View style={styles.troopTitle}>
                    <Text style={styles.troopTitleText}>Discover</Text>
                </View>
            </View>
            <View style={[styles.detailContainer, { paddingBottom: 10 }]}>
                <View style={styles.rowContainer}>
                    <View style={styles.rowWidth}><Text>Short</Text></View>
                    <View style={styles.rowWidth}><Text>Medium</Text></View>
                    <View style={styles.rowWidth}><Text>Long</Text></View>
                    <View style={styles.rowWidth}><Text>Max</Text></View>
                </View>
                <View style={styles.underline}></View>
                <View style={styles.rowContainer}>
                    <View style={[styles.rowWidth, { backgroundColor: Color.rangeGreen }]}><Text style={styles.rowBodyText}>0-8" +3</Text></View>
                    <View style={[styles.rowWidth, { backgroundColor: Color.rangeBlue }]}><Text style={styles.rowBodyText}>8-32" 0</Text></View>
                    <View style={[styles.rowWidth, { backgroundColor: Color.rangeYellow }]}><Text style={styles.rowBodyText}>32-48" -3</Text></View>
                    <View style={[styles.rowWidth, { backgroundColor: Color.rangeRed }]}><Text style={styles.rowBodyText}>48-96" -6</Text></View>
                </View>
            </View>
        </View>
    );
}

const MedCard = props => {
    if (props.data.equipmentList) {
        if (props.data.equipmentList.includes('med')) {
            return (
                <View style={{ width: '100%' }} >
                    <View key={Math.random()} style={styles.cardContainer}>
                        <View style={styles.troopTitle}>
                            <Text style={styles.troopTitleText}>Medikit</Text>
                        </View>
                    </View>
                    <View style={[styles.detailContainer, { paddingBottom: 10 }]}>
                        <View style={styles.rowContainer}>
                            <View style={styles.rowWidth}><Text>Short</Text></View>
                            <View style={styles.rowWidth}><Text>Medium</Text></View>
                            <View style={styles.rowWidth}><Text>Long</Text></View>
                            <View style={styles.rowWidth}><Text>Max</Text></View>
                        </View>
                        <View style={styles.underline}></View>
                        <View style={styles.rowContainer}>
                            <View style={[styles.rowWidth, { backgroundColor: Color.rangeGreen }]}><Text style={styles.rowBodyText}>0-8" +3</Text></View>
                            <View style={[styles.rowWidth, { backgroundColor: Color.rangeBlue }]}><Text style={styles.rowBodyText}>8-16" 0</Text></View>
                            <View style={[styles.rowWidth, { backgroundColor: Color.rangeRed }]}><Text style={styles.rowBodyText}>16-24" -6</Text></View>
                            <View style={[styles.rowWidth, { backgroundColor: 'black' }]}><Text style={styles.rowBodyText}></Text></View>
                        </View>
                    </View>
                </View>

            );

        } else {
            return null;
        }

    } else {
        return null;
    }

};


const weaponCard = weaponId => {
    const weaponItem = WEAPON.filter(item => item.idTitle == weaponId)[0];

    let rangDetail = <View></View>;

    if (weaponItem.noRange === "false") {
        rangDetail =
            <View>
                <View style={styles.rowContainer}>
                    <View style={styles.rowWidth}><Text>Short</Text></View>
                    <View style={styles.rowWidth}><Text>Medium</Text></View>
                    <View style={styles.rowWidth}><Text>Long</Text></View>
                    <View style={styles.rowWidth}><Text>Max</Text></View>
                </View>
                <View style={styles.underline}></View>
                <View style={styles.rowContainer}>
                    <View style={[styles.rowWidth, { backgroundColor: modColor(weaponItem.short_mod) }]}><Text style={styles.rowBodyText}>{weaponItem.short_range} {weaponItem.short_mod}</Text></View>
                    <View style={[styles.rowWidth, { backgroundColor: modColor(weaponItem.medium_mod) }]}><Text style={styles.rowBodyText}>{weaponItem.medium_range} {weaponItem.medium_mod}</Text></View>
                    <View style={[styles.rowWidth, { backgroundColor: modColor(weaponItem.long_mod) }]}><Text style={styles.rowBodyText}>{weaponItem.long_range} {weaponItem.long_mod}</Text></View>
                    <View style={[styles.rowWidth, { backgroundColor: modColor(weaponItem.max_mod) }]}><Text style={styles.rowBodyText}>{weaponItem.max_range} {weaponItem.max_mod}</Text></View>
                </View>
            </View>;
    }

    let traitDetail =
        <View>
            <Text style={{ textAlign: "left" }}>Triat: {weaponItem.trait}</Text>
        </View>;
    if (!weaponItem.trait) {
        traitDetail = <View></View>
    }

    return (
        <View key={Math.random()} style={styles.cardContainer}>
            <View style={styles.troopTitle}>
                <Text style={styles.troopTitleText}>{weaponItem.title}</Text>
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
                    <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{weaponItem.attr_dam}</Text></View>
                    <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{weaponItem.attr_b}</Text></View>
                    <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{weaponItem.attr_ammo}</Text></View>
                    <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{weaponItem.attr_save}</Text></View>
                </View>
                {rangDetail}
                {traitDetail}
            </View>
        </View>
    );
};


const modColor = modValue => {
    let modColor;
    if (modValue == "-3") {
        modColor = Color.rangeYellow;
    } else if (modValue == "0") {
        modColor = Color.rangeBlue;
    } else if (modValue == "+3" || modValue == "+6") {
        modColor = Color.rangeGreen;
    } else if (modValue == "-6") {
        modColor = Color.rangeRed;
    }
    else {
        modColor = 'black';
    }
    return modColor;
}



const Cart = props => {
    console.log("vvv");
    console.log(props);
    const unitId = props.data.unitId;
    const unitSetId = props.data.unitSetId;

    const unitItem = ARMY_UNIT.filter(item => item.idTitle == unitId)[0];
    const unitSetItem = UNITLIST.filter(item => item.idTitle == unitSetId)[0];

    return (
        <View style={styles.container}>

            <View style={styles.listContainer}>
                <View style={styles.detailContainer}>
                    <View style={styles.rowContainer}>
                        <View style={styles.rowWidth}>
                                <Text>MOV</Text>
                        </View>
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
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attr_mov}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attr_cc}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attr_bs}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attr_ph}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attr_wip}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attr_arm}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attr_bts}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attr_w}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attr_s}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attr_ava}</Text></View>
                    </View>
                </View>
            </View>
            { unitSetItem.gunList.map(item => weaponCard(item))}
            <HackerCard data={unitSetItem} />
            <MedCard data={unitSetItem} />
            <DiscoverCard />


        </View >

    );
};

const styles = StyleSheet.create({
    detailContainer: {
        paddingHorizontal: '3%',
        width: '100%',
        backgroundColor: 'white',
    },
    cardContainer: {
        width: '100%',
        alignItems: "center",
        backgroundColor: 'white',
        padding: 10,
    },
    underline: {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: "center",
        backgroundColor: 'white'

    },
    troopTitle: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: Color.mainGrey,
        width: '100%',
        borderTopRightRadius: 45

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
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        width: '100%',
    },
    listContainer: {
        padding: 5,
        width: '100%',
        alignItems: "center",
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
    }

});

export default Cart;