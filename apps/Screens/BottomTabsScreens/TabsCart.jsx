import { Text, View, ScrollView } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { UserDataContext } from '../../Context/UserDataContext'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"
import { ActivityIndicator } from 'react-native'

const TabsCart = () => {
    const { cart, addOrRemoveToCart, removeFromCart, loadingCart } = useContext(UserDataContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const navigation = useNavigation()

    useEffect(() => {
        const calculateTotalPrice = () => {
            let total = 0
            cart.forEach(item => {
                total += item.price
            })
            setTotalPrice(total.toFixed(2))
        }
        calculateTotalPrice()
    }, [cart])

    console.log(cart)
    console.log(loadingCart)
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                <View style={{ marginTop: 40, gap: 10 }}>
                    <Text style={{ fontSize: 22 }}>Subtotal: <Text style={{ fontWeight: "bold", fontSize: 22 }}>{totalPrice} $</Text></Text>
                    <Text>EMI Details Available</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: "#FFC72C", padding: 15, borderRadius: 5, marginTop: 15 }}
                    onPress={() => navigation.navigate("Confirmation")}
                >
                    <Text style={{ textAlign: "center" }}>Proceed to Buy ({cart.length}) items</Text>
                </TouchableOpacity>
            </View>
            <View style={{ borderColor: "lightgray", borderWidth: 1, marginTop: 20 }} />
            <View style={{ padding: 20, flex: 1 }}>
                {
                    cart.map(item => {
                        return (
                            <View key={item.id} style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                                <View style={{ alignItems: "center" }}>
                                    {loadingCart ? <ActivityIndicator size={"large"} /> : <Image source={{ uri: item?.image }} style={{ width: 140, height: 140, resizeMode: "contain" }} />}
                                    <View>
                                        <View style={{ flexDirection: "row", gap: 10, alignItems: "center", marginTop: 15 }}>
                                            <TouchableOpacity style={{ padding: 8, backgroundColor: item.amount === 1 ? "#f0f0f0" : "lightgray", alignItems: "center", justifyContent: "center", borderRadius: 4 }}
                                                onPress={() => addOrRemoveToCart(item, "remove")}
                                                disabled={item.amount === 1}
                                            >
                                                <AntDesign name="minus" size={24} color="black" />
                                            </TouchableOpacity>
                                            <Text>{item?.amount}</Text>
                                            <TouchableOpacity style={{ padding: 8, backgroundColor: "lightgray", alignItems: "center", justifyContent: "center", borderRadius: 4 }}
                                                onPress={() => addOrRemoveToCart(item, "add")}
                                            >
                                                <AntDesign name="plus" size={24} color="black" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: 150, gap: 5 }}>
                                    <Text numberOfLines={3}>{item?.description}</Text>
                                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>{item?.price} $</Text>
                                    <Text style={{ color: "green" }}>In Stock</Text>
                                    <TouchableOpacity style={{ padding: 5, backgroundColor: "lightgray", alignItems: "center", justifyContent: "center", borderRadius: 4, marginTop: 5 }}
                                        onPress={() => removeFromCart(item.id)}
                                    >
                                        <AntDesign name="delete" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView >
    )
}

export default TabsCart

