import React, { useState } from 'react';
import { StyleSheet, View, Text, Button,Linking } from 'react-native';
import Colors from '../templates/Colors';
import i18n from 'i18n-js';


i18n.locale = global.language;
i18n.fallbacks = true;

const AllOrderScreen = props => {
    console.log(i18n.translations);
    const [lang, setLang] = useState(global.language);
    const setGlobalLanguage = (input) => {
        global.language = input;
        i18n.locale = global.language;
        setLang(input);
    }

    return (
        <View>
            <View style={styles.buttonContainer}>
                <Button style={styles.orderButton} title={i18n.t('all_order_screen.Teach Order')} onPress={() => props.navigation.navigate({ routeName: 'Teaching' })} />
                <Button style={styles.orderButton} title={i18n.t('all_order_screen.Action Summary')} onPress={() => props.navigation.navigate({ routeName: 'Order' })} />
                <Button style={styles.orderButton} title={i18n.t('all_order_screen.Donate')} onPress={() => { Linking.openURL('https://www.patreon.com/bePatron?u=12681304');}} />
                <Button style={styles.orderButton} title={i18n.t('all_order_screen.Report bug / Suggestion')} onPress={() => { Linking.openURL('https://discord.gg/aTSNesd');}} />
                <Button style={styles.orderButton} title={i18n.t('all_order_screen.Activity page/Change log')} onPress={() => { Linking.openURL('https://www.patreon.com/infinity_custom_app?fan_landing=true');}} />
                {/* <Button title="Turn order summary" onPress={()=>{}}/>
                <Button title="All keyword" onPress={()=>{}}/> */}
                
            </View>
            <View style={styles.laguageContainer}>
                <Button onPress={() => setGlobalLanguage('en')} title="ENG"/>
                <Button onPress={() => setGlobalLanguage('th')} title="TH"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    orderButton: {
        margin: 5,
    },
    laguageContainer: {
        flexDirection:"row",
    }
});
export default AllOrderScreen;