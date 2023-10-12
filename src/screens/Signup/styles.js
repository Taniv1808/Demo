import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
container:{
    flex:1,
},
signUpText:{fontSize:responsiveFontSize(5),color:colors.black},
headerView:{
alignItems:"center",marginVertical:responsiveHeight(6)
},
bottomText:{alignItems:"center",marginVertical:responsiveHeight(2),flexDirection:'row',marginHorizontal:responsiveWidth(27)}
})

export default styles;