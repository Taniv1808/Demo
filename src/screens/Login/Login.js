import { View, Text, SafeAreaView, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import TextInputComponent from '../../components/TextInput'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Button from '../../components/Button'
import navigationStrings from '../../constants/navigationStrings'
import AsyncStorage from '@react-native-async-storage/async-storage'
import colors from '../../constants/colors'

const Login = ({navigation}) => {
  const [loginEmail, setloginEmail] = useState("")
  const [loginPassword, setloginPassword] = useState("")
const logIn=()=>{
  navigation.navigate(navigationStrings.HOME)
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
      <View style={styles.bottomText}>
        <Text>Already a member ? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.SIGNUP)}>
        <Text style={{color:colors.black,fontSize:responsiveFontSize(2),fontWeight:"700"}}>Sign Up</Text>
        </TouchableOpacity>
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