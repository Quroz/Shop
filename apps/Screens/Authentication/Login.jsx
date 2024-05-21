import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"

const Login = () => {
    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: "white", padding: 20, flex: 1 }}>
            <View style={{ marginTop: 20, alignItems: "center" }}>
                <Image source={{ uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png" }} style={{ width: 150, height: 100 }} />
            </View>
            <ScrollView>
                <KeyboardAvoidingView>
                    <Text style={{ color: "#041E42", fontSize: 17, fontWeight: "bold", textAlign: "center" }}>
                        Login In to your Account
                    </Text>

                    <View style={{ marginTop: 70 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: "#D0D0D0", paddingHorizontal: 5, paddingVertical: 17, borderRadius: 4 }}>
                            <MaterialIcons
                                style={{ marginLeft: 8 }}
                                name="email"
                                size={24}
                                color="gray"
                            />
                            <TextInput placeholder='Enter your email' style={{ width: "100%" }} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: "#D0D0D0", paddingHorizontal: 5, paddingVertical: 17, borderRadius: 4, marginTop: 25 }}>
                            <AntDesign
                                name="lock1"
                                size={24}
                                color="gray"
                                style={{ marginLeft: 8 }}
                            />
                            <TextInput placeholder='Enter your password' secureTextEntry={true} style={{ width: "100%" }} />
                        </View>
                    </View>
                </KeyboardAvoidingView>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: "#007FFF", fontWeight: "bold" }}>Forgot Password</Text>
                </View>

                <View style={{ marginTop: 70 }}>
                    <TouchableOpacity style={{
                        width: 200,
                        backgroundColor: "#FEBE10",
                        borderRadius: 6,
                        marginLeft: "auto",
                        marginRight: "auto",
                        padding: 15
                    }}>
                        <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 17 }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ marginTop: 15, color: "gray", fontWeight: "bold", textAlign: "center" }}>Don't have an account? Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})