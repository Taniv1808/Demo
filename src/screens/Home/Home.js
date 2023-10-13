import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
    const [firstName, setfirstName]= useState("")

    useEffect(()=>{
getUser()
    },[])
    const getUser=async()=>{
        try {
            await AsyncStorage.getItem('User')
            .then(value=>{
                if(value!=null){
                   let user = JSON.parse(value)
                    setfirstName(user.name)
                }
            })
        } catch (error) {
            console.log(error,"error");
        }
    }


  return (
    <SafeAreaView style={{flex:1}}>
      <Text>Welcome {firstName}!</Text>
    </SafeAreaView>
  )
}

export default Home