import React, { useState, useEffect } from "react"
import { StyleSheet, Image, StatusBar, ScrollView, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Text from "../../components/Text"

import IfComponent from "../../components/IfComponent/index"
import Box from "../../components/Box/index"
import { connect } from "react-redux";
import { groups, teamsForGroup } from '../../store/actions/groups';
import Button from "../../components/Button/index"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Profile = (props) => {

    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")

    const [isSecurityText, setIsSecurityText] = useState(false)

    return (


        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Image source={require("../../../assets/home.jpg")} style={[styles.image]} />
                <Image source={require("../../../assets/logo.png")} style={styles.logo} />
                <LinearGradient colors={['transparent', 'rgba(0,0,0,.7)', 'black']} style={styles.degrade} />
                <Text adjustsFontSizeToFit style={styles.text}>Meu Perfil</Text>
                <View style={styles.inputs}>

                    <Button text="Logout" onPress={() => { props.dispatch(logout(props.token)) }} />

                </View>
            </View >
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

    },
    image: {
        position: "absolute",
        resizeMode: "cover",
        height: "100%",
        width: "100%",
    },
    logo: {
        resizeMode: "contain",
        width: scale(70),
        height: scale(70),
        alignSelf: "center",
        marginTop: 50
    },
    text: {
        color: "white",
        fontSize: scale(30),
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30,
        fontWeight: "bold",
    },
    subText: {
        color: "white",
        fontSize: 14,
        textAlign: "center",
        marginTop: 5,
    },
    link: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
        marginTop: 5,
    },
    inputs: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        paddingHorizontal: 40,
    },
    button: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        height: 35,
        marginTop: 20
        // borderWidth: 1,
        // borderColor: "white"
    },
    degrade: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "80%",
    },
    rodape: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

const mapStateToProps = state => {
    return {
        token: state.authentication.token,
        groups: state.groups.groups
    };
};

export default connect(mapStateToProps)(Profile);