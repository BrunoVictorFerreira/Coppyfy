import React, { useState, useRef, useEffect } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Ionicons from '@expo/vector-icons/Ionicons';

import { TextInputMask } from 'react-native-masked-text'

export default function Input({ type = "custom", placeholder = "", mask = "********************", value = "", isSecurityText = false, keyboardType = "", icon = "", iconColor = "", iconAction = null, onChange = "", ref, autoFocus = false }) {

    const [borderBottom, setBorderBottom] = useState(1)

    return (
        <View style={[styles.container, { borderBottomWidth: borderBottom }]}>
            <TextInputMask
            ref={as => {ref = as}}
            autoFocus={autoFocus}
                type={type}
                options={
                    {
                        mask,
                    }
                }
                secureTextEntry={isSecurityText}
                placeholderTextColor="white"
                placeholder={placeholder}
                selectionColor="white"
                selectTextOnFocus="white"
                // dont forget to set the "value" and "onChangeText" props
                includeRawValueInChangeText={true}
                onChangeText={onChange}
                value={value}
                onFocus={() => {
                    setBorderBottom(1.5)
                }}
                onBlur={() => {
                    setBorderBottom(1)
                }}

                keyboardType={keyboardType}
                style={styles.input}
            />
            {/* <MaskedTextInput
                placeholderTextColor="white"
                placeholder={placeholder}
                selectionColor="white"
                selectTextOnFocus="white"
                mask={mask}
                onChangeText={onChange}
                onFocus={() => {
                    setBorderBottom(1.5)
                }}
                onBlur={() => {
                    setBorderBottom(1)
                }}

                keyboardType={keyboardType}
                style={styles.input}
            /> */}
            {
                iconAction != null ? (
                    <TouchableOpacity onPress={iconAction} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                        <Ionicons name={icon} size={32} size={25} color={iconColor} style={styles.icon} />
                    </TouchableOpacity>
                )
                    :
                    (
                        <Ionicons name={icon} size={32} size={25} color={iconColor} style={styles.icon} />
                    )
            }



        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "white",
        marginBottom: moderateScale(20)
    },
    input: {
        fontSize: scale(16),
        paddingVertical: verticalScale(7),
        paddingHorizontal: moderateScale(15),
        color: "white",
        flex: 10,

    },
    icon: {
        flex: 2,
        textAlign: "center"
    }
})