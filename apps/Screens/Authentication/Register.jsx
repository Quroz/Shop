import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useAuthentication from "../../hooks/useAuthentication";

const Register = () => {
    const navigation = useNavigation();
    const { register, loading } = useAuthentication();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        await register(name, email, password);
    };

    return (
        <View style={{ backgroundColor: "white", padding: 20, flex: 1 }}>
            <View style={{ marginTop: 20, alignItems: "center" }}>
                <Image source={{ uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png" }} style={{ width: 150, height: 100 }} />
            </View>
            <ScrollView>
                <KeyboardAvoidingView>
                    <Text style={{ color: "#041E42", fontSize: 17, fontWeight: "bold", textAlign: "center" }}>
                        Register a new account
                    </Text>

                    <View style={{ marginTop: 70 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: "#D0D0D0", paddingHorizontal: 5, paddingVertical: 17, borderRadius: 4 }}>
                            <MaterialIcons style={{ marginLeft: 8 }} name="person" size={24} color="gray" />
                            <TextInput placeholder='Enter your name' style={{ width: "100%" }} onChangeText={text => setName(text)} value={name} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: "#D0D0D0", paddingHorizontal: 5, paddingVertical: 17, borderRadius: 4, marginTop: 25 }}>
                            <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="gray" />
                            <TextInput placeholder='Enter your email' style={{ width: "100%" }} onChangeText={text => setEmail(text)} value={email} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: "#D0D0D0", paddingHorizontal: 5, paddingVertical: 17, borderRadius: 4, marginTop: 25 }}>
                            <AntDesign name="lock1" size={24} color="gray" style={{ marginLeft: 8 }} />
                            <TextInput placeholder='Enter your password' secureTextEntry={true} style={{ width: "100%" }} onChangeText={text => setPassword(text)} value={password} />
                        </View>
                    </View>
                </KeyboardAvoidingView>

                <View style={{ marginTop: 70 }}>
                    <TouchableOpacity style={{ width: 200, backgroundColor: "#FEBE10", borderRadius: 6, marginLeft: "auto", marginRight: "auto", padding: 15 }} onPress={handleRegister}>
                        {loading ? (
                            <ActivityIndicator color="white" />
                        ) : (
                            <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 17 }}>Register</Text>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ marginTop: 15, color: "gray", fontWeight: "bold", textAlign: "center" }}>Already have an account? Sign In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({});
