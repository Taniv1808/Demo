import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import TextInputComponent from '../../components/TextInput'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Button from '../../components/Button'
import navigationStrings from '../../constants/navigationStrings'

const Login = ({navigation}) => {
  const [email, setemail] = useState("")
   const [password, setpassword] = useState("")

   const logIn=()=>{
    if(email=="" || password==""){
      Alert.alert("Both fields are required")
    }
    else{
      navigation.navigate(navigationStrings.HOME)
    }
   }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.LogInText}>Log In</Text>
        </View>
      <View style={{marginHorizontal:responsiveWidth(7)}}>
      <TextInputComponent
        value={email}
        placeholder="Email"
        onChangeText={(text)=>setemail(text)}/>
        <TextInputComponent
        value={password}
        placeholder="Password"
        secureText={true}
        onChangeText={(text)=>setpassword(text)}/>
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