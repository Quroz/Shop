import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from 'react-native-vector-icons'

const DeliveryPage = ({ setDeliveryOption, deliveryOption, setCurrentOption }) => {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>Choose your delivery options</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 1, borderColor: "lightgray", borderRadius: 4, padding: 10 }}>
                {deliveryOption ? <TouchableOpacity style={{ borderWidth: 1, width: 20, height: 20, borderRadius: 99, alignItems: "center", justifyContent: "center" }}
                    onPress={() => setDeliveryOption(false)}
                >
                    <Entypo name="check" size={15} color="green" />
                </TouchableOpacity> : <TouchableOpacity style={{ borderWidth: 1, width: 20, height: 20, borderRadius: 99 }}
                    onPress={() => setDeliveryOption(true)}
                >

                </TouchableOpacity>}
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontWeight: "bold", color: "green" }}>Tomorrow by 10pm</Text><Text> - FREE delivery with your</Text>
                    </View>
                    <Text> Prime membership</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => setCurrentOption(currentOption => Math.min(4, currentOption + 1))}
                style={{
                    backgroundColor: "#FFC72C",
                    padding: 10,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 15,
                }}
            >
                <Text>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DeliveryPage

const styles = StyleSheet.create({})