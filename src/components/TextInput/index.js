import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

export default function TextInputComponent(props) {
    const {placeholder,onChangeText,value} = props;
  return (
    <View style={styles.container}>
      <TextInput
      value={value}
      placeholder={placeholder}
      style={styles.text}
      onChangeText={onChangeText}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
marginVertical:responsiveHeight(2),
marginHorizontal:responsiveWidth(2)
    },
text:{
borderBottomWidth:1,
width:responsiveScreenWidth(80),
borderWidth:1,
borderColor:"#999999"
}
})