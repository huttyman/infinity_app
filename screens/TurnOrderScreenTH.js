import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import Colors from '../templates/Colors';

const RedText = props =>{
    return(
    <Text style={{color:'red'}} >{props.children}</Text>
    );
};
const Bold = props =>{
    return(
    <Text style={{fontWeight:"bold"}} >{props.children}</Text>
    );
};

const TurnOrderScreenTH = props => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerText}>
                    <Text style={{textDecorationLine:"underline"}}><Bold>Turn Order</Bold></Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.bodyTextTopic}>1.</Text>
                            <Text style={styles.bodyTextDesc}>นับจำนวน<RedText>Order</RedText>ทั้งหมดที่มีในสนาม</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.bodyTextTopic}>2.</Text>
                            <Text style={styles.bodyTextDesc}>เลือกว่าจะให้<RedText>Order</RedText>กับUnitตัวไหน (ให้ซ้ำตัวเดิมได้).</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>2.1</Text>
                            <Text style={styles.bodyTextDesc}>ประกาศ<Bold>first action</Bold>(เช่น ถ้าเดิน ให้วางมินิที่ปลายทางที่จะเดิน หรือ ถ้ายิง ก็ประกาศว่าจะยิงใครด้วยปืนอะไร เป้นต้น).</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>2.2</Text>
                            <Text style={styles.bodyTextDesc}><RedText>ถามฝั่งตรงข้ามว่า ARO ไหม</RedText> (ประกาศได้เฉพาะตัวที่เห็นunitที่เราใช้เท่านั้น หากไม่ประกาศจะหมดสิทธิ์ประกาศ ARO จนหมดเทิรน).</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>2.3</Text>
                            <Text style={styles.bodyTextDesc}>ประกาศ<Bold>second action.</Bold></Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>2.4</Text>
                            <Text style={styles.bodyTextDesc}><RedText>ถามฝั่งตรงข้ามว่า ARO ไหม</RedText> (ได้เฉพาะตัวที่พึ่งเห็นunitเราใน second action และ ไม่เห้นเราในfirst action เท่านั้น).</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.indent}></Text>
                            <Text style={styles.bodyTextTopic}>2.5</Text>
                            <Text style={styles.bodyTextDesc}><Bold>Resolve</Bold> – <RedText>ทอยเต๋าทั้งหมด</RedText> ที่ทำใน 2action ที่ประกาศไว้ (เราจะสามารถวัดไม้บรรทัด พร้อม +/- mod ในstepนี้เท่านั้น).</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.bodyTextTopic}>3.</Text>
                            <Text style={styles.bodyTextDesc}>กลับไปยังข้อ2จนกว่า Order เราจะหมด (สามารถใช้หรือไม่ใช้ <RedText>lieutenant order</RedText>ก็ได้).</Text>
                        </View>
                        <View style={styles.bodyLine}>
                            <Text style={styles.bodyTextTopic}>4.</Text>
                            <Text style={styles.bodyTextDesc}><Bold>End turn</Bold> (เช็ค End mission goal ว่าเกมจบหรือยัง)</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    headerText: {
        padding: 15,
    },
    bodyContainer: {
        paddingHorizontal: 5,
    },
    bodyLine: {
        flexDirection: "row",
        paddingBottom: 5,
    },
    bodyTextTopic: {
        width: 35,
        textAlign: "center",
        fontWeight: "bold",
        paddingRight:0,
    },
    bodyTextDesc: {
        flex: 8,
    },
    indent: {
        paddingLeft: 20
    },
    container: {
        backgroundColor: 'white',
        height:screen.height,
        
    },

});

export default TurnOrderScreenTH;