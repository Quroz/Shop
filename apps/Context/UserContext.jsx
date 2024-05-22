import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../../firebase"


export const UserContext = createContext();


export const UserProvider = ({ children }) => {

    const [userDetails, setUserDetails] = useState({})

    const getUserDetails = async () => {
        setUserDetails({})
        const id = await AsyncStorage.getItem("isLoggedIn")
        const userDocRef = doc(db, "users", id);
        const userDoc = await getDoc(userDocRef)
        setUserDetails(userDoc.data())
    }


    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <UserContext.Provider value={{ userDetails }}>
            {children}
        </UserContext.Provider>
    );
};
