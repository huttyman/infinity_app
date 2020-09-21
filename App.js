/*Example of Collapsible - Accordion - Expandable View in React Native*/
import React from 'react';
//import react in our project

import AllCartNavigator from './navigation/AllCartNavigator';
import i18n from 'i18n-js';
import {TH_lang} from './assets/language/th';
import {EN_lang} from './assets/language/en';

i18n.translations = {
  en: EN_lang ,
  th: TH_lang
}

i18n.fallbacks = true;

global.unitList = [];
global.swc = 0;
global.points = 0;
global.unit = 0;
global.language = 'en';


export const ScoreContext = React.createContext();


export default function App() {
  return (
      <AllCartNavigator />
  );
};

