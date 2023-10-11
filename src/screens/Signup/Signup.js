import { View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import TextInputComponent from '../../components/TextInput'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Button from '../../components/Button'
import colors from '../../constants/colors'

const Signup = () => {
   const [firstName, setfirstName] = useState("")
   const [lastName, setlastName] = useState("")
   const [email, setemail] = useState("")
   const [password, setpassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <KeyboardAvoidingView  style={styles.container} behavior="padding">
    <ScrollView>
        <View style={styles.headerView}>
        <Text style={styles.signUpText}>Sign Up</Text>
        </View>

      <View style={{marginLeft:responsiveWidth(8)}}>
        <TextInputComponent
        value={firstName}
        placeholder="First Name"
        onChangeText={(text)=>setfirstName(text)}/>
        <TextInputComponent
        value={lastName}
        placeholder="Last Name"
        onChangeText={(text)=>setlastName(text)}/>
        <TextInputComponent
        value={email}
        placeholder="Email"
        onChangeText={(text)=>setemail(text)}/>
        <TextInputComponent
        value={password}
        placeholder="Password"
        onChangeText={(text)=>setpassword(text)}/>
        <TextInputComponent
        value={confirmPassword}
        placeholder="Confirm Password"
        onChangeText={(text)=>setConfirmPassword(text)}/>
      </View>

      <View style={styles.bottomText}>
        <Text>Already a member ? </Text>
        <TouchableOpacity>
        <Text style={{color:colors.black,fontSize:responsiveFontSize(2),fontWeight:"700"}}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View>
      <Button name="Sign Up"/>
      </View>
      
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Signup