import React, { useState, useEffect } from "react"
import { StyleSheet, Image, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import EmphasisHome from "../../components/EmphasisHome/index"
import Vitrine from "../../components/Vitrine/index"
import VitrineNoticies from "../../components/VitrineNoticies/index"
import Text from "../../components/Text/index"
import Carousel from "../../components/Carousel/index"
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authentication';

const Home = (props, { navigation }) => {

    // props.dispatch(logout())

    return (
        <SafeAreaView style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
            {/* <Image source={require("../../../assets/selecoes/alemanha.jpg")} style={[styles.image]} /> */}
            {/* <LinearGradient colors={['transparent', '#111112', '#111111']} style={styles.degrade} /> */}
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 60 }}>
                {/* <EmphasisHome
                    options={{
                        firstBrasao: require("../../../assets/brasoes/alemanha.png"),
                        secondBrasao: require("../../../assets/brasoes/costa.png"),
                    }}
                /> */}

                {/* <VitrineNoticies options={[
                    {
                        img: require("../../../assets/notice1.jpg"),
                    },
                    // {
                    //     img: require("../../../assets/notice2.jpg"),
                    // }
                ]} /> */}
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
                callbackParent={() => {}}
                    vitrineNoticies
                />
                <Vitrine options={[
                    {
                        gradient: ['#0c1a75', '#2946d8'],
                        firstBrasao: require("../../../assets/brasoes/costa.png"),
                        firstName: "Costa Rica",
                        secondBrasao: require("../../../assets/brasoes/alemanha.png"),
                        secondName: "Alemanha"
                    },
                    {
                        gradient: ['#393f4d', '#192946'],
                        firstBrasao: require("../../../assets/brasoes/brasil.png"),
                        firstName: "Brasil",
                        secondBrasao: require("../../../assets/brasoes/camaroes.png"),
                        secondName: "Camarões"
                    },
                    {
                        gradient: ['#393f4d', '#192946'],
                        firstBrasao: require("../../../assets/brasoes/argentina.png"),
                        firstName: "Argentina",
                        secondBrasao: require("../../../assets/brasoes/franca.png"),
                        secondName: "França"
                    },
                    {
                        gradient: ['#393f4d', '#192946'],
                        firstBrasao: require("../../../assets/brasoes/argentina.png"),
                        firstName: "Argentina",
                        secondBrasao: require("../../../assets/brasoes/franca.png"),
                        secondName: "França"
                    },
                    {
                        gradient: ['#393f4d', '#192946'],
                        firstBrasao: require("../../../assets/brasoes/argentina.png"),
                        firstName: "Argentina",
                        secondBrasao: require("../../../assets/brasoes/franca.png"),
                        secondName: "França"
                    },
                    {
                        gradient: ['#393f4d', '#192946'],
                        firstBrasao: require("../../../assets/brasoes/argentina.png"),
                        firstName: "Argentina",
                        secondBrasao: require("../../../assets/brasoes/franca.png"),
                        secondName: "França"
                    },
                    {
                        gradient: ['#393f4d', '#192946'],
                        firstBrasao: require("../../../assets/brasoes/argentina.png"),
                        firstName: "Argentina",
                        secondBrasao: require("../../../assets/brasoes/franca.png"),
                        secondName: "França"
                    },
                ]} />



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
        backgroundColor: "#fafafa"
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
    };
};

export default connect(mapStateToProps)(Home);