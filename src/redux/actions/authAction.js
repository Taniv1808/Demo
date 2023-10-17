import { confirmPasswordFunction, emailFunction, nameFunction, passwordFunction } from "../reducers/userSessionSlice";
import store from "../store";

const {dispatch} = store

export function emailAuthentication(data){
    console.log("email auth data",data);
    dispatch(emailFunction(data))
}

export function passwordAuthentication(data){
    console.log("password auth data",data);
    dispatch(passwordFunction(data))
}

export function nameAuthentication(data){
    console.log("name auth data",data);
    dispatch(nameFunction(data))
}

export function confirmPasswordAuthentication(data){
    console.log("confirm auth data",data);
    dispatch(confirmPasswordFunction(data))
}

