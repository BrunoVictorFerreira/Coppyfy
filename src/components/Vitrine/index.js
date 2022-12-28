import React, { useEffect, useState } from "react"
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { scale } from 'react-native-size-matters';
import Text from "../../components/Text/index"
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

export default function Vitrine({options, seeAll }) {
    const [select, setSelect] = useState(0)
    const [seeAllState, setSeeAllState] = useState(false)
    const navigation = useNavigation(); 

    const compareDatas = (date) => {
        var agora = moment().subtract(3, "hours");
        var dateApi = moment(date).subtract(3, "hours");

        if (agora < dateApi) {
            return moment(dateApi).format("DD/MM/YYYY")
        } else if (agora >= dateApi) {
            var addHour = moment(dateApi).add("2", "hours")
            if (addHour < agora) {
                return "Finalizado"
            } else {
                return "Ao Vivo"
            }
        }

        // if(agora == dateApi){
        //     console.warn("igual", dateApi)
        // }
    }

    useEffect(() => {
        seeAll(seeAllState)
    }, [seeAllState])

    return (
        <View style={{ justifyContent: "center" }}>
            <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Text
                    style={[styles.text, { textAlign: "left", marginTop: 20, marginBottom: 20 }]}
                    size={16}
                    weight="bold"
                >{seeAllState ? "Todos os Jogos" : "Jogos de Hoje"}</Text>
                <TouchableOpacity onPress={() => {
                    setSeeAllState(!seeAllState)
                    
                }}>
                    <Text
                        size={12}
                        weight="bold"
                        color="#ac1b3a"
                    >{seeAllState ? "Ver jogos de hoje" : "Ver Tudo"}</Text>
                </TouchableOpacity>
            </View>
            <View>

                {
                    options.map((item, key) =>
                        <TouchableOpacity onPress={() => {
                            setSelect(key)
                            navigation.navigate("GameDetails",{
                                teste: 86,
                              })
                        }}>
                            {console.warn("item", item)}
                            <View style={{
                                shadowColor: key == select ? 'rgba(0,0,0,.3)' : 'transparent',
                                shadowOffset: { width: -2, height: 10 },
                                shadowOpacity: 0.9,
                                shadowRadius: 10,
                                marginBottom: 20,
                                borderRadius: 15,
                                borderWidth: .4,
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
                                            <Image source={{ uri: item.firstBrasao }} style={[styles.logo, { borderRadius: 100, height: 30, width: 30 }]} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                    <Text size={16} weight="bold" color="#ac1b3a" style={{ marginLeft: 10 }}>{`${item?.result[0].first_team} X ${item?.result[0].second_team}`}</Text>
                                    <Text size={8} weight={compareDatas(item?.date) == "Ao Vivo" ? "bold" : "medium"} color={compareDatas(item?.date) == "Ao Vivo" ? "green" : "gray"} style={{ marginLeft: 10 }}>{compareDatas(item?.date)}</Text>
                                </View>
                                <View style={{ flex: 2, flexDirection: "row", padding: 10, alignItems: "center" }}>
                                    <View style={{ backgroundColor: "#ac1b3a", borderRadius: 20, width: 38, height: 38, justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ backgroundColor: "white", borderRadius: 20, width: 35, height: 35, justifyContent: "center" }}>
                                            <Image source={{ uri: item.secondBrasao }} style={[styles.logo, { borderRadius: 100, height: 30, width: 30 }]} />
                                        </View>
                                    </View>
                                    <Text size={14} weight="medium" color="gray" style={{ marginLeft: 5 }}>{item.secondName}</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )
                }
            </View>
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