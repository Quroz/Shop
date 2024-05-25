import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { UserDataContext } from '../Context/UserDataContext';
import Options from '../Components/Options';
import AddressPage from './Confirmation/AddressPage';


const ConfirmationsScreen = () => {

    const [currentOption, setCurrentOption] = useState(0)
    const [addressOption, setAddressOption] = useState(null)
    const { userAddress } = useContext(UserDataContext)

    console.log(userAddress)
    console.log(currentOption)

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Options currentOption={currentOption} />
            {currentOption === 0 && (
                <AddressPage userAddress={userAddress} setCurrentOption={setCurrentOption} addressOption={addressOption} setAddressOption={setAddressOption} />
            )}
        </View>
    )
}

export default ConfirmationsScreen

const styles = StyleSheet.create({})