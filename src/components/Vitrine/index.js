import React, { useState, useRef, useEffect } from "react"
import { StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback, StatusBar, Keyboard, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaskedTextInput } from "react-native-mask-text";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Input from "../../components/Input/index"
import Link from "../../components/Link/index"
import LinkWithText from "../../components/LinkWithText/index"
import Button from "../../components/Button/index"
import Text from "../../components/Text/index"
import Carrousel from "../../components/Carrousel/index"
export default function Vitrine({ options }) {

    return (
        <View style={{ justifyContent: "center" }}>
            <Text
                style={[styles.text, { textAlign: "left", marginTop: 0, marginBottom: 20 }]}
                size={18}
                weight="medium"
            >Jogos de Hoje</Text>
            <View style={{ backgroundColor: "#323234", padding: 20, borderRadius: 20 }}>
                {
                    options.map(item =>
                        <TouchableOpacity>
                            <LinearGradient colors={item.gradient} style={{ marginBottom: 10, borderRadius: 10, height: 70, flexDirection: "row", justifyContent: "center" }} >
                                <View style={{ flex: 2, flexDirection: "row", padding: 10, alignItems: "center" }}>
                                    <Image source={{ uri: item.firstBrasao }} style={[styles.logo, { borderRadius: 100, height: 30, width: 30 }]} />
                                    <Text size={16} weight="medium" style={{ marginLeft: 10 }}>{item.firstName}</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                    <Text size={16} weight="medium" style={{ marginLeft: 10 }}>-</Text>
                                </View>
                                <View style={{ flex: 2, flexDirection: "row", padding: 10, alignItems: "center", justifyContent: "flex-end" }}>
                                    <Text size={16} weight="medium" style={{ marginRight: 10 }}>{item.secondName}</Text>
                                    <Image source={{ uri: item.secondBrasao }} style={[styles.logo, { borderRadius: 100, height: 30, width: 30 }]} />
                                </View>

                            </LinearGradient>
                        </TouchableOpacity>
                    )
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        resizeMode: "cover",
        width: scale(70),
        height: scale(50),
        alignSelf: "center",
        borderRadius: 10
    },
    text: {
        color: "white",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30,
    },
});