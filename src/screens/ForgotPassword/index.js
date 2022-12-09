import React, { useState, useRef, useEffect } from "react"
import { StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { MaskedTextInput } from "react-native-mask-text";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Input from "../../components/Input/index"
import Link from "../../components/Link/index"
import LinkWithText from "../../components/LinkWithText/index"
import Text from "../../components/Text/index"
import Button from "../../components/Button/index"
import { connect } from "react-redux"
import { validateEmail as validateEmailForgot, forgotPassword, cleanError } from '../../store/actions/authentication';
import validateEmail from "../../utils/validateEmail";
import * as Animatable from 'react-native-animatable';

const ForgotPassword = (props) => {
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [email, setEmail] = useState("")
    const [isSecurityText, setIsSecurityText] = useState(true)
    const [isSecurityTextConfirm, setIsSecurityTextConfirm] = useState(true)

    const [step, setStep] = useState(1)

    const submit = () => {
        props.dispatch(cleanError())
        if (step == 1 && email != "") {

            if (validateEmail(email)) {
                props.dispatch(validateEmailForgot(email))
            } else {
                Alert.alert("Email inválido")
            }
            return
        }

        if (step == 2 && (code == "")) {
            Alert.alert("Código inválido")
        } else if (step == 2 && (password == "" && passwordConfirm == "")) {
            Alert.alert("Preencha a senha")
        } else if (step == 2 && (password != passwordConfirm)) {
            Alert.alert("As senhas não correspondem")
        } else {
            props.dispatch(forgotPassword(code, password, passwordConfirm))
        }
    }

    useEffect(() => {
        console.warn("erroreeee", props.errorValidateEmail)
        props.errorValidateEmail != null && Alert.alert(props.errorValidateEmail)
    }, [props.errorValidateEmail])
    useEffect(() => {
        console.warn("messageValidateEmail", props.messageValidateEmail)
        if (props.messageValidateEmail != null) {
            Alert.alert(props.messageValidateEmail)
            setStep(step + 1)
        }
    }, [props.messageValidateEmail])
    useEffect(() => {
        console.warn("message", props.message)
        if (props.message != null) {
            Alert.alert(props.message)
            props.navigation.navigate("Login")
            props.dispatch(cleanError())
        }
    }, [props.message])

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
                <Animatable.View animation="slideInLeft" adjustsFontSizeToFit style={{ marginTop: 20, marginBottom: 40 }}><Text size={25} weight="bold">Recuperação de senha</Text></Animatable.View>
                <Animatable.View animation="fadeIn" style={styles.inputs}>
                    {
                        (step == 1) && (
                            <Input
                                placeholder="Email"
                                value={email}
                                onChange={(text, un) => {
                                    setEmail(un);
                                    // console.log(text);
                                }}
                            />
                        )
                    }

                    {
                        step >= 2 && (
                            <>
                                <Input
                                    type="custom"
                                    placeholder="Código"
                                    value={code}
                                    mask="999999"
                                    onChange={(text, un) => {
                                        setCode(un);
                                        // console.log(text);
                                    }}
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
                                <Input
                                    placeholder="Cofirmação de Senha"
                                    onChange={(text) => {
                                        setPasswordConfirm(text);
                                        // console.log(un);
                                    }}
                                    isSecurityText={isSecurityTextConfirm}
                                    value={passwordConfirm}
                                    icon={!isSecurityTextConfirm ? "md-eye-outline" : "md-eye-off-outline"}
                                    iconColor="white"
                                    iconAction={() => {
                                        setIsSecurityTextConfirm(!isSecurityTextConfirm)
                                    }}
                                />
                            </>
                        )}


                    <Button text={step == 3 ? "Cadestre-se no Choppyfy" : "Próximo"} loading={props.loading} onPress={() => {
                        submit()
                    }} />

                    <Link text="Ja possuo uma conta" onPress={() => { props.navigation.navigate("Login") }} stylesText={{ textAlign: "center", marginTop: 20 }} />

                    <View style={styles.rodape}>
                        <View style={{ flex: 3, height: 1, backgroundColor: "white" }}></View>
                        <View
                            style={{ flex: 6, alignItems: "center" }}
                        >
                            <Text style={{ color: "white", fontSize: scale(14) }}>ou cadastre com</Text>
                        </View>
                        <View style={{ flex: 3, height: 1, backgroundColor: "white" }}></View>
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
                </Animatable.View >
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
        loadingValidateEmail: state.authentication.loadingValidateEmail,
        messageValidateEmail: state.authentication.messageValidateEmail,
        errorValidateEmail: state.authentication.errorValidateEmail,
        loading: state.authentication.loadingForgotPassword,
        message: state.authentication.messageForgotPassword,
        error: state.authentication.errorForgotPassword,
    };
};

export default connect(mapStateToProps)(ForgotPassword);