import React, { useState, useEffect } from "react"
import { StyleSheet, Image, View, StatusBar, ScrollView, SafeAreaView, Touchable, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import IfComponent from "../../components/IfComponent/index"
import Box from "../../components/Box/index"
import Text from "../../components/Text/index"
import { connect } from "react-redux";
import { groups, matchs, allTeamsForGroup } from '../../store/actions/groups';
import { scale } from 'react-native-size-matters';
import Carousel from "../../components/Carousel/index"
import Formation from "../../components/Formation";
const GameDetails = (props) => {

    const [loading, setLoading] = useState(false)
    const [indexState, setIndexState] = useState(0)
    const [selected, setSelected] = useState(1)
    const [matchsState, setMatchsState] = useState(null)
    useEffect(() => {
        props.dispatch(allTeamsForGroup(props.token))
        props.dispatch(matchs(props.token));
    }, [])

    // useEffect(() => {
    //     setLoading(true)
    //     setMatchsState(props.matchs?.filter(item => item.first_team_description[0].group_id == (indexState + 1)))
    //     setLoading(false)
    // }, [indexState])

    const TimeLine = () => {
        return (
            <View style={{ flexDirection: "column", padding: 20, alignItems: 'center' }}>
                <View style={{ height: 20, alignItems: "center", marginBottom: 20 }}>
                    <View style={{ width: 10, height: 10, backgroundColor: '#ac1b3a', borderRadius: 5 }}></View>
                    <View style={{ width: 1, height: "100%", backgroundColor: '#ac1b3a' }}></View>
                </View>
                <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 20, borderWidth: 0.2, borderColor: "#ac1b3a", borderRadius: 10, paddingHorizontal: 10, backgroundColor: "white" }}>
                    <View style={{ flex: 2, height: 50, width: 50 }}>
                        <Image source={require("../../../assets/favicon.png")} style={{ resizeMode: "cover", width: 50, height: 50, borderRadius: 25 }} />
                    </View>
                    <View style={{ flex: 8 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require("../../../assets/brasoes/brasil.png")} style={{ resizeMode: "cover", width: 15, height: 15, borderRadius: 25, marginRight: 5 }} />
                            <Text size={14} color="#ac1b3a" weight="bold">Expo</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text size={12} color="#606060">Cartão amarelo</Text>
                        </View>

                    </View>
                    <Text style={{ position: "absolute", right: 10, top: 10 }} size={12} weight="medium" color="#606060">48'</Text>
                </View>


            </View>
        )
    }
    const Informations = () => {
        return (
            <View style={{ flexDirection: "column", padding: 20 }}>
                <View style={{marginBottom: 20}}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
                        <Text size={14} color="#ac1b3a" weight="bold" >30%</Text>
                        <Text size={14} color="#ac1b3a" weight="bold" >Posse de Bola %</Text>
                        <Text size={14} color="#3d4852" weight="bold" >10%</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row",alignItems: 'center' }}>
                        <View style={{ width: "48%", height: 10, marginRight: 10, backgroundColor: '#e4e4e4', borderRadius: 5 }}>
                            <View style={{ height: "100%", alignSelf: "flex-end", width: "30%", borderRadius: 10, backgroundColor: "#ac1b3a" }}>

                            </View>
                        </View>
                        <View style={{ width: "48%", height: 10, backgroundColor: '#e4e4e4', borderRadius: 5 }}>
                            <View style={{ height: "100%", width: "45%", borderRadius: 10, backgroundColor: "#3d4852" }}>

                            </View>

                        </View>
                    </View>
                </View>
                <View style={{marginBottom: 20}}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
                        <Text size={14} color="#ac1b3a" weight="bold" >66%</Text>
                        <Text size={14} color="#ac1b3a" weight="bold" >Chutes</Text>
                        <Text size={14} color="#3d4852" weight="bold" >90%</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row",alignItems: 'center' }}>
                        <View style={{ width: "48%", height: 10, marginRight: 10, backgroundColor: '#e4e4e4', borderRadius: 5 }}>
                            <View style={{ height: "100%", alignSelf: "flex-end", width: "66%", borderRadius: 10, backgroundColor: "#ac1b3a" }}>

                            </View>
                        </View>
                        <View style={{ width: "48%", height: 10, backgroundColor: '#e4e4e4', borderRadius: 5 }}>
                            <View style={{ height: "100%", width: "90%", borderRadius: 10, backgroundColor: "#3d4852" }}>

                            </View>

                        </View>
                    </View>
                </View>
                

                {/* <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 20, borderWidth: 0.2, borderColor: "#ac1b3a", borderRadius: 10, paddingHorizontal: 10, backgroundColor: "white" }}>
                    <View style={{ flex: 2, height: 50, width: 50 }}>
                        <Image source={require("../../../assets/favicon.png")} style={{ resizeMode: "cover", width: 50, height: 50, borderRadius: 25 }} />
                    </View>
                    <View style={{ flex: 8 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require("../../../assets/brasoes/brasil.png")} style={{ resizeMode: "cover", width: 15, height: 15, borderRadius: 25, marginRight: 5 }} />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text size={12} color="#606060">Cartão amarelo</Text>
                        </View>

                    </View>
                    <Text style={{ position: "absolute", right: 10, top: 10 }} size={12} weight="medium" color="#606060">48'</Text>
                </View> */}


            </View>
        )
    }
    const LineUp = () => {
        return (
            <View style={{ flexDirection: "column", padding: 20, alignItems: 'center' }}>
                <View style={{ height: 20, alignItems: "center", marginBottom: 20 }}>
                    <View style={{ width: 10, height: 10, backgroundColor: '#ac1b3a', borderRadius: 5 }}></View>
                    <View style={{ width: 1, height: "100%", backgroundColor: '#ac1b3a' }}></View>
                </View>
                <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 20, borderWidth: 0.2, borderColor: "#ac1b3a", borderRadius: 10, paddingHorizontal: 10, backgroundColor: "white" }}>
                    <View style={{ flex: 2, height: 50, width: 50 }}>
                        <Image source={require("../../../assets/favicon.png")} style={{ resizeMode: "cover", width: 50, height: 50, borderRadius: 25 }} />
                    </View>
                    <View style={{ flex: 8 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require("../../../assets/brasoes/brasil.png")} style={{ resizeMode: "cover", width: 15, height: 15, borderRadius: 25, marginRight: 5 }} />
                            <Text size={14} color="#ac1b3a" weight="bold">Expo</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text size={12} color="#606060">Cartão amarelo</Text>
                        </View>

                    </View>
                    <Text style={{ position: "absolute", right: 10, top: 10 }} size={12} weight="medium" color="#606060">48'</Text>
                </View>


            </View>
        )
    }

    return (
        <ScrollView style={{ backgroundColor: "#fafafa" }}>
            {/* <Header text="abc" icon="chevron-back" iconStyle={{ fontSize: 20, color: "white" }} /> */}
            <View style={{
                flex: 2,
                backgroundColor: "#ac1b3a", padding: 20, flexDirection: "row", alignItems: "center"
            }}>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <View style={{ backgroundColor: "white", borderRadius: 50, width: 55, height: 55, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ backgroundColor: "#ac1b3a", borderRadius: 50, width: 53, height: 53, justifyContent: "center" }}>
                            <Image source={{ uri: "http://localhost:8000/storage/brasil.png" }} style={[styles.logo, { borderRadius: 100, height: 48, width: 48 }]} />
                        </View>
                    </View>
                    <Text>Catar</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text size={18} weight="bold">1 : 0</Text>
                    <View style={{ backgroundColor: "rgba(255, 255, 255,.2)", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}>
                        <Text weight="bold" size={12}>Finalizado</Text>

                    </View>
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <View>
                        <View style={{ backgroundColor: "white", borderRadius: 50, width: 55, height: 55, justifyContent: "center", alignItems: "center" }}>
                            <View style={{ backgroundColor: "#ac1b3a", borderRadius: 50, width: 53, height: 53, justifyContent: "center" }}>
                                <Image source={{ uri: "http://localhost:8000/storage/brasil.png" }} style={[styles.logo, { borderRadius: 100, height: 48, width: 48 }]} />
                            </View>
                        </View>
                        <Text>Catar</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 10, backgroundColor: "#ac1b3a" }}>
                <View style={{ paddingHorizontal: 20, paddingTop: 40, backgroundColor: "#fafafa", borderTopLeftRadius: 80, borderTopRightRadius: 80 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <TouchableOpacity onPress={() => { setSelected(0) }} style={{ width: 100, padding: 5, borderRadius: 20, alignItems: "center", backgroundColor: selected == 0 ? "#ac1b3a" : "#eee" }}><Text color={selected == 0 ? "white" : "gray"} size={12}>Informações</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelected(1) }} style={{ width: 100, padding: 5, borderRadius: 20, alignItems: "center", backgroundColor: selected == 1 ? "#ac1b3a" : "#eee" }}><Text color={selected == 1 ? "white" : "gray"} size={12}>Histórico</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelected(2) }} style={{ width: 100, padding: 5, borderRadius: 20, alignItems: "center", backgroundColor: selected == 2 ? "#ac1b3a" : "#eee" }}><Text color={selected == 2 ? "white" : "gray"} size={12}>Formação</Text></TouchableOpacity>
                    </View>
                    {selected == 0 && <Informations />}
                    {selected == 1 && <TimeLine />}
                    {selected == 2 && <Formation />}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fafafa"
    },
    logo: {
        resizeMode: "cover",
        width: scale(70),
        height: scale(50),
        alignSelf: "center",
        borderRadius: 10
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

const mapStateToProps = state => {
    return {
        token: state.authentication.token,
        all_teams_for_groups: state.groups.all_teams_for_groups,
        groups: state.groups.groups,
        matchs: state.groups.matchs,
    };
};

export default connect(mapStateToProps)(GameDetails);