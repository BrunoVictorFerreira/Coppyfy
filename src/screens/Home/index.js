import React, { useState, useEffect } from "react"
import { StyleSheet, Image, StatusBar, ScrollView, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import EmphasisHome from "../../components/EmphasisHome/index"
import Vitrine from "../../components/Vitrine/index"
import VitrineNoticies from "../../components/VitrineNoticies/index"
import Text from "../../components/Text/index"
import Carousel from "../../components/Carousel/index"
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authentication';
import { matchs } from '../../store/actions/groups';
import moment from "moment";

const Home = (props, { navigation }) => {

    const [matchsState, setMatchsState] = useState([])
    const [seeAll, setSeeAll] = useState(false)

    useEffect(() => {
        props.dispatch(matchs(props.token))
    }, [])

console.warn("props.token", props.token)

    useEffect(() => {
        var array = []
        var filterOrNotFilter = seeAll == false ? props.matchs?.filter(item => moment(item?.date).format("DD/MM/YYYY") == moment().format("DD/MM/YYYY")) : props?.matchs
        filterOrNotFilter?.map(item => array.push({
            gradient: ['#0c1a75', '#2946d8'],
            firstBrasao: item?.first_team_description[0]?.brasao[0]?.url,
            firstName: item?.first_team_description[0]?.name,
            secondBrasao: item?.second_team_description[0]?.brasao[0]?.url,
            secondName: item?.second_team_description[0]?.name,
            result: item?.result,
            date: item?.date
        }))
        setMatchsState(array)
    }, [seeAll])

    useEffect(() => {
        var array = []
        props.matchs != null && props.matchs?.filter(item => moment(item?.date).format("DD/MM/YYYY") == moment().format("DD/MM/YYYY"))?.map(item => array.push({
            gradient: ['#0c1a75', '#2946d8'],
            firstBrasao: item?.first_team_description[0]?.brasao[0]?.url,
            firstName: item?.first_team_description[0]?.name,
            secondBrasao: item?.second_team_description[0]?.brasao[0]?.url,
            secondName: item?.second_team_description[0]?.name,
            result: item?.result,
            date: item?.date
        }))
        setMatchsState(array)
    }, [props.matchs])
    // props.dispatch(logout())

    return (
        <SafeAreaView style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 60 }}>
                    <Text
                        style={[styles.text, { textAlign: "left", marginTop: 20, marginBottom: 20 }]}
                        size={16}
                        weight="bold"
                    >Informações</Text>
                    <Carousel options={[
                        { key: 1, img: require("../../../assets/notice1.jpg") },
                        { key: 2, img: require("../../../assets/notice2.jpg") },
                        { key: 3, img: require("../../../assets/notice2.jpg") },
                        { key: 4, img: require("../../../assets/notice2.jpg") },
                    ]}
                        callbackParent={() => { }}
                        vitrineNoticies
                    />
                <Vitrine options={matchsState} seeAll={(value) => { setSeeAll(value) }} style={{flex: 1}} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        
        backgroundColor: "#f0ece9"
    },
    text: {
        color: "gray",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30,
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
        loading: state.authentication.loading,
        error: state.authentication.error,
        matchs: state.groups.matchs
    };
};

export default connect(mapStateToProps)(Home);