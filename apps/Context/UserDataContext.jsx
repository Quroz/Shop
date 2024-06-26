import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDoc, doc, addDoc, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from "../../firebase"
import { Alert } from 'react-native';

export const UserDataContext = createContext();


export const UserDataProvider = ({ children }) => {

    const [userAddress, setUserAddress] = useState([])
    const [cart, setCart] = useState([])
    const [loadingCart, setLoadingCart] = useState(false)


    useEffect(() => {
        const loadCart = async () => {
            setLoadingCart(true)
            const storageCart = await AsyncStorage.getItem("cart")
            if (storageCart) {
                setCart(JSON.parse(storageCart))
                return
            }
            return []
        }

        loadCart()
        setLoadingCart(false)
    }, [])


    const addOrRemoveToCart = async (product, action) => {
        setCart(prevCart => {
            let productExists = false;
            const updatedCart = prevCart.map(item => {
                if (item.description === product.description) {
                    productExists = true;
                    if (action === "add") {
                        return { ...item, amount: item.amount + 1 };
                    }
                    else if (action === "remove" && item.amount > 1) {
                        return { ...item, amount: item.amount - 1 };
                    }
                }
                return item;
            });

            if (!productExists) {
                updatedCart.push({ ...product, amount: 1 });
            }

            AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };


    const editCart = async (product, cartId) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
                if (item.id === cartId) {
                    return product
                }
                return item
            })
            AsyncStorage.setItem("cart", JSON.stringify(updatedCart))
            return updatedCart
        })
    }

    const removeFromCart = async (cartId) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.id !== cartId)
            AsyncStorage.setItem("cart", JSON.stringify(updatedCart))
            return updatedCart
        })
    }

    const emptyCart = async () => {
        setCart(prevCart => {
            AsyncStorage.setItem("cart", JSON.stringify([]))
            return []
        })
    }

    const addUserAddress = async (country, fullName, mobileNumber, city, streetNumber, landmark, pincode) => {

        if (!country || !fullName || !mobileNumber || !city || !streetNumber || !landmark || !pincode) {
            return Alert.alert("Please fill all the fields")
        }

        try {
            const userId = await AsyncStorage.getItem("isLoggedIn")
            const addressesCollectionRef = collection(db, "addresses");
            const addressDocRef = await addDoc(addressesCollectionRef, {
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
            Alert.alert("Address Added Successfully")
        } catch (error) {
            console.log(error)
        }
    }

    const removeUserAddress = async (addressId) => {
        try {
            const addressesCollectionRef = collection(db, "addresses");
            const addressDocRef = doc(addressesCollectionRef, addressId);
            await deleteDoc(addressDocRef);
            Alert.alert("Address Deleted Successfully")
            getUserAddreses()
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
        <UserDataContext.Provider value={{ addUserAddress, userAddress, cart, addOrRemoveToCart, editCart, removeFromCart, emptyCart, removeUserAddress, loadingCart }}>
            {children}
        </UserDataContext.Provider>
    );
};
