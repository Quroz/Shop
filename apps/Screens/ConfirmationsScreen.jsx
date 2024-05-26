import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useContext } from 'react'
import { UserDataContext } from '../Context/UserDataContext';
import Options from '../Components/Options';
import AddressPage from "../Components/Confirmation/AddressPage"
import DeliveryPage from '../Components/Confirmation/DeliveryPage';


const ConfirmationsScreen = () => {

    const [currentOption, setCurrentOption] = useState(0)
    const [addressOption, setAddressOption] = useState(null)
    const [deliveryOption, setDeliveryOption] = useState(false)
    const { userAddress } = useContext(UserDataContext)

    console.log(userAddress)
    console.log(currentOption)

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Options currentOption={currentOption} />
            {currentOption === 0 && (
                <AddressPage userAddress={userAddress} setCurrentOption={setCurrentOption} addressOption={addressOption} setAddressOption={setAddressOption} />
            )}
            {currentOption === 1 && (
                <DeliveryPage setDeliveryOption={setDeliveryOption} deliveryOption={deliveryOption} setCurrentOption={setCurrentOption} />
            )}
        </View>
    )
}

export default ConfirmationsScreen

const styles = StyleSheet.create({})