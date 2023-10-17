import React from "react"
import { Login, Signup, Splash } from "../screens"
import navigationStrings from "../constants/navigationStrings"


export default function(Stack){
    return(
<>
{/* <Stack.Screen
name={navigationStrings.SPLASH}
component={Splash}
/> */}
<Stack.Screen
                name={navigationStrings.LOGIN}
                component={Login}
                />
<Stack.Screen
                name={navigationStrings.SIGNUP}
                component={Signup}
                />
                </>
    )
}