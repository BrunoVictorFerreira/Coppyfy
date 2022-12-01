import React, { useState, useRef, useEffect } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { MaskedTextInput } from "react-native-mask-text";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Input from "../../components/Input/index"
import Link from "../../components/Link/index"
import LinkWithText from "../../components/LinkWithText/index"
import Button from "../../components/Button/index"

export default function SignIn({ navigation }) {
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [email, setEmail] = useState("")
    const [isSecurityText, setIsSecurityText] = useState(false)
    const [isSecurityTextConfirm, setIsSecurityTextConfirm] = useState(false)

    const [step, setStep] = useState(1)

    const submit = () => {
        if(step == 3){
            navigation.navigate('Login')
        }else{

            setStep(step + 1)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Image source={require("../../../assets/home.jpg")} style={[styles.image]} />
                <Image source={require("../../../assets/logo.png")} style={styles.logo} />
                <LinearGradient colors={['transparent', 'rgba(0,0,0,.7)', 'black']} style={styles.degrade} />
                <Text adjustsFontSizeToFit style={styles.text}>Cadastro Coppyfy</Text>
                <View style={styles.inputs}>
                    {
                        (step == 1 || step == 2) && (
                            <Input
                                placeholder="CPF"
                                type="cpf"
                                autoFocus={true}
                                value={cpf}
                                onChange={(text, un) => {
                                    setCpf(un);
                                    
                                    // console.log(text);
                                }}
                                keyboardType="numeric"
                            />
                        )
                    }
                    {
                        step == 2 && (
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
                        step >= 3 && (
                            <>
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


                    <Button text={step == 3 ? "Cadestre-se no Choppyfy" : "Próximo"} onPress={() => {
                        submit()
                    }} />

                    <Link text="Ja possuo uma conta" onPress={() => { navigation.navigate("Login") }} stylesText={{ textAlign: "center", marginTop: 20 }} />

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