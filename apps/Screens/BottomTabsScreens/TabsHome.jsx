import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/UserContext'
import { UserDataContext } from '../../Context/UserDataContext';
import { AntDesign, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { list, images, deals, offers } from "../../../data"
import { ImageSlider } from "react-native-image-slider-banner";
import { Dropdown } from 'react-native-element-dropdown';
import Modal from '../../Components/Modal';


const TabsHome = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const { userDetails } = useContext(UserContext);
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [value, setValue] = useState(null);
    const [categories, setCategories] = useState([
        { label: "All categories", value: "All" },
        { label: "Men's clothing", value: "men's clothing" },
        { label: "jewelery", value: "jewelery" },
        { label: "electronics", value: "electronics" },
        { label: "women's clothing", value: "women's clothing" },
    ]);

    const { addOrRemoveToCart } = useContext(UserDataContext)

    useEffect(() => {
        if (value == null || value === "All" || !categories.some(category => category.value === value)) {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(item => item.category === value));
        }
    }, [value, products, categories]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])


    return (
        <>
            <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
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
                        flex: 1,
                        marginHorizontal: 7
                    }}>
                        <AntDesign
                            style={{ paddingLeft: 10 }}
                            name="search1"
                            size={22}
                            color="black"
                        />
                        <TextInput placeholder='Search Amazon.in' style={{ width: "100%", marginLeft: 10 }} />
                    </View>
                    <TouchableOpacity>
                        <Feather name="mic" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ backgroundColor: "#AFEEEE", padding: 10, paddingVertical: 12, flexDirection: "row", alignItems: "center", gap: 5 }}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Ionicons name="location-outline" size={24} color="black" />
                    <Text style={{ fontWeight: "bold" }}>Add a delivery address</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                </TouchableOpacity>

                <View style={{ marginTop: 10 }}>
                    <FlatList
                        data={list}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity key={index} style={{ gap: 10, alignItems: "center", marginLeft: 15 }}>
                                <Image source={{ uri: item.image }} style={{ width: 60, height: 60 }} />
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={{ marginTop: -25 }}>
                    <ImageSlider
                        data={images}
                        autoPlay={false}
                        closeIconColor="#fff"
                    />
                </View>

                <ScrollView style={{ flex: 1, marginTop: -40 }}>
                    <View style={{ padding: 10 }}>

                        <Text style={{ fontSize: 22, fontWeight: "600" }}>Trending Deals of the week</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            {deals.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        marginVertical: 10,
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        style={{ width: 180, height: 180, resizeMode: "contain" }}
                                        source={{ uri: item?.image }}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View style={{ borderColor: "gray", borderWidth: 2, marginTop: 15 }} />

                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Today's Deals</Text>

                        <FlatList
                            data={offers}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <View key={index} style={{ marginRight: 10 }}>
                                    <Image source={{ uri: item?.image }} style={{ width: 180, height: 180, resizeMode: "contain" }} />
                                    <View style={{ backgroundColor: "#E31837", width: "80%", marginLeft: "auto", marginRight: "auto", paddingHorizontal: 10, paddingVertical: 5, marginTop: 7, borderRadius: 4 }}>
                                        <Text style={{ fontWeight: "500", color: "white", textAlign: "center" }}>Up to {item?.offer}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                    <View style={{ borderColor: "gray", borderWidth: 2, marginTop: 15 }} />
                    <View style={{ padding: 10 }}>
                        <Dropdown
                            style={{
                                height: 50,
                                borderColor: 'gray',
                                borderWidth: 0.5,
                                borderRadius: 8,
                                paddingHorizontal: 8,
                                width: "50%"
                            }}
                            placeholderStyle={{ fontSize: 16 }}
                            selectedTextStyle={{ fontSize: 16 }}
                            inputSearchStyle={{
                                height: 40,
                                fontSize: 16
                            }}
                            iconStyle={{
                                width: 20,
                                height: 20,
                            }}
                            data={categories}
                            search
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                            }}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={'Select item'}
                            searchPlaceholder="Search..."
                            renderLeftIcon={() => (
                                <AntDesign
                                    style={{ marginRight: 5 }}
                                    name="Safety"
                                    size={20}
                                />
                            )}
                        />
                    </View>
                    <View style={{ flexWrap: "wrap", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>

                        {filteredProducts?.map((item, index) => (
                            <View key={index} style={{ marginVertical: 20 }}>
                                <Image source={{ uri: item.image }} style={{ width: 150, height: 150 }} />
                                <Text numberOfLines={1} style={{ width: 150, marginTop: 5 }}>{item.title}</Text>
                                <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.price}</Text>
                                    <Text style={{ fontWeight: "bold", color: "#FFC72C" }}>{item.rating.rate} ratings</Text>
                                </View>
                                <TouchableOpacity style={{ backgroundColor: "#FFC72C", borderRadius: 99, paddingHorizontal: 10, paddingVertical: 15, alignItems: "center", justifyContent: "center", marginTop: 5 }}
                                    onPress={() => addOrRemoveToCart(item, "add")}
                                >
                                    <Text style={{ fontSize: 15 }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
            <Modal setModalVisible={setModalVisible} modalVisible={modalVisible} />
        </>
    )
}

export default TabsHome


