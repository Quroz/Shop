import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from 'react-native-vector-icons'
import { UserDataContext } from "../Context/UserDataContext"

const Modal = ({ setModalVisible, modalVisible }) => {
    const navigation = useNavigation()
    const { userAddress } = useContext(UserDataContext)

    return (
        <BottomModal
            onBackdropPress={() => setModalVisible(!modalVisible)}
            swipeDirection={["up", "down"]}
            swipeThreshold={200}
            modalAnimation={
                new SlideAnimation({
                    slideFrom: "bottom",
                })
            }
            onHardwareBackPress={() => setModalVisible(!modalVisible)}
            visible={modalVisible}
            onTouchOutside={() => setModalVisible(!modalVisible)}
        >
            <ModalContent style={{ width: "100%", height: 400 }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Choose your Location</Text>
                    <Text style={{ color: "gray", marginTop: 5, width: 300 }}>Select a delivery location to see product availability and delivery options</Text>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: "lightgray", width: 150, height: 150, marginTop: 20, justifyContent: "center" }}
                        onPress={() => { navigation.navigate("Add-address"); setModalVisible(!modalVisible) }}
                    >
                        <Text style={{
                            textAlign: "center",
                            color: "#0066b2",
                            fontWeight: "bold",
                        }}>Add an Address or pick-up point</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 15, flexDirection: "row", gap: 2, alignItems: "center" }}>
                        <Ionicons name="locate-sharp" size={22} color="#0066b2" />
                        <Text style={{ color: "#0066b2", fontWeight: "500" }}>
                            Use My Currect location
                        </Text>
                    </TouchableOpacity>
                </View>

            </ModalContent>
        </BottomModal>
    )
}

export default Modal
