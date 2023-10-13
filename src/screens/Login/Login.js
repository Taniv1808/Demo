import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import TextInputComponent from '../../components/TextInput'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Button from '../../components/Button'
import navigationStrings from '../../constants/navigationStrings'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {
  const [loginEmail, setloginEmail] = useState("")
  const [loginPassword, setloginPassword] = useState("")

   const logIn=async()=>{
    try {
      if(loginPassword=="" || loginEmail==""){
        Alert.alert("Both fields are required")
      }
      await AsyncStorage.getItem('User')
      .then(value=>{
        let user = JSON.parse(value)
        console.log(user.email,user.password);
        if(loginEmail!=user.email || loginPassword!=user.password){
          Alert.alert("Email or password Does not exist")
        }
        else{
          navigation.navigate(navigationStrings.HOME)
        }
      })
      
    } catch (error) {
      console.log(error,"error"); 
    }
    
   }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.LogInText}>Log In</Text>
        </View>
      <View style={{marginHorizontal:responsiveWidth(7)}}>
      <TextInputComponent
        value={loginEmail}
        placeholder="Email"
        onChangeText={(text)=>setloginEmail(text)}/>
        <TextInputComponent
        value={loginPassword}
        placeholder="Password"
        secureText={true}
        onChangeText={(text)=>setloginPassword(text)}/>
      </View>
      <View style={{marginVertical:responsiveHeight(6)}}>
      <Button
      onPress={()=>logIn()}
      btnStyle={{width:responsiveWidth(80),marginHorizontal:responsiveWidth(-2)}}
      name="Log In"/>
      </View>
    </SafeAreaView>
  )
}

export default Login