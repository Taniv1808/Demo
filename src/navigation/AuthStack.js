import React from "react"
import { Login, Signup } from "../screens"
import navigationStrings from "../constants/navigationStrings"


export default function(Stack){
    return(
<>
<Stack.Screen
                name={navigationStrings.SIGNUP}
                component={Signup}
                />
                <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Login}
                /></>
    )
}