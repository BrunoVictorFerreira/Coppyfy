import React from "react"
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import Text from "../../components/Text/index"
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
                            <Image source={item.img} style={{ marginRight: 10, borderRadius: 10, height: 150, width: 150, flexDirection: "row", justifyContent: "center", resizeMode: "cover" }} />
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