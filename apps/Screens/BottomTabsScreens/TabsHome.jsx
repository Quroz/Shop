import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

const TabsHome = () => {

    const { userDetails } = useContext(UserContext);


    return (
        <View>
            <Text>TabsHome</Text>
        </View>
    )
}

export default TabsHome

const styles = StyleSheet.create({})