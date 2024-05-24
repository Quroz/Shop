import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign, MaterialIcons } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'
import { UserDataContext } from '../Context/UserDataContext'
import { Entypo } from 'react-native-vector-icons'
import { ScrollView } from 'react-native'

const AddAddressScreen = () => {
    const navigation = useNavigation()
    const { userAddress } = useContext(UserDataContext)

    console.log(userAddress[0])
    return (
        <SafeAreaView>
            <View style={{
                backgroundColor: "#00CED1",
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                gap: 10
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    padding: 12,
                    marginHorizontal: 7
                }}>
                    <AntDesign
                        style={{ paddingLeft: 10 }}
                        name="search1"
                        size={22}
                        color="black"
                    />
                    <TextInput placeholder='Search for a address' style={{ width: "100%", marginLeft: 10 }} />
                </View>
            </View>
            <ScrollView style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Addresses</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Address")}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 10,
                        borderColor: "#D0D0D0",
                        borderWidth: 1,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        paddingVertical: 7,
                        paddingHorizontal: 5,
                    }}
                >
                    <Text>Add a new Address</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
                {userAddress.map((address, index) => (
                    <View style={{ borderWidth: 1, borderColor: "gray", marginTop: 10, padding: 10 }} key={index}>
                        <View style={{ gap: 5 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 15 }}>Name: {address?.fullName}</Text>
                                <Entypo name="location-pin" size={24} color="red" />
                            </View>
                            <Text style={{ fontSize: 15 }}>City: {address?.city}</Text>
                            <Text style={{ fontSize: 15 }}>Landmark: {address?.landmark}</Text>
                            <Text style={{ fontSize: 15 }}>Mobile Number: {address?.mobileNumber}</Text>
                            <Text style={{ fontSize: 15 }}>Street number: {address?.streetNumber}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

        </SafeAreaView>
    )
}

export default AddAddressScreen

const styles = StyleSheet.create({})