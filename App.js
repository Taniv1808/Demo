import { View, Text, SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'
import Login from './src/screens/Login/Login'
import Navigation from './src/navigation'
import { notificationListener, requestUserPermission } from './src/utils/pushNotification'


const App = () => {
  useEffect(() => {
    requestUserPermission() 
    notificationListener() 
   
  }, [])
  
  return (
    <SafeAreaView style={{flex:1}}>
    <Navigation/>
    </SafeAreaView>
  )
}

export default App