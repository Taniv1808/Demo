import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../constants/colors'

const Button = (props) => {
    const {name} = props
  return (
    <View style={{marginHorizontal:responsiveHeight(13)}}>
     <TouchableOpacity style={{backgroundColor:colors.black,width:responsiveWidth(50),height:responsiveHeight(5)}}>
        <Text style={{color:colors.white,textAlign:"center",padding:responsiveHeight(1)}}>{name}</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})