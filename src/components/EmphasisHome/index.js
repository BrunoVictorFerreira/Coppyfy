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
export default function EmphasisHome({ options }) {

    return (
        <View style={{ justifyContent: "flex-end" }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", paddingLeft: 30 }}>
                <Image source={require(`../../../${options.firstBrasao}`)} style={styles.logo} />
                <Text
                    style={[styles.text, { alignSelf: "center", marginLeft: 10, marginRight: 10 }]}
                    weight="bold"
                    size={30}
                >
                    vs
                </Text>

                <Image source={require(`../../../${options.secondBrasao}`)} style={styles.logo} />
            </View>
            <Text
                style={[styles.text, { textAlign: "left", marginTop: 10, backgroundColor: "rgba(0,0,0,.2)" }]}
                size={40}
                weight="extrabold"
            >JOGO DO DIA</Text>
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