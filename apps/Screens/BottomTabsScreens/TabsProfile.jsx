import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import useAuthentication from '../../hooks/useAuthentication'


const TabsProfile = () => {
    const { userDetails } = useContext(UserContext)
    const { logout } = useAuthentication()
    console.log(userDetails)

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", height: 100, backgroundColor: "#00CED1", }}>
                <View style={{ marginTop: 20, alignItems: "center" }}>
                    <Image source={{ uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png" }} style={{ width: 150, height: 100 }} />
                </View>
            </View>
            <View style={{ padding: 10, flex: 1, backgroundColor: "white" }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Welcome back, {userDetails.email.split("@")[0]}</Text>

                <View style={{ gap: 20, marginTop: 40, }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <TouchableOpacity style={{
                            padding: 10,
                            backgroundColor: "#E0E0E0",
                            borderRadius: 25, alignItems: "center", justifyContent: "center", flex: 1
                        }}>
                            <Text>Your orders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            padding: 10,
                            backgroundColor: "#E0E0E0",
                            borderRadius: 25, alignItems: "center", justifyContent: "center", flex: 1
                        }}>
                            <Text>Your Account</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <TouchableOpacity style={{
                            padding: 10,
                            backgroundColor: "#E0E0E0",
                            borderRadius: 25, alignItems: "center", justifyContent: "center", flex: 1
                        }}>
                            <Text>Buy Again</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            padding: 10,
                            backgroundColor: "#E0E0E0",
                            borderRadius: 25, alignItems: "center", justifyContent: "center", flex: 1
                        }}
                            onPress={logout}
                        >
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default TabsProfile

const styles = StyleSheet.create({})