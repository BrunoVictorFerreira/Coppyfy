import React, { useState, useEffect } from "react"
import { StyleSheet, Image, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import IfComponent from "../../components/IfComponent/index"
import Box from "../../components/Box/index"
import { connect } from "react-redux";
import { groups, teamsForGroup } from '../../store/actions/groups';

const Ranking = (props) => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        props.dispatch(groups(props.token))
    }, [])

    useEffect(() => {
        console.log("groups", props.groups)
    }, [props.groups])

    return (
        <SafeAreaView style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 40, paddingBottom: 60 }}>
                <Box
                    options={props.groups}
                    />
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#111111"
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
        groups: state.groups.groups
    };
};

export default connect(mapStateToProps)(Ranking);