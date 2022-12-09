import React, { useState } from "react"
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { scale } from 'react-native-size-matters';
import Text from "../../components/Text/index"
export default function Vitrine({ options }) {
    const [select, setSelect] = useState(0)
    return (
        <View style={{ justifyContent: "center" }}>
            <Text
                style={[styles.text, { textAlign: "left", marginTop: 20, marginBottom: 20 }]}
                size={16}
                weight="bold"
            >Jogos de Hoje</Text>
            {/* <View style={{ backgroundColor: "#323234", padding: 20, borderRadius: 20 }}> */}
            {
                options.map((item, key) =>
                    <TouchableOpacity>
                        <View style={{
                            shadowColor: key == select ? 'rgba(0,0,0,.3)' : 'transparent',
                            shadowOffset: { width: -2, height: 10 },
                            shadowOpacity: 0.9,
                            shadowRadius: 10,
                            marginBottom: 20,
                            borderRadius: 15,
                            borderWidth: .2,
                            borderColor: key == select ? "#880218" : 'transparent',
                            height: 70,
                            flexDirection: "row",
                            justifyContent: "center",
                            backgroundColor: "white"
                        }} >
                            <View style={{ flex: 2, flexDirection: "row", padding: 10, alignItems: "center", justifyContent: "flex-end" }}>
                                <Text size={14} weight="medium" color="gray" style={{ marginRight: 5 }}>{item.firstName}</Text>
                                <View style={{ backgroundColor: "#ac1b3a", borderRadius: 20, width: 38, height: 38, justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ backgroundColor: "white", borderRadius: 20, width: 35, height: 35, justifyContent: "center" }}>
                                        <Image source={item.firstBrasao} style={[styles.logo, { borderRadius: 100, height: 30, width: 30 }]} />
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                <Text size={16} weight="bold" color="#ac1b3a" style={{ marginLeft: 10 }}>08:30</Text>
                                <Text size={12} weight="medium" color="gray" style={{ marginLeft: 10 }}>30 Oct</Text>
                            </View>
                            <View style={{ flex: 2, flexDirection: "row", padding: 10, alignItems: "center" }}>
                                <View style={{ backgroundColor: "#ac1b3a", borderRadius: 20, width: 38, height: 38, justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ backgroundColor: "white", borderRadius: 20, width: 35, height: 35, justifyContent: "center" }}>
                                        <Image source={item.secondBrasao} style={[styles.logo, { borderRadius: 100, height: 30, width: 30 }]} />
                                    </View>
                                </View>
                                <Text size={14} weight="medium" color="gray" style={{ marginLeft: 5 }}>{item.secondName}</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                )
            }

            {/* </View> */}
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
        color: "gray",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30,
    },
});