import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import Color from '../templates/Colors';
import { EQUIPMENT, SKILL, UNITSET, WEAPON } from '../datas/data-army-unit';

const weaponItem = (weaponId,index,gunLength) => {
    let endText = " • ";
    if(gunLength == index+1){
        endText = "";
    }

    const weaponObject = WEAPON.filter(item => item.id == weaponId);
    console.log(weaponObject);
    return (<Text style={styles.listTitle}>{weaponObject[0].title}{endText}</Text>);
};

const equipmentItem = (equipmentId,index,length) => {
    let endText = " • ";
    if(length == index+1){
        endText = "";
    }

    const equipmentObject = EQUIPMENT.filter(item => item.id == equipmentId);
    console.log(equipmentObject);
    return (<Text style={styles.listTitle}>{equipmentObject[0].title}{endText} </Text>);
};

const skillItem = (skillId,index,length) => {
    let endText = " • ";
    if(length == index+1){
        endText = "";
    }

    const skillObject = SKILL.filter(item => item.id == skillId);
    console.log(skillObject);
    return (<Text style={styles.listTitle}>{skillObject[0].title}{endText} </Text>);
};




const AllCart = props => {
    const unitList = props.data.unitList;


    const rederItemUnitList = (unitList) => {
        const item = UNITSET.filter(unitSet=>unitSet.id == unitList.item.unitSetId)[0];
        console.log("aaaa");
        console.log(unitList);
        console.log(item);
        const gunLength = item.gunList.length;
        const skillLength = item.skillList.length;
        const equipmentLength = item.equipmentList.length;

        let skillText =<Text style={{color:'green'}}>Skill: {item.skillList.map((gunId,index) => <Text key={index}>{skillItem(gunId,index,skillLength)}</Text>)}</Text> ;
        if(skillLength <= 0){
            skillText = <Text></Text>;
        }

        let equipmentText= <Text style={{color:'red'}} >Equipment: {item.equipmentList.map((gunId,index) => <Text key={index}>{equipmentItem(gunId,index,equipmentLength)}</Text>)}</Text>;
        if(equipmentLength <= 0){
            equipmentText = <Text></Text>
        }      
        return (
            <TouchableOpacity
              
                onPress={() => {props.navigation.navigate({routeName:'CartScreen'})}}
                //on Press of any selector sending the selector value to
                // setSections function which will expand the Accordion accordingly
              >
            <View style={styles.itemContainer}>
                <View style={{ flex: 1 }}>

                </View>
                <View style={{ flex: 6, alignItems: "flex-start" }}>
                    <Text>{props.data.title}</Text>
                    <View style={{marginVertical:2, alignContent:"flex-start"}} ><Text style={{textAlign:"left"}}>{item.gunList.map((gunId,index) => <Text key={index}>{weaponItem(gunId,index,gunLength)}</Text>)}</Text></View>
                    {skillText} 
                    {equipmentText}
                </View>
                <View style={{ flex: 1 }}>
                    <Text>{item.swc}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text>{item.point}</Text>
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
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attribute.mov}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attribute.cc}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attribute.bs}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attribute.ph}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attribute.wip}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attribute.arm}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attribute.bts}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attribute.w}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attribute.s}</Text></View>
                        <View style={styles.rowWidth}><Text style={styles.rowBodyText}>{props.data.attribute.ava}</Text></View>
                    </View>
                </View>
                <View style={{ backgroundColor: Color.mainGrey, flexDirection: 'row', width:'100%' }}>
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
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingVertical:6,
    },
    detailContainer: {
        paddingHorizontal: '3%',
        width: '100%',
        backgroundColor: 'white',
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: Color.mainGrey,
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