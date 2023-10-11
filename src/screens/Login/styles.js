import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
container:{
    flex:1
},
LogInText:{fontSize:responsiveFontSize(5),color:colors.black},
headerView:{
alignItems:"center",marginVertical:responsiveHeight(10)
},
})

export default styles;