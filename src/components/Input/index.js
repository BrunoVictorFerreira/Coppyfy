import React, { useState, useRef, useEffect } from "react"
import { StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Ionicons from '@expo/vector-icons/Ionicons';
import Text from "../../components/Text/index"

import { TextInputMask } from 'react-native-masked-text'

export default function Input({ label = "", type = "custom", placeholder = "", mask = "**********************************************************************", value = "", isSecurityText = false, keyboardType = "", icon = "", iconColor = "", iconAction = null, leftIcon = "", leftIconColor = "", leftIconAction = null, onChange = "", ref, autoFocus = false }) {

    const [borderBottom, setBorderBottom] = useState(1)

    return (
        <View>
            {
                label != "" && <Text>{label}</Text>
            }
            <View style={[styles.container, { borderBottomWidth: borderBottom }]}>
                {
                    leftIcon != "" &&
                        (
                            <Ionicons name={leftIcon} size={16} color={leftIconColor} style={styles.icon} />
                        )
                }
                <TextInputMask
                    ref={as => { ref = as }}
                    autoCapitalize={false}
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
                {
                    iconAction != null ? (
                        <TouchableOpacity onPress={iconAction} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
                            <Ionicons name={icon} size={32} size={25} color={iconColor} style={styles.icon} />
                        </TouchableOpacity>
                    )
                        :
                        (
                            <Ionicons name={icon} size={32} size={25} color={iconColor} style={styles.icon} />
                        )
                }



            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 0.1,
        alignItems: "center",
        borderBottomColor: "white",
        marginBottom: moderateScale(20)
    },
    input: {
        fontSize: scale(14),
        paddingVertical: verticalScale(5),
        paddingHorizontal: moderateScale(15),
        color: "white",
        flex: 10,

    },
    icon: {
        flex: 1,
        textAlign: "center"
    }
})