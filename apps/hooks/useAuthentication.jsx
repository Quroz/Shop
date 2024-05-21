import { auth, db } from "../../firebase"
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react"

export default function useAuthentication() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)

    const register = async (name, email, password) => {
        try {
            if (name === "" || email === "" || password === "") {
                Alert.alert(
                    "Invalid details",
                    "Please enter all the credentials",
                    [
                        { text: "OK" }
                    ],
                    { cancelable: false }
                );
            }
            setLoading(true)
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: user.email,
                password: password
            });
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