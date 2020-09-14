import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ARMY_UNIT, UNITSET, WEAPON } from '../datas/data-army-unit';
import Color from '../templates/Colors';




const weaponCard = weaponId => {
    const weaponItem = WEAPON.filter(item => item.id == weaponId)[0];

    let rangDetail =
        <View>
            <View style={styles.rowContainer}>
                <View style={styles.rowWidth}><Text>Short</Text></View>
                <View style={styles.rowWidth}><Text>Medium</Text></View>
                <View style={styles.rowWidth}><Text>Long</Text></View>
                <View style={styles.rowWidth}><Text>Max</Text></View>
            </View>
            <View style={styles.underline}></View>
            <View style={styles.rowContainer}>
                <View style={[styles.rowWidth, { backgroundColor: modColor(weaponItem.attribute.range.short_mod) }]}><Text style={styles.rowBodyText}>{weaponItem.attribute.range.short_range} {weaponItem.attribute.range.short_mod}</Text></View>
                <View style={[styles.rowWidth, { backgroundColor: modColor(weaponItem.attribute.range.medium_mod) }]}><Text style={styles.rowBodyText}>{weaponItem.attribute.range.medium_range} {weaponItem.attribute.range.medium_mod}</Text></View>
                <View style={[styles.rowWidth, { backgroundColor: modColor(weaponItem.attribute.range.long_mod) }]}><Text style={styles.rowBodyText}>{weaponItem.attribute.range.long_range} {weaponItem.attribute.range.long_mod}</Text></View>
                <View style={[styles.rowWidth, { backgroundColor: modColor(weaponItem.attribute.range.max_mod) }]}><Text style={styles.rowBodyText}>{weaponItem.attribute.range.max_range} {weaponItem.attribute.range.max_mod}</Text></View>
            </View>
        </View>;

    if (weaponItem.attribute.range.no_range == true) {
        rangDetail = <View></View>;
    }

    let traitDetail =
        <View>
            <Text style={{textAlign:"left"}}>Triat: {weaponItem.trait}</Text>
        </View>;
    if(!weaponItem.trait){
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
                    <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{weaponItem.attribute.dam}</Text></View>
                    <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{weaponItem.attribute.b}</Text></View>
                    <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{weaponItem.attribute.ammo}</Text></View>
                    <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{weaponItem.attribute.save}</Text></View>
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
    } else if (modValue == "+3") {
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
    const unitId = '1';
    const unitSetId = '7';

    const unitItem = ARMY_UNIT.filter(item => item.id == unitId)[0];
    const unitSetItem = UNITSET.filter(item => item.id == unitSetId)[0];

    console.log(unitItem);
    console.log(unitSetItem);
    console.log("secondStep");

    return (
        <View style={styles.container}>

            <View style={styles.listContainer}>
                <View style={styles.troopTitle}>
                    <Text style={styles.troopTitleText}>{props.data.title}</Text>
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
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attribute.mov}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attribute.cc}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attribute.bs}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attribute.ph}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attribute.wip}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attribute.arm}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attribute.bts}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attribute.w}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attribute.s}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{unitItem.attribute.ava}</Text></View>
                    </View>
                </View>
            </View>
            {unitSetItem.gunList.map(item => weaponCard(item))}
        </View>

    );
};

const styles = StyleSheet.create({
    detailContainer: {
        paddingHorizontal: '3%',
        width: '100%',
    },
    cardContainer: {
        width: '100%',
        margin: 10,
        padding: 10,
        alignItems: "center"
    },
    underline: {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: "center",

    },
    troopTitle: {
        padding: 10,
        backgroundColor: Color.mainGrey,
        width: '100%',

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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    listContainer: {
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