/*Example of Collapsible - Accordion - Expandable View in React Native*/
import React, { useState } from 'react';
//import react in our project
import {
  Button,
  StyleSheet,
} from 'react-native';
import AllCartNavigator from './navigation/AllCartNavigator';

global.unitList = [];

export const ScoreContext = React.createContext();


export default function App() {

  const [scoreContext, setScoreContext] = useState({ points: 1, swc: 3, unit: 0 });
  const [pointContext, setPointContext] = useState(0);

  const addSWCHandler = (input) => {
    console.log("old");
    console.log(scoreContext)

    let tempScore = scoreContext;
    tempScore.swc = scoreContext.swc + input;
    setScoreContext(tempScore);
  };

  const addSWCHandler_but = (input) => {
    console.log("old");
    console.log(scoreContext)

    let tempScore = scoreContext;
    tempScore.swc = scoreContext.swc + input;
    setScoreContext(tempScore);
    
  };

  const addPointsHandler = (input) =>{
     console.log("vv");
     setPointContext(input+pointContext);
  };


  return (
    <ScoreContext.Provider value={{ state: scoreContext,points: pointContext, addSWCHandler: addSWCHandler,addPointContext:addPointsHandler }}>
      <AllCartNavigator />
    </ScoreContext.Provider>
  );
};

