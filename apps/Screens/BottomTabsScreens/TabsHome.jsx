import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { AntDesign, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { list, images, deals, offers } from "../../../data"
import { ImageSlider } from "react-native-image-slider-banner";

const TabsHome = () => {

    const { userDetails } = useContext(UserContext);

    return (
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

            <View style={{ backgroundColor: "#AFEEEE", padding: 10, paddingVertical: 12, flexDirection: "row", alignItems: "center", gap: 5 }}>
                <Ionicons name="location-outline" size={24} color="black" />
                <Text style={{ fontWeight: "bold" }}>Deliver To Sujan - Bangalore 560024</Text>
                <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </View>

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
            </ScrollView>
        </SafeAreaView>
    )
}

export default TabsHome

const styles = StyleSheet.create({})