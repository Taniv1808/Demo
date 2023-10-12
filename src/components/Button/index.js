import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../constants/colors'

const Button = (props) => {
    const {name,onPress,btnStyle,btnText} = props
  return (
    <View style={{marginHorizontal:responsiveHeight(5)}}>
     <TouchableOpacity 
     onPress={onPress}
     style={{...styles.buttonStyle,...btnStyle}}>
        <Text style={{...styles.buttonText,...btnText}}>{name}</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
buttonStyle:{backgroundColor:colors.black,width:responsiveWidth(80),height:responsiveHeight(5)},
buttonText:{color:colors.white,textAlign:"center",padding:responsiveHeight(1)}
})