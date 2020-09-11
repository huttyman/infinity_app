import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Color from './templates/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <View style={styles.listContainer}>
        <View style={styles.troopTitle}>
          <Text style={styles.troopTitleText}>Fusiliers</Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.rowWidth}><Text>MOV</Text></View>
            <View style={styles.rowWidth}><Text>CC</Text></View>
            <View style={styles.rowWidth}><Text>BS</Text></View>
            <View style={styles.rowWidth}><Text>PH</Text></View>
            <View style={styles.rowWidth}><Text>WIP</Text></View>
            <View style={styles.rowWidth}><Text>ARM</Text></View>
            <View style={styles.rowWidth}><Text>BTS</Text></View>
            <View style={styles.rowWidth}><Text>W</Text></View>
            <View style={styles.rowWidth}><Text>S</Text></View>
            <View style={styles.rowWidth}><Text>AVA</Text></View>
          </View>
          <View style={styles.underline}></View>
          <View style={styles.rowContainer}>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>4-4</Text></View>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>13</Text></View>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>12</Text></View>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>10</Text></View>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>12</Text></View>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>1</Text></View>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>0</Text></View>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>1</Text></View>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>2</Text></View>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>T</Text></View>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.troopTitle}>
          <Text style={styles.troopTitleText}>Multi Sniper (Anti-materiel Mode)</Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.rowWidth}><Text>Dam</Text></View>
            <View style={styles.rowWidth}><Text>B</Text></View>
            <View style={styles.rowWidth}><Text>Ammo</Text></View>
            <View style={styles.rowWidth}><Text>Save</Text></View>
          </View>
          <View style={styles.underline}></View>
          <View style={styles.rowContainer}>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>PH</Text></View>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>1</Text></View>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>N</Text></View>
            <View style={styles.rowWidth}><Text style={styles.rowBodyText}>Arm</Text></View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.rowWidth}><Text>Short</Text></View>
            <View style={styles.rowWidth}><Text>Medium</Text></View>
            <View style={styles.rowWidth}><Text>Long</Text></View>
            <View style={styles.rowWidth}><Text>Max</Text></View>
          </View>
          <View style={styles.underline}></View>
          <View style={styles.rowContainer}>
            <View style={[styles.rowWidth, { backgroundColor: Color.rangeYellow }]}><Text style={styles.rowBodyText}>0-8" -3</Text></View>
            <View style={[styles.rowWidth, { backgroundColor: Color.rangeGreen }]}><Text style={styles.rowBodyText}>8-24" +3</Text></View>
            <View style={[styles.rowWidth, { backgroundColor: Color.rangeYellow }]}><Text style={styles.rowBodyText}>24-40" -3</Text></View>
            <View style={[styles.rowWidth, { backgroundColor: Color.rangeRed }]}><Text style={styles.rowBodyText}>40-48" -6</Text></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    paddingHorizontal: '3%',
    width: '100%',
  },
  cardContainer: {
    width: '100%',
    margin: 10,
    padding: 10,
    alignItems: "center"
  },
  underline: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: "center",

  },
  troopTitle: {
    padding: 10,
    backgroundColor: Color.mainGrey,
    width: '100%',

  },
  troopTitleText: {
    fontSize: 18,
    color: 'white',
  },
  rowBodyText: {
    fontWeight: "bold",

  },
  rowHeaderText: {

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  listContainer: {
    width: '100%',
    alignItems: "center",
  },
  rowContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: "center",

  },
  rowWidth: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: "center",
  }

});
