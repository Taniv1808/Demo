import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Login from './src/screens/Login/Login'
import Navigation from './src/navigation'


const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <Navigation/>
    </SafeAreaView>
  )
}

export default App