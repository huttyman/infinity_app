import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Linking } from 'react-native';
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
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
            
            <Button style={styles.orderButton} title={i18n.t('all_order_screen.Explain Unit Stat')} onPress={() => props.navigation.navigate({ routeName: 'ExplainStat' })} />
                {/* <Button style={styles.orderButton} title={i18n.t('all_order_screen.How to roll dice?')} onPress={() => {Linking.openURL('https://www.facebook.com/wgcinfinitythailand/photos/ms.c.eJw9jssJAFEIAzta~;Ef7b2xByTsOyWgUPjEdYSLu~;ulyGtK9pskhXRAXcl9u5Fq~;lDzLSb9sfWO~;8vLHvvca5Nq~_Pv~;~_NfvQy7kXsveCPm6vci9yWYZ8e4N7MZfn4~;0H5q3LNT~_~_Nz3t.bps.a.173949520867032/173949844200333/?type=3&theater'); }} /> */}
                <Button style={styles.orderButton} title={i18n.t('all_order_screen.Teach Order')} onPress={() => props.navigation.navigate({ routeName: 'Teaching' })} />
                <Button style={styles.orderButton} title="Action tutorial" onPress={() => props.navigation.navigate({ routeName: 'MoveTutorial' })} />
                {/* <Button style={styles.orderButton}  title={i18n.t('all_order_screen.Action Summary')} onPress={() => props.navigation.navigate({ routeName: 'Order' })} /> */}
                {/* <Button title="Turn order summary" onPress={()=>{}}/>
                <Button title="All keyword" onPress={()=>{}}/> */}

            </View>

            <View style={styles.donateButtonContainer}>

                <View style={styles.laguageContainer}>
                    <Button  onPress={() => setGlobalLanguage('en')} title="ENG" />
                    <Button  onPress={() => setGlobalLanguage('th')} title="TH" />
                </View>
                <Button style={styles.orderButton}  title={i18n.t('all_order_screen.Donate')} onPress={() => { Linking.openURL('https://www.patreon.com/bePatron?u=12681304'); }} />
                <Button style={styles.orderButton}  title={i18n.t('all_order_screen.Report bug / Suggestion')} onPress={() => { Linking.openURL('https://discord.gg/aTSNesd'); }} />
                <Button style={styles.orderButton}  title={i18n.t('all_order_screen.Activity page/Change log')} onPress={() => { Linking.openURL('https://www.patreon.com/infinity_custom_app?fan_landing=true'); }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    orderButton: {
        margin: 5,
    },
    laguageContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    buttonContainer: {
    },
    donateButtonContainer: {
        flex: 1,
        justifyContent: "flex-end"
    },
    orderButton:{

    },
});
export default AllOrderScreen;