import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { Entypo } from 'react-native-vector-icons'
import { UserDataContext } from '../../Context/UserDataContext'

const AddressPage = ({ userAddress, setCurrentOption, addressOption, setAddressOption }) => {
    console.log(userAddress)
    const { removeUserAddress, getUserAddreses } = useContext(UserDataContext)

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Select Delivery Address</Text>
            <ScrollView>
                {userAddress.map((address, index) => (
                    <View style={{ borderWidth: 1, borderColor: "gray", marginTop: 10, padding: 10 }} key={index}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            {addressOption === index ? <TouchableOpacity style={{ borderWidth: 1, width: 20, height: 20, borderRadius: 99, alignItems: "center", justifyContent: "center" }}
                                onPress={() => setAddressOption(null)}
                            >
                                <Entypo name="check" size={15} color="green" />
                            </TouchableOpacity> : <TouchableOpacity style={{ borderWidth: 1, width: 20, height: 20, borderRadius: 99 }}
                                onPress={() => setAddressOption(index)}
                            >

                            </TouchableOpacity>}

                            <View style={{ gap: 5 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>Name: {address?.fullName}</Text>
                                    <Entypo name="location-pin" size={24} color="red" />
                                </View>
                                <Text style={{ fontSize: 15 }}>City: {address?.city}</Text>
                                <Text style={{ fontSize: 15 }}>Landmark: {address?.landmark}</Text>
                                <Text style={{ fontSize: 15 }}>Mobile Number: {address?.mobileNumber}</Text>
                                <Text style={{ fontSize: 15 }}>Street number: {address?.streetNumber}</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 4, padding: 5, borderColor: "lightgray" }}><Text>Edit</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 4, padding: 5, borderColor: "lightgray" }}
                                        onPress={() => removeUserAddress(address.id)}
                                    ><Text>Remove</Text></TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    onPress={() => setCurrentOption(currentOption => Math.min(4, currentOption + 1))}
                                    style={{
                                        backgroundColor: addressOption === null ? "lightgray" : "#008397",
                                        padding: 10,
                                        borderRadius: 20,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 10,
                                    }}
                                    disabled={addressOption === null}
                                >
                                    <Text style={{ textAlign: "center", color: "white" }}
                                    >
                                        Deliver to this Address
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default AddressPage

