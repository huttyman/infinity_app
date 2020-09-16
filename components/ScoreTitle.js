import React, { useContext } from 'react';
import {Text} from 'react-native';
import { ScoreContext } from '../App';
import Color from '../templates/Colors';


const ScoreTitle = props => {
      const scoreContext = useContext(ScoreContext);
      return(
            
        <Text style={{textAlign:"right", color:Color.mainWhite, fontSize:16}} >
            Unit: <Text style={{fontWeight:"bold"}}>0 </Text> 
      SWC: <Text style={{fontWeight:"bold"}}>{scoreContext.state.swc}/6 </Text> 
            Point: <Text style={{fontWeight:"bold"}}>{scoreContext.points}/30 </Text>
        </Text>
      );
};

export default ScoreTitle;
