import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './apps/Navigation/BottomTabs';
import Login from './apps/Screens/Authentication/Login';
import Register from './apps/Screens/Authentication/Register';
import AddressScreen from './apps/Screens/AddressScreen';
import AddAddressScreen from './apps/Screens/AddAddressScreen';
import ConfirmationsScreen from './apps/Screens/ConfirmationsScreen';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Tabs" component={BottomTabs} options={{ headerShown: false }} />
                <Stack.Screen name="Add-address" component={AddAddressScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Address" component={AddressScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Confirmation" component={ConfirmationsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

