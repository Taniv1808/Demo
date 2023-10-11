import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Stack =  createNativeStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            {AuthStack(Stack)}
            {MainStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}