import React from "react"
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


export default function Header({ text = "", onPress = null, stylesText = {} }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.link, stylesText ]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        fontWeight: "bold",
        fontSize: scale(14),
        textAlign: "center",
        marginTop: 5,
        color: "lightblue", 
        textAlign: "right"
    },
})