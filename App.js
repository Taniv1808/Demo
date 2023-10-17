import { SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'
import Navigation from './src/navigation'
import { notificationListener, requestUserPermission } from './src/utils/pushNotification'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import SplashScreen from 'react-native-splash-screen'


const App = () => {
  useEffect(() => {
    requestUserPermission() 
    notificationListener() 
    SplashScreen.hide()
  }, [])
  
  return (
    <Provider store={store}>
    <SafeAreaView style={{flex:1}}>
    <Navigation/>
    </SafeAreaView>
    </Provider>
  )
}

export default App