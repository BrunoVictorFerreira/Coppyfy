import React, { useEffect, useRef, useState } from "react"
import { StyleSheet, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { DataTable } from 'react-native-paper';
import moment from 'moment'
import { LinearGradient } from 'expo-linear-gradient';
import { scale } from 'react-native-size-matters';
import Text from "../../components/Text/index"
import IfComponent from "../../components/IfComponent/index"
import { groups, teamsForGroup } from '../../store/actions/groups';
import { connect } from "react-redux";
import Link from "../../components/Link/index"

const SLIDER_WIDTH = Dimensions.get("window").width
const ITEM_WIDTH = SLIDER_WIDTH * 0.88

const Box = ({ teams_for_groups, dispatch, token, title, option, games }) => {
    const [openState, setOpenState] = useState(false)
    const [groupName, setGroupName] = useState('')
    const [page, setPage] = useState(1)
    const optionsPerPage = [2, 3, 4];
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    let _carousel = useRef(null)
    _renderItem = ({ item, index }) => {
        return (
            <View style={{ backgroundColor: "red" }}>
                <Text>{item.title}</Text>
            </View>
        );
    }

    const fetchTeams = (group_id) => {
        dispatch(teamsForGroup(group_id, token))
    }

    const RowGame = ({option}) => {
        console.warn("item?.first_team_description", option)
        return (
            <View style={{ flexDirection: "row", marginTop: 20, paddingHorizontal: 20 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", marginBottom: 5, alignItems: 'center' }}>
                        <View style={{ backgroundColor: "#ac1b3a", marginRight: 5, borderRadius: 20, width: 33, height: 33, justifyContent: "center", alignItems: "center" }}>
                            <View style={{ backgroundColor: "white", borderRadius: 20, width: 32, height: 32, justifyContent: "center" }}>
                                <Image source={{uri: option?.first_team_description[0]?.brasao[0]?.url}} style={[styles.logo, { borderRadius: 100, height: 30, width: 30 }]} />
                            </View>
                        </View>
                        <Text color="#ac1b3a" weight="extrabold" size={16}>{option?.first_team_description[0]?.name}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <View style={{ backgroundColor: "#ac1b3a", marginRight: 5, borderRadius: 20, width: 33, height: 33, justifyContent: "center", alignItems: "center" }}>
                            <View style={{ backgroundColor: "white", borderRadius: 20, width: 32, height: 32, justifyContent: "center" }}>
                                <Image source={{uri: option?.second_team_description[0]?.brasao[0]?.url}} style={[styles.logo, { borderRadius: 100, height: 30, width: 30 }]} />
                            </View>
                        </View>
                        <Text color="#ac1b3a" weight="extrabold" size={16}>{option?.second_team_description[0]?.name}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "column", borderLeftColor: "#606060", borderLeftWidth: 1 }}>
                    <View style={{ flexDirection: "column", paddingLeft: 10, paddingTop: 10 }}>
                        <Text color="gray" weight="medium" size={12}>Jogo do dia 1 de 3</Text>
                        <Text color="#ac1b3a" weight="bold" size={12}>{moment(option?.date).format("DD/MM/YYYY")}</Text>
                        <Text color="black" weight="bold" size={12}>{moment(option?.date).format("HH:mm")}</Text>
                    </View>
                </View>
            </View>
        )
    }

    const TableGroup = ({option}) => {
        return (
            <View style={{ flex: 1 }}>
                <Text color="gray" weight="medium" size={16} style={{ textAlign: "center", marginTop: 20 }}>Tabela</Text>
                <DataTable >
                    <DataTable.Header>
                        <DataTable.Title style={{ flex: 4 }}><Text size={10} color="#606060">Equipe</Text></DataTable.Title>
                        <DataTable.Title numeric style={{ flex: 1 }}><Text size={10} color="#606060">Pts</Text></DataTable.Title>
                        <DataTable.Title numeric style={{ flex: 1 }}><Text size={10} color="#606060">VIT</Text></DataTable.Title>
                        <DataTable.Title numeric style={{ flex: 1 }}><Text size={10} color="#606060">EMP</Text></DataTable.Title>
                        <DataTable.Title numeric style={{ flex: 1 }}><Text size={10} color="#606060">DER</Text></DataTable.Title>
                        <DataTable.Title numeric style={{ flex: 1 }}><Text size={10} color="#606060">GOLS</Text></DataTable.Title>
                        <DataTable.Title numeric style={{ flex: 1 }}><Text size={10} color="#606060">SG</Text></DataTable.Title>
                    </DataTable.Header>
                    {
                        option != null && option?.teams?.map((item, key) => <DataTable.Row style={{ alignItems: "center", justifyContent: "center" }}>
                            <DataTable.Cell style={{ flex: 4, alignItems: "center" }}>
                                <Text size={12} color="#606060" weight="bold">{key + 1} - </Text>
                                <Image source={{ uri: item?.brasao[0]?.url }} style={[styles.logo, { borderRadius: 100, height: 20, width: 20 }]} />
                                <Text size={12} color="#606060" weight="medium" style={{marginLeft: 15}}> {item?.name}</Text>
                            </DataTable.Cell>
                            <DataTable.Cell numeric style={{ flex: 1 }}><Text color="#606060" size={12}>{item?.informations[0]?.pts}</Text></DataTable.Cell>
                            <DataTable.Cell numeric style={{ flex: 1 }}><Text color="#606060" size={12}>{item?.informations[0]?.vit}</Text></DataTable.Cell>
                            <DataTable.Cell numeric style={{ flex: 1 }}><Text color="#606060" size={12}>{item?.informations[0]?.emp}</Text></DataTable.Cell>
                            <DataTable.Cell numeric style={{ flex: 1 }}><Text color="#606060" size={12}>{item?.informations[0]?.der}</Text></DataTable.Cell>
                            <DataTable.Cell numeric style={{ flex: 1 }}><Text color="#606060" size={12}>{item?.informations[0]?.gols}</Text></DataTable.Cell>
                            <DataTable.Cell numeric style={{ flex: 1 }}><Text color="#606060" size={12}>{item?.informations[0]?.sg}</Text></DataTable.Cell>
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
        )
    }

    return (
        <View style={{ flex: 2, backgroundColor: "#ac1b3a" }}>
            <View style={{ flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fafafa", borderTopLeftRadius: 60, borderTopRightRadius: 60 }}>
                <View style={{ flex: 1, borderBottomColor: "lightgray", borderBottomWidth: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text color="gray" weight="bold" size={18}>{option?.grupo}</Text>
                </View>
                <View style={{ flex: 11 }}>
                    {/* <ScrollView> */}
                    {
                        games?.map(item => {
                            return <RowGame option={item} />
                        })
                    }
                        {/* >
                        <RowGame option={option} /> */}
                        <TableGroup option={option} />
                    {/* </ScrollView> */}
                </View>

                {/* <Text
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
                                        <Text size={16} weight="medium" style={{ marginLeft: 10 }}>{item.name}</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        )
                    }
                </IfComponent> */}
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