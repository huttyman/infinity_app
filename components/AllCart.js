import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Color from '../templates/Colors';
import { EQUIPMENT, SKILL, UNITLIST, WEAPON } from '../datas/data-unit';

const weaponItem = (weaponId, index, gunLength) => {
    let endText = " • ";
    if (gunLength == index + 1) {
        endText = "";
    }

    const weaponObject = WEAPON.filter(item => item.idTitle == weaponId);
    if (weaponObject[0].type == "main") {
        return (<Text style={styles.listTitle}>{weaponObject[0].shortTitle}{endText}</Text>);
    } else {
        return (<Text >{weaponObject[0].shortTitle}{endText}</Text>);
    }
};

const equipmentItem = (equipmentId, index, length,toggleModalVisibility) => {
    let endText = " • ";
    if (length == index + 1) {
        endText = "";
    }

    const equipmentObject = EQUIPMENT.filter(item => item.idTitle == equipmentId);
    return (<Text style={styles.listTitle}><TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          toggleModalVisibility(equipmentId, "equipment");
        }}
      ><Text>{equipmentObject[0].title}</Text></TouchableOpacity>{endText} </Text>);
};

const skillItem = (skillId, index, length,toggleModalVisibility) => {
    let endText = " • ";
    if (length == index + 1) {
        endText = "";
    }

    const skillObject = SKILL.filter(item => item.idTitle == skillId);
    return (<Text style={styles.listTitle}><TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          toggleModalVisibility(skillId, "skill");
        }}
      ><Text>{skillObject[0].title}</Text></TouchableOpacity>{endText} </Text>);
};

const unitTraitContainer = (item,toggleModalVisibility) => {
    const skillLength = item.unitSkill ? item.unitSkill.length : 0;
    const equipmentLength = item.unitEquipment ? item.unitEquipment.length : 0;

    let skillText = <Text></Text>;
    let equipmentText = <Text></Text>;

    if (skillLength != 0) {
        skillText = <Text style={{ color: 'green' }}>Skill: {item.unitSkill.map((gunId, index) => <Text key={index}>{skillItem(gunId, index, skillLength,toggleModalVisibility)}</Text>)}</Text>;
    }

    if (equipmentLength != 0) {
        equipmentText = <Text style={{ color: 'red' }} >Equipment: {item.unitEquipment.map((gunId, index) => <Text key={index}>{equipmentItem(gunId, index, equipmentLength,toggleModalVisibility)}</Text>)}</Text>;
    }

    return (
        <View>
            {skillText}
            {equipmentText}
        </View>

    );
};


const AllCart = props => {
    const unitList = props.data.unitSet;


    const toggleModalVisibility = (input, type) => {
        //Toggling the state of single Collapsible
        let descriptionText = "";

        if (type == "skill") {
            const selectedSkill = SKILL.filter(item => item.idTitle == input)[0];
            if (selectedSkill) {
                descriptionText += selectedSkill.requirement ? "Requirement\n" + selectedSkill.requirement + "\n\n" : "";
                descriptionText += selectedSkill.activation ? "Activation\n" + selectedSkill.activation + "\n\n" : "";
                descriptionText += selectedSkill.effect ? "Effect\n" + selectedSkill.effect + "\n\n" : "";
                descriptionText += selectedSkill.cancellation ? "Cancellation\n" + selectedSkill.cancellation + "\n\n" : "";

                props.setModalState(selectedSkill.title, descriptionText);
            }

        } else if (type == "equipment") {
            const selectedEquipment = EQUIPMENT.filter(item => item.idTitle == input)[0];
            if (selectedEquipment) {
                descriptionText += selectedEquipment.requirement ? "Requirement\n" + selectedEquipment.requirement + "\n\n" : "";
                descriptionText += selectedEquipment.activation ? "Activation\n" + selectedEquipment.activation + "\n\n" : "";
                descriptionText += selectedEquipment.effect ? "Effect\n" + selectedEquipment.effect + "\n\n" : "";
                descriptionText += selectedEquipment.cancellation ? "Cancellation\n" + selectedEquipment.cancellation + "\n\n" : "";

                props.setModalState(selectedEquipment.title, descriptionText);
            }
        }
    };

    const rederItemUnitList = (unitList) => {
        const item = UNITLIST.filter(unitSet => unitSet.idTitle == unitList.item)[0];

        const gunLength = item.gunList.length;
        const skillLength = item.skillList ? item.skillList.length : 0;
        const equipmentLength = item.equipmentList ? item.equipmentList.length : 0;
        let skillText = <Text></Text>;
        let equipmentText = <Text></Text>;
        let ltTokenImage;



        if (skillLength != 0) {
            if (item.skillList.includes('lt')) {
                ltTokenImage = <Image source={require('../assets/ltToken.png')} style={{ height: 20, width: 20 }} />;
            }
            skillText = <Text style={{ color: 'green' }}>Skill: {item.skillList.map((gunId, index) => <Text key={index}>{skillItem(gunId, index, skillLength,toggleModalVisibility)}</Text>)}</Text>;
        }

        if (equipmentLength != 0) {
            equipmentText = <Text style={{ color: 'red' }} >Equipment: {item.equipmentList.map((gunId, index) => <Text key={index}>{equipmentItem(gunId, index, equipmentLength,toggleModalVisibility)}</Text>)}</Text>;
        }

        const addUnitListHandler = (unitId, unitSetId, unitItem) => {
            const gUnitList = global.unitList;

            global.unitList = [...gUnitList, { randomKey: Math.random(), unitId: unitId, unitSetId: unitSetId }];
            global.swc = global.swc + parseFloat(unitItem.swc);
            global.points = global.points + parseFloat(unitItem.points);
            global.unit = global.unit + parseInt(1);
            props.toggleFalse();
        };


        return (
            <TouchableOpacity

                onPress={() => {
                    /*props.navigation.navigate({ routeName: 'CartScreen' })*/
                    addUnitListHandler(props.data.idTitle, unitList.item, item);
                }}
            //on Press of any selector sending the selector value to
            // setSections function which will expand the Accordion accordingly
            >
                <View style={styles.itemContainer}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        {ltTokenImage}
                    </View>
                    <View style={{ flex: 6, alignItems: "flex-start" }}>
                        <Text>{props.data.shortTitle}</Text>
                        <View style={{ marginVertical: 2, alignContent: "flex-start" }} ><Text style={{ textAlign: "left" }}>{item.gunList.map((gunId, index) => <Text key={index}>{weaponItem(gunId, index, gunLength)}</Text>)}</Text></View>
                        {skillText}
                        {equipmentText}
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>{item.swc}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>{item.points}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    };


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

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
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attr_mov}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attr_cc}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attr_bs}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attr_ph}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attr_wip}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attr_arm}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attr_bts}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attr_w}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attr_s}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attr_ava}</Text></View>
                    </View>
                    {unitTraitContainer(props.data,toggleModalVisibility)}
                </View>
                <View style={{ backgroundColor: Color.mainGrey, flexDirection: 'row', width: '100%', paddingVertical: 3 }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 6, alignItems: "flex-start" }}><Text style={{ color: 'white' }}>Name</Text></View>
                    <View style={{ flex: 1 }}><Text style={{ color: 'white' }}>SWC</Text></View>
                    <View style={{ flex: 1 }}><Text style={{ color: 'white' }}>Points</Text></View>
                </View>
            </View>
            {/*List section*/}
            <View>
                <FlatList data={unitList} renderItem={rederItemUnitList} />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 5,
        backgroundColor: Color.mainWhite,
        flexDirection: 'row',
        paddingVertical: 6,
    },
    detailContainer: {
        paddingHorizontal: '3%',
        width: '100%',
        backgroundColor: Color.mainWhite,
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
    listTitle: {
        fontWeight: "bold",
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
        backgroundColor: Color.mainBlack,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 7,
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

export default AllCart;