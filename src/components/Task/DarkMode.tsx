import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from "react-native";

const DarkMode = ( {onPress, color}:{onPress: any,color: any}) => {
    const clr = color === "light" ? "#ffb6c5": "#EFF2F4"
    return(
        <View>
            <MaterialCommunityIcons name="lamp" size={24} color={clr} onPress={onPress} />
        </View>
    )
}

export default DarkMode