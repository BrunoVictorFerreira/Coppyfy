import React from "react"
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import Text from "../../components/Text/index"
export default function VitrineNoticies({ options }) {

    return (
        <View>
            <Text
                style={[styles.text, { textAlign: "left", marginTop: 20, marginBottom: 20 }]}
                size={16}
                weight="bold"
            >Últimas Noticias</Text>
            <View style={{ borderRadius: 20, flexDirection: "row", justifyContent: "space-between" }}>
                {
                    options.map(item =>
                        <TouchableOpacity style={{ flex: 1, 
                            shadowColor: 'rgba(0,0,0,.3)',
                            shadowOffset: { width: -2, height: 10 },
                            shadowOpacity: 0.9,
                            shadowRadius: 10,
                        borderRadius: 20, flexDirection: "row", backgroundColor: "#ac1b3a", marginRight: 10, paddingVertical: 10, paddingLeft: 10 }}>
                            <Image source={item.img} style={{ marginRight: 10, borderRadius: 20, height: 150, width: 150, flexDirection: "row", justifyContent: "center", resizeMode: "cover" }} />
                            <View style={{flex: 1,marginTop: 0,flexDiretion: "column", alignItems: "flex-start"}}>
                                <Text
                                    style={[styles.text, { color: "white", marginTop: 0, marginBottom: 0 }]}
                                    size={14}
                                    weight="bold"
                                >Quatar 2022</Text>
                                <Text
                                    style={[styles.text, { textAlign: "left",color: "white", marginTop: 10, marginBottom: 0 }]}
                                    size={12}
                                    weight="medium"
                                >Temos alguns textos para testarmos no container</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "gray",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30,
    },
});