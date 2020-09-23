/*Example of Collapsible - Accordion - Expandable View in React Native*/
import React, { Component } from 'react';
//import react in our project
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Clipboard,
  Image
} from 'react-native';
import { Button } from 'react-native-elements';
//import basic react native components
import * as Animatable from 'react-native-animatable';
//import for the collapsible/Expandable view
import Accordion from 'react-native-collapsible/Accordion';
//import for the Accordion view
import Cart from '../components/Cart'
import { WEAPON, EQUIPMENT, ARMY_UNIT, UNITLIST, SKILL } from '../datas/data-unit';
import ScoreTitle from '../components/ScoreTitle';
import Color from '../templates/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import ClickModal from '../components/ClickModal';

//Dummy content to show
//You can also use dynamic data by calling webservice

const weaponItem = (weaponId, index, gunLength) => {
  let endText = " • ";
  if (gunLength == index + 1) {
    endText = "";
  }
  const weaponObject = WEAPON.filter(item => item.titleId == weaponId);
  if (weaponObject[0].type == "main") {
    return (<Text style={styles.listTitle}>{weaponObject[0].shortTitle}{endText}</Text>);
  } else {
    return (<Text >{weaponObject[0].shortTitle}{endText}</Text>);
  }
};

const equipmentItem = (equipmentId, index, length, toggleModalVisibility) => {
  let endText = " • ";
  if (length == index + 1) {
    endText = "";
  }

  const equipmentObject = EQUIPMENT.filter(item => item.titleId == equipmentId);
  return (<Text><TouchableOpacity
    style={styles.openButton}
    onPress={() => {
      toggleModalVisibility(equipmentId, "equipment");
    }}
  ><Text><Text style={styles.listTitle}>{equipmentObject[0].title}</Text></Text></TouchableOpacity>{endText} </Text>);
};

const skillItem = (skillId, index, length, toggleModalVisibility) => {
  let endText = " • ";
  if (length == index + 1) {
    endText = "";
  }

  const skillObject = SKILL.filter(item => item.titleId == skillId);
  return (<Text>
    <TouchableOpacity
      style={styles.openButton}
      onPress={() => {
        toggleModalVisibility(skillId, "skill");
      }}
    ><Text><Text style={styles.listTitle}>{skillObject[0].title}</Text></Text></TouchableOpacity>{endText} </Text>);
};

//To make the selector (Something like tabs)
const SELECTORS = [
  { title: 'Refresh all', value: 9 },
];

const removeUnitHandler = (key, unitItem) => {
  global.unitList = global.unitList.filter(item => item.randomKey != key);
  global.swc = global.swc - parseFloat(unitItem.swc);
  global.points = global.points - parseFloat(unitItem.points);
  global.unit = global.unit - parseInt(1);

};

const importUnit = (unitText) => {
  try {
    JSON.parse(unitText);
  } catch (e) {
    alert('Import code is wrong!!');
    return false;
  }
  const importUnit = JSON.parse(unitText);
  global.unitList = importUnit;
  global.swc = 0;
  global.points = 0;
  global.unit = 0;
  global.unitList.map(unit => { addUnitSetProp(unit.unitSetId) });

};

const addUnitSetProp = (unitSetId) => {
  const unitItem = UNITLIST.filter(item => item.titleId == unitSetId)[0];
  global.swc = global.swc + parseFloat(unitItem.swc);
  global.points = global.points + parseFloat(unitItem.points);
  global.unit = global.unit + parseInt(1);
};

export default class CollapseExampleTestTemplate extends Component {
  state = {
    //default active selector
    activeSections: [],
    //collapsed condition for the single collapsible
    collapsed: true,
    //multipleSelect is for the Multiple Expand allowed
    //true: You can expand multiple at a time
    //false: One can be expand at a time and other will be closed automatically
    multipleSelect: false,
    toggleFalse: false,
    clibboardText: "",
    modalVisible: false,
    modalText: "",
    modalTitle: "",
  };

  readFromClipboard = () => {

    importUnit(this.state.clibboardText);
  };

  writeToClipboard = async () => {
    await Clipboard.setString(JSON.stringify(global.unitList));
    alert('Copied to Clipboard! Put in your note somewhere.');
  };

  toggleExpanded = () => {
    //Toggling the state of single Collapsible
    this.setState({ collapsed: !this.state.collapsed });
  };

  toggleModalVisibility = (input, type) => {
    //Toggling the state of single Collapsible
    let descriptionText = "";

    if (type == "skill") {
      const selectedSkill = SKILL.filter(item => item.titleId == input)[0];
      if (selectedSkill) {
        descriptionText += selectedSkill.requirement ? "Requirement\n" + selectedSkill.requirement + "\n\n" : "";
        descriptionText += selectedSkill.activation ? "Activation\n" + selectedSkill.activation + "\n\n" : "";
        descriptionText += selectedSkill.effect ? "Effect\n" + selectedSkill.effect + "\n\n" : "";
        descriptionText += selectedSkill.cancellation ? "Cancellation\n" + selectedSkill.cancellation + "\n\n" : "";

        this.setState({
          modalText: descriptionText,
          modalTitle: selectedSkill.title
        });
      }

    } else if (type == "equipment") {
      const selectedEquipment = EQUIPMENT.filter(item => item.titleId == input)[0];
      if (selectedEquipment) {
        descriptionText += selectedEquipment.requirement ? "Requirement\n" + selectedEquipment.requirement + "\n\n" : "";
        descriptionText += selectedEquipment.activation ? "Activation\n" + selectedEquipment.activation + "\n\n" : "";
        descriptionText += selectedEquipment.effect ? "Effect\n" + selectedEquipment.effect + "\n\n" : "";
        descriptionText += selectedEquipment.cancellation ? "Cancellation\n" + selectedEquipment.cancellation + "\n\n" : "";

        this.setState({
          modalText: descriptionText,
          modalTitle: selectedEquipment.title
        });
      }

    }

    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  setToggleFalse = () => {
    this.setState({ toggleFalse: !this.state.toggleFalse });

  };


  setSections = sections => {
    //setting up a active section state
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {

    const unitItem = ARMY_UNIT.filter(item => item.titleId == section.unitId)[0];
    const unitSetItem = UNITLIST.filter(item => item.titleId == section.unitSetId)[0];

    let combinedSkill;
    if (unitSetItem.skillList) {
      combinedSkill = unitSetItem.skillList;
    } else {
      combinedSkill = [];
    }
    if (unitItem.unitSkill) {
      combinedSkill = unitItem.unitSkill.concat(combinedSkill);
    }


    let combinedEquipment;
    if (unitSetItem.equipmentList) {
      combinedEquipment = unitSetItem.equipmentList;
    } else {
      combinedEquipment = [];
    }
    if (unitItem.unitEquipment) {
      combinedEquipment = unitItem.unitEquipment.concat(combinedEquipment);
    }

    global.modalFunction = this.toggleModalVisibility;
    const gunLength = unitSetItem.gunList.length;
    const skillLength = combinedSkill ? combinedSkill.length : 0;
    const equipmentLength = combinedEquipment ? combinedEquipment.length : 0;
    let skillText = <Text></Text>;
    let equipmentText = <Text></Text>;
    let ltTokenImage;

    if (skillLength != 0) {
      skillText = <Text style={[styles.headerDetailText, { color: 'green' }]}>Skill: {combinedSkill.map((gunId, index) => <Text key={index}>{skillItem(gunId, index, skillLength, this.toggleModalVisibility)}</Text>)}</Text>;

      if (combinedSkill.includes('lt')) {
        ltTokenImage = <Image source={require('../assets/ltToken.png')} style={{ height: 20, width: 20 }} />;
      }
    }

    if (equipmentLength != 0) {
      equipmentText = <Text style={[styles.headerDetailText, { color: 'red' }]} >Equipment: {combinedEquipment.map((gunId, index) => <Text key={index}>{equipmentItem(gunId, index, equipmentLength, this.toggleModalVisibility)}</Text>)}</Text>;

    }


    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <View style={styles.headerTopTitle}>
          <Text style={styles.headerText}>{unitItem.shortTitle}</Text><TextInput style={{ height: '90%', width: 70, color: Color.mainBlack, textAlign: "right", borderBottomColor: Color.mainBlack, borderBottomWidth: 1, fontSize: 16 }} />
          <Text style={styles.headerSizeText}>{unitItem.size.toUpperCase()}{unitItem.isHackable == "TRUE" ? ', HA' : ''}{unitItem.isPeriperial == "TRUE" ? ', Per' : ''}</Text>
          <Button
            style={styles.headerRemoveButton}
            icon={
              <Icon
                name="trash"
                size={15}
                color="white"
              />
            }
            title=""
            buttonStyle={{ backgroundColor: 'red', borderRadius: -1 }}
            onPress={() => { removeUnitHandler(section.randomKey, unitSetItem); this.setToggleFalse(); }}
          />
        </View>
        <View style={styles.headerDetailContainer}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {ltTokenImage}
          </View>
          <View style={{ flex: 6, alignItems: "flex-start", paddingHorizontal: 5, paddingBottom: 5 }}>
            <View style={styles.headerDetailText} >
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
          <Cart data={section} toggleModalVisibility={global.modalFunction} />
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    // global.unitList = [{ unitId: '1', unitSetId: '4' }, { unitId: '2', unitSetId: '2' }];
    return (
      <View style={styles.container}>
        <ClickModal 
        modalVisible={this.state.modalVisible} 
        modalTitle={this.state.modalTitle} 
        toggleModalVisibility={this.toggleModalVisibility}
        modalText={this.state.modalText}
        />

        <View style={{ backgroundColor: Color.mainGrey, paddingHorizontal: 15, height:35,justifyContent:"center" }}>
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
            <Button title="export" onPress={this.writeToClipboard}
              buttonStyle={{ borderRadius: -1, height: '39px', width: '80px', marginLeft: 2 }} />
            <Button title="import" onPress={() => { this.readFromClipboard(); this.setToggleFalse(); }}
              buttonStyle={{ borderRadius: -1, height: '39px', width: '80px', marginLeft: 2 }} />

          </View>
          <View style={{ paddingHorizontal: 5 }}>
            <Text style={{ color: Color.mainWhite }}>import text</Text>
            <TextInput style={{ color: Color.mainWhite, borderBottomWidth: 1, borderColor: Color.mainWhite }} onChangeText={(text) => this.setState({ clibboardText: text })} />
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
  headerDetailText: {
    alignContent: "flex-start",
    paddingVertical: 2,
  },
  headerDetailContainer: {
    flexDirection: "row",
    backgroundColor: Color.mainWhite,
    paddingBottom: 5,
  },
  headerTopTitle: {
    backgroundColor: Color.mainWhite,
    flexDirection: "row",
  },
  headerRemoveButton: {
    flex: 1,
    height: 1,
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
    backgroundColor: Color.mainWhite,
    alignContent: "flex-start",
    paddingTop: 5,
  },
  headerText: {
    flex: 8,
    textAlign: "left",
    fontSize: 16,
    fontWeight: '500',
    color: Color.mainBlack,
    paddingLeft: 10,
    paddingTop: 3,
    textAlignVertical: "center",
  },
  headerSizeText: {
    flex: 1,
    textAlign: "right",
    fontSize: 14,
    color: Color.mainBlack,
    paddingRight: 7,
    paddingTop: 3,
    textAlignVertical: "center",
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
