import { View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native'
import React, { useState,useEffect } from 'react'
import styles from './styles'
import TextInputComponent from '../../components/TextInput'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Button from '../../components/Button'
import colors from '../../constants/colors'
import navigationStrings from '../../constants/navigationStrings'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Signup = ({navigation}) => {
   const [firstName, setfirstName] = useState("")
   const [email, setemail] = useState("")
   const [password, setpassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")

   useEffect(()=>{
    getUser()
        },[])
        const getUser=async()=>{
            try {
                await AsyncStorage.getItem('User')
                .then(value=>{
                    if(value!=null){
                        navigation.navigate(navigationStrings.HOME)
                    }
                })
            } catch (error) {
                console.log(error,"error");
            }
        }

   const signUp=async()=>{
    if(firstName=="" || email==""|| password==""|| confirmPassword==""){
      Alert.alert('All fields are required')
    }
    else if (password!=confirmPassword) {
      Alert.alert('Password and Confirm Password not matched')
    } 
    else{
     try {
     var user={
      name:firstName,
      email:email,
      password:password,
      confirmPassword:confirmPassword
     }
     await AsyncStorage.setItem('User',JSON.stringify(user))
     navigation.navigate(navigationStrings.LOGIN)
     } catch (error) {
      console.log(error,"errorS");
     }
    }
   }
  return (
    <KeyboardAvoidingView  style={styles.container} behavior="padding">
    <ScrollView>
        <View style={styles.headerView}>
        <Text style={styles.signUpText}>Sign Up</Text>
        </View>

      <View style={{marginLeft:responsiveWidth(8)}}>
        <TextInputComponent
        value={firstName}
        placeholder="Name"
        onChangeText={(text)=>setfirstName(text)}/>
        <TextInputComponent
        value={email}
        placeholder="Email"
        onChangeText={(text)=>setemail(text)}/>
        <TextInputComponent
        value={password}
        placeholder="Password"
        secureText={true}
        onChangeText={(text)=>setpassword(text)}/>
        <TextInputComponent
        value={confirmPassword}
        placeholder="Confirm Password"
        secureText={true}
        onChangeText={(text)=>setConfirmPassword(text)}/>
      </View>

      <View style={styles.bottomText}>
        <Text>Already a member ? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.LOGIN)}>
        <Text style={{color:colors.black,fontSize:responsiveFontSize(2),fontWeight:"700"}}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View>
      <Button 
      onPress={()=>signUp()} 
      name="Sign Up"/>
      </View>
      
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Signup