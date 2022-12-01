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
export default function VitrineNoticies({ options }) {

    return (
        <View>
            <Text
                style={[styles.text, { textAlign: "left", marginTop: 20, marginBottom: 20 }]}
                size={18}
                weight="medium"
            >Últimas Noticias</Text>
            <View style={{ borderRadius: 20, flexDirection: "row", justifyContent: "space-between" }}>
                {
                    options.map(item =>
                        <TouchableOpacity style={{ flex: 1 }}>
                            <Image source={{ uri: item.img }} style={{ marginRight: 10, borderRadius: 10, height: 150, width: 150, flexDirection: "row", justifyContent: "center", resizeMode: "cover" }} />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30,
    },
});