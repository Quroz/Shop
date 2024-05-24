import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useContext } from 'react'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { UserDataContext } from '../Context/UserDataContext'
import { useNavigation } from '@react-navigation/native'

const AddressScreen = () => {
    const [country, setCountry] = useState("")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [pincode, setPincode] = useState("")
    const [landmark, setLandmark] = useState("")

    const { addUserAddress } = useContext(UserDataContext)

    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "#00CED1", padding: 25 }} />
            <ScrollView>
                <KeyboardAvoidingView>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Add a new Address</Text>
                        <TextInput placeholder='Country' style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginTop: 15 }}
                            onChangeText={text => setCountry(text)} value={country}
                        />
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Full name</Text>
                            <TextInput placeholder='' style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginTop: 15 }}
                                onChangeText={text => setName(text)} value={name}
                            />
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Mobile number</Text>
                            <TextInput placeholder='' style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginTop: 15 }}
                                onChangeText={text => setNumber(text)} value={number}
                                keyboardType='numeric'
                            />
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>City</Text>
                            <TextInput placeholder='' style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginTop: 15 }}
                                onChangeText={text => setCity(text)} value={city}
                            />
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Street number</Text>
                            <TextInput placeholder='' style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginTop: 15 }}
                                onChangeText={text => setStreet(text)} value={street}
                                keyboardType='numeric'
                            />
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Landmark</Text>
                            <TextInput placeholder='' style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginTop: 15 }}
                                onChangeText={text => setLandmark(text)} value={landmark}
                            />
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Pincode</Text>
                            <TextInput placeholder='' style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginTop: 15 }}
                                onChangeText={text => setPincode(text)} value={pincode}
                                keyboardType='numeric'
                            />
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#FFC72C", padding: 20, alignItems: "center", justifyContent: "center", borderRadius: 5, marginTop: 15 }}
                            onPress={() => { addUserAddress(country, name, number, city, street, landmark, pincode); navigation.goBack() }}
                        >
                            <Text style={{ fontWeight: "bold" }}>Add Address</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView >
    )
}

export default AddressScreen

const styles = StyleSheet.create({})