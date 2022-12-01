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

import EmphasisHome from "../../components/EmphasisHome/index"
import Vitrine from "../../components/Vitrine/index"
import VitrineNoticies from "../../components/VitrineNoticies/index"

export default function Home({ navigation }) {

    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")

    const [isSecurityText, setIsSecurityText] = useState(false)

    useEffect(() => {
        console.log("isSecurityText", isSecurityText)
    }, [isSecurityText])

    return (
        <SafeAreaView style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
            <Image source={require("../../../assets/selecoes/alemanha.jpg")} style={[styles.image]} />
            <LinearGradient colors={['transparent', '#111112', '#111111']} style={styles.degrade} />
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 40, paddingBottom: 60 }}>
                <EmphasisHome
                    options={{
                        firstBrasao: "assets/brasoes/alemanha.png",
                        secondBrasao: "assets/brasoes/costa.png",
                    }}
                />

                {/* <Vitrine options={[
                    {
                        gradient: ['#0c1a75', '#2946d8'],
                        firstBrasao: "assets/brasoes/costa.png",
                        firstName: "Costa Rica",
                        secondBrasao: "assets/brasoes/alemanha.png",
                        secondName: "Alemanha"
                    },
                    {
                        gradient: ['#393f4d', '#192946'],
                        firstBrasao: "assets/brasoes/brasil.png",
                        firstName: "Brasil",
                        secondBrasao: "assets/brasoes/camaroes.png",
                        secondName: "Camarões"
                    },
                    {
                        gradient: ['#393f4d', '#192946'],
                        firstBrasao: "assets/brasoes/argentina.png",
                        firstName: "Argentina",
                        secondBrasao: "assets/brasoes/franca.png",
                        secondName: "França"
                    },
                ]} />


                <VitrineNoticies options={[
                    {
                        img: "assets/notice1.jpg",
                    },
                    {
                        img: "assets/notice2.jpg",
                    }
                ]} /> */}
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,.1)"
    },
    image: {
        position: "absolute",
        resizeMode: "cover",
        height: "80%",
        width: "80%",
        top: 40,
        zIndex: 0
    },

    degrade: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "90%",
        zIndex: 0
    },
});