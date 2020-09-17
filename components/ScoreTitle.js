import React, { useContext } from 'react';
import {Text} from 'react-native';
import { ScoreContext } from '../App';
import Color from '../templates/Colors';


const ScoreTitle = props => {

      return(
            
        <Text style={{textAlign:"right", color:Color.mainWhite, fontSize:16}} >
            Unit: <Text style={{fontWeight:"bold"}}>{global.unit} </Text> 
      SWC: <Text style={{fontWeight:"bold"}}>{global.swc}/6 </Text> 
            Point: <Text style={{fontWeight:"bold"}}>{global.points}/30 </Text>
        </Text>
      );
};

export default ScoreTitle;
