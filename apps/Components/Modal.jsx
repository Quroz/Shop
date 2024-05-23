import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";

const Modal = ({ setModalVisible, modalVisible }) => {
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


            </ModalContent>
        </BottomModal>
    )
}

export default Modal
