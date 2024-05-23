import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDoc, doc, addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../firebase"
import { Alert } from 'react-native';

export const UserDataContext = createContext();


export const UserDataProvider = ({ children }) => {

    const [userAddress, setUserAddress] = useState([])

    const addUserAddress = async (country, fullName, mobileNumber, city, streetNumber, landmark, pincode) => {

        if (!country || !fullName || !mobileNumber || !city || !streetNumber || !landmark || !pincode) {
            return Alert.alert("Please fill all the fields")
        }

        try {
            const userId = await AsyncStorage.getItem("isLoggedIn")
            const addressesCollectionRef = collection(db, "addresses");
            await addDoc(addressesCollectionRef, {
                country,
                fullName,
                mobileNumber,
                city,
                streetNumber,
                landmark,
                pincode,
                userId
            });
            setUserAddress(prevAddresses => [
                ...prevAddresses,
                { id: addressDocRef.id, country, fullName, mobileNumber, city, streetNumber, landmark, pincode, userId }
            ]);
        } catch (error) {
            console.log(error)
        }
    }

    const getUserAddreses = async () => {
        try {
            const userId = await AsyncStorage.getItem("isLoggedIn");
            const addressesCollectionRef = collection(db, "addresses");
            const q = query(addressesCollectionRef, where("userId", "==", userId));
            const addressesSnapshot = await getDocs(q);

            const addresses = addressesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUserAddress(addresses);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserAddreses()
    }, [])

    return (
        <UserDataContext.Provider value={{ addUserAddress, userAddress }}>
            {children}
        </UserDataContext.Provider>
    );
};
