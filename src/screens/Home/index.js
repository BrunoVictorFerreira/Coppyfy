import React, { useState, useEffect } from "react"
import { StyleSheet, Image, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import EmphasisHome from "../../components/EmphasisHome/index"
import Vitrine from "../../components/Vitrine/index"
import VitrineNoticies from "../../components/VitrineNoticies/index"

export default function Home({ navigation }) {

    return (
        <SafeAreaView style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
            <Image source={require("../../../assets/selecoes/alemanha.jpg")} style={[styles.image]} />
            <LinearGradient colors={['transparent', '#111112', '#111111']} style={styles.degrade} />
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 40, paddingBottom: 60 }}>
                <EmphasisHome
                    options={{
                        firstBrasao: require("../../../assets/brasoes/alemanha.png"),
                        secondBrasao: require("../../../assets/brasoes/costa.png"),
                    }}
                />

                <Vitrine options={[
                    {
                        gradient: ['#0c1a75', '#2946d8'],
                        firstBrasao: require("../../../assets/brasoes/costa.png"),
                        firstName: "Costa Rica",
                        secondBrasao: require("../../../assets/brasoes/alemanha.png"),
                        secondName: "Alemanha"
                    },
                    {
                        gradient: ['#393f4d', '#192946'],
                        firstBrasao: require("../../../assets/brasoes/brasil.png"),
                        firstName: "Brasil",
                        secondBrasao: require("../../../assets/brasoes/camaroes.png"),
                        secondName: "Camarões"
                    },
                    {
                        gradient: ['#393f4d', '#192946'],
                        firstBrasao: require("../../../assets/brasoes/argentina.png"),
                        firstName: "Argentina",
                        secondBrasao: require("../../../assets/brasoes/franca.png"),
                        secondName: "França"
                    },
                ]} />


                <VitrineNoticies options={[
                    {
                        img: require("../../../assets/notice1.jpg"),
                    },
                    {
                        img: require("../../../assets/notice2.jpg"),
                    }
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