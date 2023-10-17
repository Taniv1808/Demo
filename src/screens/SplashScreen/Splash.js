import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import colors from '../../constants/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import navigationStrings from '../../constants/navigationStrings'

const Splash = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        AsyncStorage.getItem("User")
        .then(response=>{
            if(response!=null){
                navigation.navigate(navigationStrings.HOME)
        }
        else{
            navigation.navigate(navigationStrings.LOGIN)
        }
        })
      }, 2000);
    }, [])
    
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
      <Text style={{fontSize:responsiveFontSize(5),color:colors.black}}>SplashScreen</Text>
    </View>
    </SafeAreaView>
  )
}

export default Splash