import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabsHome from "../Screens/BottomTabsScreens/TabsHome"
import TabsCart from '../Screens/BottomTabsScreens/TabsCart';
import TabsProfile from "../Screens/BottomTabsScreens/TabsProfile"
import { Text } from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { UserDataContext } from '../Context/UserDataContext';
import { useContext } from 'react';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {

    const { cart } = useContext(UserDataContext)

    return (
        <Tab.Navigator>
            <Tab.Screen name="Tabs-home" component={TabsHome} options={{
                headerShown: false, tabBarLabel: ({ color }) => (
                    <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Home</Text>
                ),
                tabBarLabelStyle: { color: "#008E97" },
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Entypo name="home" size={24} color="#008E97" />
                    ) : (
                        <AntDesign name="home" size={24} color="black" />
                    ),
            }} />
            <Tab.Screen name="Tabs-profile" component={TabsProfile} options={{
                headerShown: false, tabBarLabel: ({ color }) => (
                    <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Profile</Text>
                ),
                tabBarLabelStyle: { color: "#008E97" },
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Ionicons name="person" size={24} color="#008E97" />
                    ) : (
                        <Ionicons name="person-outline" size={24} color="black" />
                    ),
            }} />
            <Tab.Screen name="Tabs-cart" component={TabsCart} options={{
                headerShown: false, tabBarLabel: ({ color }) => (
                    <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Cart</Text>
                ),
                tabBarLabelStyle: { color: "#008E97" },
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <View>
                            <View style={{ backgroundColor: "yellow", height: 15, width: 15, borderRadius: 99, position: "absolute", zIndex: 10, left: 0, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 10 }}>{cart.length}</Text>
                            </View>
                            <AntDesign name="shoppingcart" size={24} color="#008E97" />
                        </View>
                    ) : (
                        <View>
                            <View style={{ backgroundColor: "yellow", height: 15, width: 15, borderRadius: 99, position: "absolute", zIndex: 10, left: 0, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 10 }}>{cart.length}</Text>
                            </View>
                            <AntDesign name="shoppingcart" size={24} color="black" />
                        </View>
                    ),
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabs

