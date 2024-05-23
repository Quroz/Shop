import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const AddressScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "#00CED1", padding: 25 }} />
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Add a new Address</Text>
            </View>
        </SafeAreaView>
    )
}

export default AddressScreen

const styles = StyleSheet.create({})