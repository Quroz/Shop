import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Options = ({ currentOption }) => {
    return (
        <View style={{ padding: 10, marginTop: 80, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
            <View style={{ alignItems: "center", gap: 10 }}>
                {currentOption > 0 ? <AntDesign name="checkcircle" size={40} color="green" /> : <View style={{ backgroundColor: "lightgray", width: 40, height: 40, borderRadius: 99, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>1</Text>
                </View>}
                <Text>Address</Text>
            </View>
            <View style={{ alignItems: "center", gap: 10 }}>
                {currentOption > 1 ? <AntDesign name="checkcircle" size={40} color="green" /> : <View style={{ backgroundColor: "lightgray", width: 40, height: 40, borderRadius: 99, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>2</Text>
                </View>}
                <Text>Delivery</Text>
            </View>
            <View style={{ alignItems: "center", gap: 10 }}>
                {currentOption > 2 ? <AntDesign name="checkcircle" size={40} color="green" /> : <View style={{ backgroundColor: "lightgray", width: 40, height: 40, borderRadius: 99, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>3</Text>
                </View>}
                <Text>Payment</Text>
            </View>
            <View style={{ alignItems: "center", gap: 10 }}>
                {currentOption > 3 ? <AntDesign name="checkcircle" size={40} color="green" /> : <View style={{ backgroundColor: "lightgray", width: 40, height: 40, borderRadius: 99, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>4</Text>
                </View>}
                <Text>Place Order</Text>
            </View>
        </View>
    )
}

export default Options

const styles = StyleSheet.create({})