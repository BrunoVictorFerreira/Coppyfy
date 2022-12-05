import React, { useState, useEffect } from "react"
import { StyleSheet, Image, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import IfComponent from "../../components/IfComponent/index"
import Box from "../../components/Box/index"

export default function Ranking({ navigation }) {

    const [open, setOpen] = useState(false)

    return (
        <SafeAreaView style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 40, paddingBottom: 60 }}>
                <Box title={"Ranking"}
                    options={[
                        {
                            gradient: ['#0c1a75', '#2946d8'],
                            img: require("../../../assets/brasoes/holanda.png"),
                            name: "Grupo A",
                        },
                        {
                            img: require("../../../assets/brasoes/inglaterra.png"),
                            name: "Grupo B",
                        },
                        {
                            img: require("../../../assets/brasoes/argentina.png"),
                            name: "Grupo C",
                        },
                        {
                            img: require("../../../assets/brasoes/franca.png"),
                            name: "Grupo D",
                        },
                        {
                            img: require("../../../assets/brasoes/japao.png"),
                            name: "Grupo E",
                        },
                        {
                            img: require("../../../assets/brasoes/marrocos.png"),
                            name: "Grupo F",
                        },
                        {
                            img: require("../../../assets/brasoes/brasil.png"),
                            name: "Grupo G",
                        },
                        {
                            img: require("../../../assets/brasoes/portugal.png"),
                            name: "Grupo H",
                        },
                    ]} />
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
        backgroundColor: "#111111"
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