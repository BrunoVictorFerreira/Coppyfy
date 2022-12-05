import React, { useState } from "react"
import { StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';
import { scale } from 'react-native-size-matters';
import Text from "../../components/Text/index"
import IfComponent from "../../components/IfComponent/index"

export default function Box({ title, options }) {

    const [data, setData] = useState(
        [
            {
                value: "Holanda",
                image: require("../../../assets/brasoes/holanda.png")
            },
            {
                value: "Senegal",
                image: require("../../../assets/brasoes/senegal.jpg")
            },
            {
                value: "Equador",
                image: require("../../../assets/brasoes/equador.png")
            },
            {
                value: "Catar",
                image: require("../../../assets/brasoes/catar.png")
            },
        ])
    const [openState, setOpenState] = useState(false)
    const [page, setPage] = useState(1)
    const optionsPerPage = [2, 3, 4];
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    return (
        <View style={{ justifyContent: "center" }}>
            <Text
                style={[styles.text, { textAlign: "left", marginTop: 0, marginBottom: 20 }]}
                size={18}
                weight="medium"
            >{title}</Text>
            <View style={{ backgroundColor: "#323234", padding: 20, borderRadius: 20 }}>
                <IfComponent hidden={openState}>
                    {
                        options.map(item =>
                            <TouchableOpacity onClick={() => { setOpenState(!openState) }}>
                                <LinearGradient colors={item.gradient ? item.gradient : ['#393f4d', '#192946']} style={{ marginBottom: 10, borderRadius: 10, flex: 1, height: 70, flexDirection: "row", justifyContent: "center" }} >
                                    <View style={{ flex: 1, flexDirection: "column", padding: 10, alignItems: "center" }}>
                                        <Image source={item.img} style={[styles.logo, { borderRadius: 100, height: 30, width: 30 }]} />
                                        <Text size={16} weight="medium" style={{ marginLeft: 10 }}>{item.name}</Text>
                                    </View>
                                    {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                    <Text size={16} weight="medium" style={{ marginLeft: 10 }}>-</Text>
                                </View>
                                <View style={{ flex: 2, flexDirection: "row", padding: 10, alignItems: "center", justifyContent: "flex-end" }}>
                                    <Text size={16} weight="medium" style={{ marginRight: 10 }}>{item.secondName}</Text>
                                    <Image source={item.secondBrasao} style={[styles.logo, { borderRadius: 100, height: 30, width: 30 }]} />
                                </View> */}

                                </LinearGradient>
                            </TouchableOpacity>
                        )
                    }
                </IfComponent>
                <IfComponent hidden={!openState}>

                    <View style={{ alignItems: "center" }}>

                        <DataTable >
                            <DataTable.Header>
                                <DataTable.Title style={{flex: 2}}><Text size={12}>Equipe</Text></DataTable.Title>
                                <DataTable.Title numeric style={{flex: 1}}><Text size={12}>Pts</Text></DataTable.Title>
                                <DataTable.Title numeric style={{flex: 1}}><Text size={12}>VIT</Text></DataTable.Title>
                                <DataTable.Title numeric style={{flex: 1}}><Text size={12}>DER</Text></DataTable.Title>
                                <DataTable.Title numeric style={{flex: 1}}><Text size={12}>SG</Text></DataTable.Title>
                            </DataTable.Header>
                            {
                                data.map((item, key) => <DataTable.Row style={{alignItems: "center", justifyContent: "center"}}>
                                    <DataTable.Cell style={{flex: 2}}>
                                        <Text size={12}>{key + 1} - </Text>
                                        <Image source={item.image} style={[styles.logo, { borderRadius: 100, height: 20, width: 20 }]} />
                                        <Text size={12}> {item?.value}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell numeric style={{flex: 1}}><Text size={12}>7</Text></DataTable.Cell>
                                    <DataTable.Cell numeric style={{flex: 1}}><Text size={12}>2</Text></DataTable.Cell>
                                    <DataTable.Cell numeric style={{flex: 1}}><Text size={12}>0</Text></DataTable.Cell>
                                    <DataTable.Cell numeric style={{flex: 1}}><Text size={12}>4</Text></DataTable.Cell>
                                </DataTable.Row>)
                            }

                            <DataTable.Pagination
                                page={1}
                                numberOfPages={4}
                                onPageChange={(page) => setPage(page)}
                                label="1 de 1"
                                optionsPerPage={optionsPerPage}
                                itemsPerPage={itemsPerPage}
                                setItemsPerPage={setItemsPerPage}
                                showFastPagination
                                optionsLabel={'Rows per page'}
                            />
                        </DataTable>

                    </View>
                </IfComponent>
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
        color: "white",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30,
    },
});