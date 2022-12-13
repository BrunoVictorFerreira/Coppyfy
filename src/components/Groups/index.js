import React, { useEffect, useRef, useState } from "react"
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { DataTable } from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';
import { scale } from 'react-native-size-matters';
import Text from "../../components/Text/index"
import IfComponent from "../../components/IfComponent/index"
import { groups, teamsForGroup } from '../../store/actions/groups';
import { connect } from "react-redux";
import Link from "../../components/Link/index"

const SLIDER_WIDTH = Dimensions.get("window").width
const ITEM_WIDTH = SLIDER_WIDTH * 0.90

const Groups = ({option, index}) => {
    console.warn("option", option)
    console.warn("index", index)
    return (
        <View style={{ 
            shadowColor: 'rgba(0,0,0,.3)',
            shadowOffset: { width: -2, height: 10 },
            shadowOpacity: 0.9,
            shadowRadius: 10,
            backgroundColor: "#f0ece9", 
            borderRadius: 30, 
            width: ITEM_WIDTH,
            marginLeft: index > 2 ? 1 : 0,
            paddingHorizontal: index == 6 ? 20 : 10,
            flexDirection: "column"}}>
            <View style={{ flex: 2, borderBottomColor: "lightgray", borderBottomWidth: 1, alignItems: "center", justifyContent: "center" }}>
                <Text color="gray" weight="bold" size={18}>{option?.grupo}</Text>
            </View>
            <View style={{ flex: 10, paddingVertical: 5, paddingHorizontal: 10 }}>
                
                    {option?.teams?.map(item => {
                        return <View style={{
                            borderRadius: 15,
                            flex: 1,
                            flexDirection: "row",
                           
                        }} >
                            <View style={{ flexDirection: "row", paddingVertical: 10, paddingHorizontal: 3, alignItems: "center" }}>
                                <View style={{ backgroundColor: "#ac1b3a", borderRadius: 20, width: 22, height: 22, justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ backgroundColor: "white", borderRadius: 20, width: 21, height: 21, justifyContent: "center" }}>
                                        <Image source={{uri: item?.brasao[0]?.url}} style={[styles.logo, { borderRadius: 100, height: 20, width: 20 }]} />
                                    </View>
                                </View>
                                <Text size={12} weight="bold" color="#ac1b3a" style={{ marginLeft: 10 }}>{item?.name}</Text>
                            </View>
                        </View>
                    })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
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
        groups: state.groups.groups,
        teams_for_groups: state.groups.teams_for_groups,
    };
};

export default connect(mapStateToProps)(Groups);