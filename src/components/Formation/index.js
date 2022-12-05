import React, { useState, useEffect, useRef } from "react"
import { StyleSheet, Image, StatusBar, ScrollView, SafeAreaView, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import EmphasisHome from "../../components/EmphasisHome/index"
import Vitrine from "../../components/Vitrine/index"
import VitrineNoticies from "../../components/VitrineNoticies/index"

export default function Formation({ navigation }) {
    let rotateValueHolder = useRef(new Animated.Value(0)).current;
    const rotateImage = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    };
    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    const [data, setData] = useState([
        {
            formation: '4-3-3'
        }
    ])

    return (
        <SafeAreaView style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
            <Animated.Image
                style={{
                    width: "100%",
                    height: "100%",
                    transform: [{ rotate: rotateData }],
                }}
                source={require("../../../assets/campo.jpg")}
            />
            {/* <Image source={require("../../../assets/campo.jpg")} style={[styles.image]} /> */}
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <View style={{ width: 20, height: 20, backgroundColor: "red", left: 10, bottom: 0 }}>
                        1
                    </View>
                    <View style={{ width: 20, height: 20, backgroundColor: "red", left: 40, bottom: 0 }}>
                        1
                    </View>
                    <View style={{ width: 20, height: 20, backgroundColor: "red", left: 70, bottom: 0 }}>
                        1
                    </View>
                    <View style={{ width: 20, height: 20, backgroundColor: "red", left: 100, bottom: 0 }}>
                        1
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ width: 20, height: 20, backgroundColor: "red", left: 10, bottom: 0 }}>
                        1
                    </View>
                    <View style={{ width: 20, height: 20, backgroundColor: "red", left: 70, bottom: 0 }}>
                        1
                    </View>
                    <View style={{ width: 20, height: 20, backgroundColor: "red", left: 130, bottom: 0 }}>
                        1
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ width: 20, height: 20, backgroundColor: "red", left: 10, bottom: 0 }}>
                        1
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ width: 20, height: 20, backgroundColor: "red", left: 70, bottom: 0 }}>
                        1
                    </View>
                    <View style={{ width: 20, height: 20, backgroundColor: "red", left: 130, bottom: 0 }}>
                        1
                    </View>
                </View>
            </View>
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
        height: "100%",
        width: "100%",
        zIndex: 0,

    },

    degrade: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "90%",
        zIndex: 0
    },
});