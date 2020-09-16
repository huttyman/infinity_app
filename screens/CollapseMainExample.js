/*Example of Collapsible - Accordion - Expandable View in React Native*/
import React, { Component, useContext } from 'react';
//import react in our project
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
//import basic react native components
import * as Animatable from 'react-native-animatable';
//import for the animation of Collapse and Expand
//import for the collapsible/Expandable view
import Accordion from 'react-native-collapsible/Accordion';
//import for the Accordion view
import {  ARMY_UNIT } from '../datas/data-unit';
import AllCart from '../components/AllCart';
import Color from '../templates/Colors'
import { ScoreContext } from '../App';
import ScoreTitle from '../components/ScoreTitle';
//Dummy content to show
//You can also use dynamic data by calling webservice



export default class CollapseMainExample extends Component {
  
  state = {
    //default active selector
    activeSections: [],
    //collapsed condition for the single collapsible
    collapsed: true,
    //multipleSelect is for the Multiple Expand allowed
    //true: You can expand multiple at a time
    //false: One can be expand at a time and other will be closed automatically
    multipleSelect: false,
  };



  toggleExpanded = () => {
    //Toggling the state of single Collapsible
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    //setting up a active section state
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive,{flexDirection:"row",backgroundColor:Color.mainBlack}]}
        transition="backgroundColor">
          <View style={{zIndex:1,backgroundColor:Color.mainBlack,borderRadius:45,maxWidth:86,minWidth:86,flex:1,borderWidth:7,borderColor:Color.mainBlack}}>
            <Image source={require('../assets/logo_1.svg')} style={{height:70,width:70}}/>
          </View>
          <View style={{zIndex:0, margin:2,backgroundColor:Color.mainGrey,flex:6,alignItems:"flex-start",marginLeft:-40, paddingLeft:50,paddingVertical:20,justifyContent:"center"}}>
            <Text style={styles.headerText}>{section.shortTitle}</Text>
          </View>
          <View style={{margin:2,backgroundColor:Color.mainGrey,borderTopRightRadius:13,borderBottomRightRadius:13,flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text style={[styles.headerText,{textTransform:"uppercase"}]}>{section.size}</Text>
          </View>
      
      </Animatable.View>
    );
  };

  renderContent = (section, _, isActive) => {
    //Accordion Content view
    
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          style={{ textAlign: 'center' }}>
          <AllCart data={section} navigation={this.props.navigation} />
        </Animatable.Text>
      </Animatable.View>
    );
  };

  render() {
    const { multipleSelect, activeSections } = this.state;
    const filterArmy = ARMY_UNIT.filter(army => army.attr_armyId == '1');
  
    return (
      <View style={styles.container}>
        {/* score count header*/}
        <View style={{backgroundColor:Color.mainGrey, padding:15}}>
           <ScoreTitle/>
        </View>
        <ScrollView contentContainerStyle={{ paddingTop: 5 }}>
          
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

          {/*Code for Accordion/Expandable List starts here*/}
          <Accordion
            activeSections={activeSections}
            //for any default active section
            sections={filterArmy}
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
    backgroundColor: '#F5FCFF',
    padding: 3,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: Color.mainWhite,
  },
  content: {
    width:'100%',
    backgroundColor: Color.mainWhite,
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
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
    color:Color.mainWhite,
  },
});
