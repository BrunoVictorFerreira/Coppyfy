import React, { useState, useEffect, useRef } from "react"
import { StyleSheet, Image, StatusBar, View, ScrollView, SafeAreaView, Animated, Easing, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Text from "../../components/Text/index"

import EmphasisHome from "../../components/EmphasisHome/index"
import Vitrine from "../../components/Vitrine/index"
import VitrineNoticies from "../../components/VitrineNoticies/index"

export default function Formation({ navigation }) {
    let rotateValueHolder = useRef(new Animated.Value(0)).current;
    const rotateImage = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    };
    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });
    const [data, setData] = useState([
        {
            formation: '4-3-3',
            firstTeam: {
                firstLine: [
                    {
                        number: 1,
                        name: "M. Neuer"
                    }
                ],
                secondLine: [
                    {
                        number: 2,
                        name: "Teste 2"
                    },
                    {
                        number: 3,
                        name: "Teste 3"
                    },
                    {
                        number: 4,
                        name: "Teste 4"
                    },
                    {
                        number: 5,
                        name: "Teste 5"
                    }
                ],
                thirdLine: [
                    {
                        number: 6,
                        name: "Teste 6"
                    },
                    {
                        number: 7,
                        name: "Teste 7"
                    },
                    {
                        number: 8,
                        name: "Teste 8"
                    }
                ],
                fourtyLine: [
                    {
                        number: 9,
                        name: "Teste 9"
                    },
                    {
                        number: 10,
                        name: "Teste 10"
                    },
                    {
                        number: 11,
                        name: "Teste 11"
                    }
                ],
            },
            secondTeam: {
                firstLine: [
                    {
                        number: 1,
                        name: "M. Neuer"
                    }
                ],
                secondLine: [
                    {
                        number: 2,
                        name: "Teste 2"
                    },
                    {
                        number: 3,
                        name: "Teste 3"
                    },
                    {
                        number: 4,
                        name: "Teste 4"
                    },
                    {
                        number: 5,
                        name: "Teste 5"
                    }
                ],
                thirdLine: [
                    {
                        number: 6,
                        name: "Teste 6"
                    },
                    {
                        number: 7,
                        name: "Teste 7"
                    },
                    {
                        number: 8,
                        name: "Teste 8"
                    }
                ],
                fourtyLine: [
                    {
                        number: 9,
                        name: "Teste 9"
                    },
                    {
                        number: 10,
                        name: "Teste 10"
                    },
                    {
                        number: 11,
                        name: "Teste 11"
                    }
                ],
            }
        }
    ])

    const FirstClub = () => {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity>
                        <View style={[styles.button]}>
                            <Text weight="bold">{data[0]?.firstTeam?.firstLine[0]?.number}</Text>
                        </View>
                        <Text weight="bold">{data[0]?.firstTeam?.firstLine[0]?.name}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    {data[0]?.firstTeam?.secondLine?.map(item => <TouchableOpacity>
                        <View style={[styles.button]}>
                            <Text weight="bold">{item?.number}</Text>
                        </View>
                        <Text weight="bold">{item?.name}</Text>
                    </TouchableOpacity>)}
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    {data[0]?.firstTeam?.thirdLine?.map(item => <TouchableOpacity>
                        <View style={[styles.button]}>
                            <Text weight="bold">{item?.number}</Text>
                        </View>
                        <Text weight="bold">{item?.name}</Text>
                    </TouchableOpacity>)}
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    {data[0]?.firstTeam?.fourtyLine?.map(item => <TouchableOpacity>
                        <View style={[styles.button]}>
                            <Text weight="bold">{item?.number}</Text>
                        </View>
                        <Text weight="bold">{item?.name}</Text>
                    </TouchableOpacity>)}
                </View>
            </View>
        )
    }

    const SecondClub = () => {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    {data[0]?.secondTeam?.fourtyLine?.map(item => <TouchableOpacity>
                        <View style={[styles.button2]}>
                            <Text weight="bold">{item?.number}</Text>
                        </View>
                        <Text weight="bold">{item?.name}</Text>
                    </TouchableOpacity>)}
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    {data[0]?.secondTeam?.thirdLine?.map(item => <TouchableOpacity>
                        <View style={[styles.button2]}>
                            <Text weight="bold">{item?.number}</Text>
                        </View>
                        <Text weight="bold">{item?.name}</Text>
                    </TouchableOpacity>)}
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    {data[0]?.secondTeam?.secondLine?.map(item => <TouchableOpacity>
                        <View style={[styles.button2]}>
                            <Text weight="bold">{item?.number}</Text>
                        </View>
                        <Text weight="bold">{item?.name}</Text>
                    </TouchableOpacity>)}
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity>
                        <Text weight="bold">{data[0]?.secondTeam?.firstLine[0]?.name}</Text>
                        <View style={[styles.button2]}>
                            <Text weight="bold">{data[0]?.secondTeam?.firstLine[0]?.number}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    useEffect(() => {
        rotateImage()
    }, [])

    return (
        <SafeAreaView style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
            <Animated.Image
                style={[styles.image, {
                    opacity: rotateData,
                }]}
                source={require("../../../assets/campo.webp")}
            />
            {/* <Image source={require("../../../assets/campo.jpg")} style={[styles.image]} /> */}
            <FirstClub />
            <SecondClub />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,.1)"
    },
    image: {
        position: "absolute",
        resizeMode: "cover",
        zIndex: 0,
        width: "100%",
        height: "100%",
    },
    button: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "red",
        alignSelf: 'center'
    },
    button2: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "blue",
        alignSelf: 'center'
    },
    degrade: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "90%",
        zIndex: 0
    },
});