import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        email:"",
        password:"",
        name:"",
        confirmpassword:""
    },
    reducers:{
        emailFunction:(state,action)=>{
            console.log(state,"emailPayload");
            state.email=action.payload
        },
        passwordFunction:(state,action)=>{
            console.log(state,"passwordPayload");
            state.password=action.payload
        },
        nameFunction:(state,action)=>{
            console.log(state,"namePayload");
            state.name=action.payload
        },
        confirmPasswordFunction:(state,action)=>{
            console.log(state,"confirmPasswordPayload");
            state.confirmpassword=action.payload
        }
    }
})

export const {emailFunction,passwordFunction,nameFunction,confirmPasswordFunction} = authSlice.actions
export default authSlice.reducer