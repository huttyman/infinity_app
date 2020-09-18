import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import  Colors  from '../templates/Colors';

const AllOrderScreen = props =>{
    return(
        <View>
            <View style={styles.buttonContainer}>
                <Button title="Teach Order" onPress={()=>props.navigation.navigate({ routeName: 'Teaching' })} />
                <Button title="Teach Order (Thai)" onPress={()=>props.navigation.navigate({ routeName: 'TeachingTH' })} />
                <Button title="Action Summary" onPress={()=>props.navigation.navigate({ routeName: 'Order' })} />
                {/* <Button title="Turn order summary" onPress={()=>{}}/>
                <Button title="All keyword" onPress={()=>{}}/> */}
            </View>
        </View>
    );
}

const styles=StyleSheet.create({

});
export default AllOrderScreen;