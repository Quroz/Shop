import { auth, db } from "../../firebase"
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import useStorage from "./useStorage"

export default function useAuthentication() {
    const navigation = useNavigation();
    const { storeData } = useStorage()
    const [loading, setLoading] = useState(false)

    const register = async (name, email, password) => {
        try {
            setLoading(true)
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: user.email,
                password: password
            });
            await storeData("isLoggedIn", "true")
            navigation.reset({
                index: 0,
                routes: [{ name: 'Tabs' }]
            });
            setLoading(false)
        } catch (error) {
            Alert.alert(
                "Error",
                error.code,
                [
                    { text: "OK" }
                ],
                { cancelable: false }
            );
            setLoading(false)
        }
    }

    return { register, loading }
}