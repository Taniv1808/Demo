import React from "react"
import { Home } from "../screens"
import navigationStrings from "../constants/navigationStrings"


export default function(Stack){
    return(
<>
<Stack.Screen
                name={navigationStrings.HOME}
                component={Home}
                />
               
                </>
    )
}