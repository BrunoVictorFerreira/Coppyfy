import React, { useState, useRef, useEffect } from "react"
import { StyleSheet, View, Alert, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { MaskedTextInput } from "react-native-mask-text";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Input from "../../components/Input/index"
import Link from "../../components/Link/index"
import LinkWithText from "../../components/LinkWithText/index"
import Button from "../../components/Button/index"
import { connect } from 'react-redux';
import { logar, logout, cleanError } from '../../store/actions/authentication';
import validateEmail from "../../utils/validateEmail";
import * as Animatable from 'react-native-animatable';
import Text from "../../components/Text/index"

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isSecurityText, setIsSecurityText] = useState(true)
    const handleLogin = () => {
        if( email != "" && password != ""){
            if(validateEmail(email)){
                props.dispatch(cleanError())
                props.dispatch(logar(email, password));
            }else{
                Alert.alert("Email inválido");

            }
        }else{
            Alert.alert("Preencha todos os campos");
        }
    }

    useEffect(() => {
        console.warn("erroreeee", props.error)
        props.error != null && Alert.alert(props.error)
    }, [props.error])

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Image source={require("../../../assets/home2.jpeg")} style={[styles.image]} />
                <Animatable.View animation="slideInDown" style={{
                    shadowColor: 'black',
                    shadowOffset: {width: -2, height: 4},
                    shadowOpacity: 0.6,
                    shadowRadius: 10,
                    marginTop: 50, backgroundColor: "white", height: 70, width: 70, padding: 10, borderRadius: 60}}>

                <Image source={require("../../../assets/logo.png")} style={styles.logo} />
                </Animatable.View>
                <LinearGradient colors={['transparent', 'rgba(0,0,0,.7)', 'black']} style={styles.degrade} />
                <Animatable.View  animation="slideInLeft" adjustsFontSizeToFit style={styles.text}><Text size={25} weight="bold">Login</Text></Animatable.View>
                <Animatable.View animation="fadeIn" style={styles.inputs}>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={(text, un) => {
                            setEmail(un);
                            // console.log(text);
                        }}
                        keyboardType="email-address"
                    />
                    <Input
                        placeholder="Senha"
                        onChange={(text) => {
                            setPassword(text);
                            // console.log(un);
                        }}
                        isSecurityText={isSecurityText}
                        value={password}
                        icon={!isSecurityText ? "md-eye-outline" : "md-eye-off-outline"}
                        iconColor="white"
                        iconAction={() => {
                            setIsSecurityText(!isSecurityText)
                        }}
                    />
                    <Link text="Esqueceu a senha ?" styles={{ marginTop: 20 }} onPress={() => {props.navigation.navigate("ForgotPassword")}}/>
                    <Button text="Entrar" loading={props.loading} onPress={() => {
                        handleLogin()
                    }} />
                    <LinkWithText text="Não tem conta ?" textLink="Cadastre-se" onPress={() => {
                        props.navigation.navigate("SignIn")
                    }} stylesContainer={{ marginTop: 20 }} />
                    <View style={styles.rodape}>
                        <View style={{ flex: 1, height: 1, backgroundColor: "white" }}></View>
                        <View
                            style={{ flex: 1, alignItems: "center" }}
                        >
                            <Text style={{ color: "white", fontSize: scale(14) }}>ou entre com</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: "white" }}></View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                            <View style={{ backgroundColor: "white", alignItems: "center", height: 50, width: 50, justifyContent: "center", borderRadius: 100 }}>
                                <Image source={require("../../../assets/google.png")} style={{ resizeMode: "cover", height: 30, width: 30, borderRadius: 100 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                            <View style={{ backgroundColor: "#3b579d", height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 100 }}>
                                <Image source={require("../../../assets/facebook.png")} style={{ resizeMode: "cover", height: 30, width: 30, borderRadius: 100 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
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
        width: scale(40),
        height: scale(40),
        alignSelf: "center",
        
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
        loading: state.authentication.loading,
        error: state.authentication.error,
    };
};

export default connect(mapStateToProps)(Login);
