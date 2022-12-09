import React, { useEffect, useState } from "react"
import { StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';
import { scale } from 'react-native-size-matters';
import Text from "../../components/Text/index"
import IfComponent from "../../components/IfComponent/index"
import { groups, teamsForGroup } from '../../store/actions/groups';
import { connect } from "react-redux";
import Link from "../../components/Link/index"

const Box = ({ teams_for_groups, dispatch, token, title, options }) => {
    const [openState, setOpenState] = useState(false)
    const [groupName, setGroupName] = useState('')
    const [page, setPage] = useState(1)
    const optionsPerPage = [2, 3, 4];
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    const fetchTeams = (group_id) => {
        dispatch(teamsForGroup(group_id, token))
    }

    return (
        <View style={{ flex: 2 }}>


            <View style={{ backgroundColor: "#ac1b3a", padding: 20, borderRadius: 20 }}>
                <Text
                    style={[styles.text, { textAlign: "left", marginTop: 0 }]}
                    size={18}
                    weight="bold"
                >{groupName}</Text>
                <IfComponent hidden={openState}>
                    {
                        options?.sort(function (a, b) {
                            return a?.id > b?.id;
                        })?.map(item =>
                            <TouchableOpacity onPress={() => {
                                setOpenState(!openState)
                                fetchTeams(item?.id)
                                setGroupName(item?.name)
                            }}>
                                <LinearGradient colors={item.gradient ? item.gradient : ['#393f4d', '#192946']} style={{ marginBottom: 10, borderRadius: 10, flex: 1, height: 70, flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                                    <View style={{ flex: 1, flexDirection: "column", padding: 10, alignItems: "center" }}>
                                        {/* <Image source={item.img} style={[styles.logo, { borderRadius: 100, height: 30, width: 30 }]} /> */}
                                        <Text size={16} weight="medium" style={{ marginLeft: 10 }}>{item.name}</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        )
                    }
                </IfComponent>
                {/* <IfComponent hidden={openState == false}>

                    <View style={{ alignItems: "center" }}>

                        <DataTable >
                            <DataTable.Header>
                                <DataTable.Title style={{ flex: 3 }}><Text size={12}>Equipe</Text></DataTable.Title>
                                <DataTable.Title numeric style={{ flex: 1 }}><Text size={12}>Pts</Text></DataTable.Title>
                                <DataTable.Title numeric style={{ flex: 1 }}><Text size={12}>VIT</Text></DataTable.Title>
                                <DataTable.Title numeric style={{ flex: 1 }}><Text size={12}>EMP</Text></DataTable.Title>
                                <DataTable.Title numeric style={{ flex: 1 }}><Text size={12}>DER</Text></DataTable.Title>
                                <DataTable.Title numeric style={{ flex: 1 }}><Text size={12}>GOLS</Text></DataTable.Title>
                                <DataTable.Title numeric style={{ flex: 1 }}><Text size={12}>SG</Text></DataTable.Title>
                            </DataTable.Header>
                            {
                                teams_for_groups != null && teams_for_groups?.sort(function (a, b) {
                                    return a?.informations[0]?.pts < b?.informations[0]?.pts;
                                })?.map((item, key) => <DataTable.Row style={{ alignItems: "center", justifyContent: "center" }}>
                                    <DataTable.Cell style={{ flex: 3 }}>
                                        <Text size={12}>{key + 1} - </Text>
                                        <Image source={{ uri: item?.brasao[0]?.url }} style={[styles.logo, { borderRadius: 100, height: 20, width: 20 }]} />
                                        <Text size={12}> {item?.name}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell numeric style={{ flex: 1 }}><Text size={12}>{item?.informations[0]?.pts}</Text></DataTable.Cell>
                                    <DataTable.Cell numeric style={{ flex: 1 }}><Text size={12}>{item?.informations[0]?.vit}</Text></DataTable.Cell>
                                    <DataTable.Cell numeric style={{ flex: 1 }}><Text size={12}>{item?.informations[0]?.emp}</Text></DataTable.Cell>
                                    <DataTable.Cell numeric style={{ flex: 1 }}><Text size={12}>{item?.informations[0]?.der}</Text></DataTable.Cell>
                                    <DataTable.Cell numeric style={{ flex: 1 }}><Text size={12}>{item?.informations[0]?.gols}</Text></DataTable.Cell>
                                    <DataTable.Cell numeric style={{ flex: 1 }}><Text size={12}>{item?.informations[0]?.sg}</Text></DataTable.Cell>
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
                        <Link text="Selecionar outro grupo" styles={{ marginTop: 20 }} stylesText={{ fontSize: 15 }} onPress={() => {
                            setOpenState(false)
                        }} />

                    </View>
                </IfComponent> */}
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
        color: "red",
        textAlign: "center",
    },
});

const mapStateToProps = state => {
    return {
        token: state.authentication.token,
        groups: state.groups.groups,
        teams_for_groups: state.groups.teams_for_groups,
    };
};

export default connect(mapStateToProps)(Box);