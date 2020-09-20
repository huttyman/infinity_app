import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
  } from 'react-native';

import Modal from 'modal-react-native-web';

const ClickModal = props =>{
    return(
        <Modal
          animationType="fade"
          transparent={true}
          visible={props.modalVisible}
          ariaHideApp={false}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalTouch}>


                <View style={{flexDirection:"row"}}>
                  <Text style={styles.modalTextTitleStyle}>{props.modalTitle}</Text>
                  <TouchableOpacity
                    style={{ height: "100%", justifyContent:"flex-end",alignItems:"flex-end",flex:1 }}
                    onPress={() => {
                       props.toggleModalVisibility("fdfsd", "skill");
                    }}
                  >
                    <Text  style={styles.modalTextTitleStyle} >
                      X
                      </Text>
                  </TouchableOpacity>
                </View>
                <ScrollView>
                  <View style={{ height: "100%" }}>
                    <Text style={styles.modalTextStyle}>{props.modalText}</Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
          <View style={styles.backgroundTrans}>

          </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        height: '90%',
        zIndex: 1,
      },
      modalView: {
        alignItems: "center",
        marginVertical: "auto",
        height: "100%",
      },
      modalTextStyle: {
        fontSize: 16,
      },
      modalTextTitleStyle: {
        paddingVertical: 5,
        fontWeight: "bold",
        fontSize: 16,
      },
      modalTouch: {
        backgroundColor: "white",
        minWidth: "50%",
        maxWidth: "90%",
        borderRadius: 8,
        padding: 10,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        maxHeight: "70%",
        marginVertical: "auto",
        elevation: 14,
      },
      backgroundTrans: {
        backgroundColor: "grey",
        marginTop: -700,
        height: 800,
        opacity: 0.4,
        zIndex: 0,
      },
});

export default ClickModal;