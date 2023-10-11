import { Dimensions, PixelRatio, Platform } from "react-native";

const windowWidth = Dimensions.get('window').width
const windowHidth = Dimensions.get('window').height
export function normalize(size){
    const scale = windowWidth/320;
    const newSize = size*scale
    if(Platform.OS === "ios"){
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    else{
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
}