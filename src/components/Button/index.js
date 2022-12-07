import React, { useState, useRef, useEffect } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { MaskedTextInput } from "react-native-mask-text";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Input from "../../components/Input/index"
import Link from "../../components/Link/index"


export default function Button({ text = "", onPress = null, stylesButton = {}, stylesText = {}, loading = false }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { ...stylesButton }]}>
            {
                !loading ?
                    <Text style={[styles.text, { ...stylesText }]}>{text}</Text>
                    :
                    <ActivityIndicator size={20} color="black" />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        height: verticalScale(45),
        marginTop: 20
        // borderWidth: 1,
        // borderColor: "white"
    },
    text: {
        color: "#0d182f",
        fontWeight: "bold",
        fontSize: scale(14)
    }
})