import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useStorage() {

    const storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
            console.log(key, value)
        } catch (e) {
            console.log(e)
        }
    }

    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value
            }
        } catch (e) {
            console.log(e)
        }
    }

    return { storeData, getData }
}