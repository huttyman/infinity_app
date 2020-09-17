/*Example of Collapsible - Accordion - Expandable View in React Native*/
import React, { Component,useState } from 'react';
//import react in our project
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
//import basic react native components
import * as Animatable from 'react-native-animatable';
//import for the collapsible/Expandable view
import Accordion from 'react-native-collapsible/Accordion';
//import for the Accordion view
import Cart from '../components/Cart'
import { WEAPON, EQUIPMENT, ARMY_UNIT, UNITLIST, SKILL } from '../datas/data-unit';
import ScoreTitle from '../components/ScoreTitle';
import Color from '../templates/Colors';


//Dummy content to show
//You can also use dynamic data by calling webservice

const weaponItem = (weaponId, index, gunLength) => {
  let endText = " • ";
  if (gunLength == index + 1) {
    endText = "";
  }
  const weaponObject = WEAPON.filter(item => item.idTitle == weaponId);
  return (<Text style={styles.listTitle}>{weaponObject[0].shortTitle}{endText}</Text>);
};

const equipmentItem = (equipmentId, index, length) => {
  let endText = " • ";
  if (length == index + 1) {
    endText = "";
  }

  const equipmentObject = EQUIPMENT.filter(item => item.idTitle == equipmentId);
  return (<Text style={styles.listTitle}>{equipmentObject[0].title}{endText} </Text>);
};

const skillItem = (skillId, index, length) => {
  let endText = " • ";
  if (length == index + 1) {
    endText = "";
  }

  const skillObject = SKILL.filter(item => item.idTitle == skillId);
  return (<Text style={styles.listTitle}>{skillObject[0].title}{endText} </Text>);
};

//To make the selector (Something like tabs)
const SELECTORS = [
  { title: 'Refresh all', value: 9 },
];

const removeUnitHandler = (key,unitItem) =>{
  global.unitList = global.unitList.filter(item => item.randomKey != key);
  global.swc = global.swc-parseFloat(unitItem.swc);
  global.points = global.points- parseFloat(unitItem.points);
  global.unit = global.unit -parseInt(1);

};

export default class CollapseExample extends Component {
  state = {
    //default active selector
    activeSections: [],
    //collapsed condition for the single collapsible
    collapsed: true,
    //multipleSelect is for the Multiple Expand allowed
    //true: You can expand multiple at a time
    //false: One can be expand at a time and other will be closed automatically
    multipleSelect: false,
    toggleFalse:false,
  };

  

  toggleExpanded = () => {
    //Toggling the state of single Collapsible
    this.setState({ collapsed: !this.state.collapsed });
  };

  setToggleFalse = () => {
    this.setState({ toggleFalse: !this.state.toggleFalse});
 
  };

  setSections = sections => {
    //setting up a active section state
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    const unitItem = ARMY_UNIT.filter(item => item.idTitle == section.unitId)[0];
    const unitSetItem = UNITLIST.filter(item => item.idTitle == section.unitSetId)[0];

    let combinedSkill;
    if(unitSetItem.skillList){
      combinedSkill = unitSetItem.skillList;
    }else{
      combinedSkill = [];
    }
    if(unitItem.unitSkill){
      combinedSkill = unitItem.unitSkill.concat(combinedSkill);
    }

    
    let combinedEquipment;
    if(unitSetItem.equipmentList){
      combinedEquipment = unitSetItem.equipmentList;
    }else{
      combinedEquipment = [];
    }
    if(unitItem.unitEquipment){
      combinedEquipment = unitItem.unitEquipment.concat(combinedEquipment);
    }


    const gunLength = unitSetItem.gunList.length;
    const skillLength = combinedSkill ? combinedSkill.length : 0;
    const equipmentLength = combinedEquipment ? combinedEquipment.length : 0;
    let skillText = <Text></Text>;
    let equipmentText = <Text></Text>;

    if (skillLength != 0) {
      skillText = <Text style={{ color: 'green' }}>Skill: {combinedSkill.map((gunId, index) => <Text key={index}>{skillItem(gunId, index, skillLength)}</Text>)}</Text>;
    }

    if (equipmentLength != 0) {
      equipmentText = <Text style={{ color: 'red' }} >Equipment: {combinedEquipment.map((gunId, index) => <Text key={index}>{equipmentItem(gunId, index, equipmentLength)}</Text>)}</Text>;
    }
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <View style={styles.headerTopTitle}>
          <Text style={styles.headerText}>{unitItem.title}</Text>
          <Button style={styles.headerRemoveButton} icon={<Icon name="arrow-right" size={15} color='white'/>}  onPress={()=>{removeUnitHandler(section.randomKey,unitSetItem);this.setToggleFalse();}} />
        </View>
        <View style={{ flexDirection: "row", backgroundColor: Color.mainWhite }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 6, alignItems: "flex-start", padding: 5 }}>
            <View style={{ alignContent: "flex-start" }} >
              <Text style={{ textAlign: "left" }}>{unitSetItem.gunList.map((gunId, index) => <Text key={index}>{weaponItem(gunId, index, gunLength)}</Text>)}</Text>
            </View>
            {skillText}
            {equipmentText}
          </View>
          <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
            <Text>{unitSetItem.swc}</Text>
          </View>
          <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
            <Text>{unitSetItem.points}</Text>
          </View>
        </View>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          style={{ textAlign: 'center' }}>
          <Cart data={section} />
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
    // global.unitList = [{ unitId: '1', unitSetId: '4' }, { unitId: '2', unitSetId: '2' }];
    return (
      <View style={styles.container}>

        <View style={{ backgroundColor: Color.mainGrey, padding: 15 }}>
          <ScoreTitle />
        </View>
        <ScrollView contentContainerStyle={{ paddingTop: 3 }}>

          <View style={styles.multipleToggle}>
            <Text style={styles.multipleToggle__title}>
              Multiple Expand Allowed?
            </Text>
            <Switch
              value={multipleSelect}
              onValueChange={multipleSelect =>
                this.setState({ multipleSelect })
              }
            />
          </View>

          {/*Code for Selector starts here*/}
          <View style={styles.selectors}>
            {SELECTORS.map(selector => (
              <TouchableOpacity
                key={selector.title}
                onPress={() => this.setSections([9])}
              //on Press of any selector sending the selector value to
              // setSections function which will expand the Accordion accordingly
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(9) &&
                      styles.activeSelector
                    }>
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {/*Code for Selector ends here*/}

          {/*Code for Accordion/Expandable List starts here*/}
          <Accordion
            activeSections={activeSections}
            //for any default active section
            sections={global.unitList}
            //title and content of accordion
            touchableComponent={TouchableOpacity}
            //which type of touchable component you want
            //It can be the following Touchables
            //TouchableHighlight, TouchableNativeFeedback
            //TouchableOpacity , TouchableWithoutFeedback
            expandMultiple={multipleSelect}
            //Do you want to expand mutiple at a time or single at a time
            renderHeader={this.renderHeader}
            //Header Component(View) to render
            renderContent={this.renderContent}
            //Content Component(View) to render
            duration={400}
            //Duration for Collapse and expand
            onChange={this.setSections}
          //setting the state of active sections
          />
          {/*Code for Accordion/Expandable List ends here*/}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTopTitle:{
     backgroundColor: Color.mainGrey, 
     flexDirection: "row",
  },
  headerRemoveButton:{
    flex:1,
  },
  listContainer: {
    backgroundColor: Color.mainGrey,
  },
  container: {
    flex: 1,
    backgroundColor: Color.mainBlack,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    flex: 1,
    paddingHorizontal: 3,
    backgroundColor: Color.mainBlack,
    alignContent: "flex-start",
  },
  headerText: {
    flex:8,
    textAlign: "left",
    fontSize: 16,
    fontWeight: '500',
    color: Color.mainWhite,
    padding: 5,
  },
  content: {
    paddingHorizontal: 20,
    backgroundColor: Color.mainBlack,
  },
  active: {
    backgroundColor: Color.mainBlack,
  },
  inactive: {
    backgroundColor: Color.mainBlack,
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
    color: Color.mainWhite,
  },
  listTitle: {
    fontWeight: "bold",
  },
});
