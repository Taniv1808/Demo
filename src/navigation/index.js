import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Home, Login, Signup } from "../screens";
import navigationStrings from "../constants/navigationStrings";

const Stack =  createNativeStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
                name={navigationStrings.SIGNUP}
                component={Signup}
                />
                <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Login}
                />
                <Stack.Screen
                name={navigationStrings.HOME}
                component={Home}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}