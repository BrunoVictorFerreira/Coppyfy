import React, { useState, useEffect } from "react"
import { StyleSheet, Image, View, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import IfComponent from "../../components/IfComponent/index"
import Box from "../../components/Box/index"
import Text from "../../components/Text/index"
import { connect } from "react-redux";
import { groups, teamsForGroup } from '../../store/actions/groups';
import { scale } from 'react-native-size-matters';

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
            <ScrollView contentContainerStyle={{ flex: 1, flexDirection: "column" }}>
                <View style={{ 
                    flex: 1, 
                    backgroundColor: "#ac1b3a", padding: 20, flexDirection: "row" }}>
                    <View style={{ flex: 1, 
                        shadowColor: 'rgba(0,0,0,.3)',
                        shadowOffset: { width: -2, height: 10 },
                        shadowOpacity: 0.9,
                        shadowRadius: 10,
                        backgroundColor: "#f0ece9", borderRadius: 30, flexDirection: "column", marginRight: 20 }}>
                        <View style={{ flex: 2, borderBottomColor: "lightgray", borderBottomWidth: 1, alignItems: "center", justifyContent: "center" }}>
                            <Text color="gray" weight="bold" size={18}>Grupo A</Text>
                        </View>
                        <View style={{ flex: 10, paddingVertical: 5, paddingHorizontal: 10 }}>
                            <View style={{
                                borderRadius: 15,
                                flex: 1,
                                flexDirection: "row",
                               
                            }} >
                                <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                                    <View style={{ backgroundColor: "#ac1b3a", borderRadius: 20, width: 22, height: 22, justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ backgroundColor: "white", borderRadius: 20, width: 21, height: 21, justifyContent: "center" }}>
                                            <Image source={require("../../../assets/brasoes/brasil.png")} style={[styles.logo, { borderRadius: 100, height: 20, width: 20 }]} />
                                        </View>
                                    </View>
                                    <Text size={14} weight="bold" color="#ac1b3a" style={{ marginLeft: 10 }}>Brasil</Text>
                                </View>
                            </View>
                            <View style={{
                                borderRadius: 15,
                                flex: 1,
                                flexDirection: "row",
                               
                            }} >
                                <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                                    <View style={{ backgroundColor: "#ac1b3a", borderRadius: 20, width: 22, height: 22, justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ backgroundColor: "white", borderRadius: 20, width: 21, height: 21, justifyContent: "center" }}>
                                            <Image source={require("../../../assets/brasoes/brasil.png")} style={[styles.logo, { borderRadius: 100, height: 20, width: 20 }]} />
                                        </View>
                                    </View>
                                    <Text size={14} weight="bold" color="#ac1b3a" style={{ marginLeft: 10 }}>Brasil</Text>
                                </View>
                            </View>
                            <View style={{
                                borderRadius: 15,
                                flex: 1,
                                flexDirection: "row",
                               
                            }} >
                                <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                                    <View style={{ backgroundColor: "#ac1b3a", borderRadius: 20, width: 22, height: 22, justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ backgroundColor: "white", borderRadius: 20, width: 21, height: 21, justifyContent: "center" }}>
                                            <Image source={require("../../../assets/brasoes/brasil.png")} style={[styles.logo, { borderRadius: 100, height: 20, width: 20 }]} />
                                        </View>
                                    </View>
                                    <Text size={14} weight="bold" color="#ac1b3a" style={{ marginLeft: 10 }}>Brasil</Text>
                                </View>
                            </View>
                            <View style={{
                                borderRadius: 15,
                                flex: 1,
                                flexDirection: "row",
                               
                            }} >
                                <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                                    <View style={{ backgroundColor: "#ac1b3a", borderRadius: 20, width: 22, height: 22, justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ backgroundColor: "white", borderRadius: 20, width: 21, height: 21, justifyContent: "center" }}>
                                            <Image source={require("../../../assets/brasoes/brasil.png")} style={[styles.logo, { borderRadius: 100, height: 20, width: 20 }]} />
                                        </View>
                                    </View>
                                    <Text size={14} weight="bold" color="#ac1b3a" style={{ marginLeft: 10 }}>Brasil</Text>
                                </View>
                            </View>
                            
                           
                        </View>
                    </View>
                    <View style={{ flex: 1, 
                        shadowColor: 'rgba(0,0,0,.3)',
                        shadowOffset: { width: -2, height: 10 },
                        shadowOpacity: 0.9,
                        shadowRadius: 10,
                        backgroundColor: "#f0ece9", borderRadius: 30, flexDirection: "column", marginRight: 20 }}>
                        <View style={{ flex: 2, borderBottomColor: "lightgray", borderBottomWidth: 1, alignItems: "center", justifyContent: "center" }}>
                            <Text color="gray" weight="bold" size={18}>Grupo A</Text>
                        </View>
                        <View style={{ flex: 10, paddingVertical: 5, paddingHorizontal: 10 }}>
                            <View style={{
                                borderRadius: 15,
                                flex: 1,
                                flexDirection: "row",
                               
                            }} >
                                <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                                    <View style={{ backgroundColor: "#ac1b3a", borderRadius: 20, width: 22, height: 22, justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ backgroundColor: "white", borderRadius: 20, width: 21, height: 21, justifyContent: "center" }}>
                                            <Image source={require("../../../assets/brasoes/brasil.png")} style={[styles.logo, { borderRadius: 100, height: 20, width: 20 }]} />
                                        </View>
                                    </View>
                                    <Text size={14} weight="bold" color="#ac1b3a" style={{ marginLeft: 10 }}>Brasil</Text>
                                </View>
                            </View>
                            <View style={{
                                borderRadius: 15,
                                flex: 1,
                                flexDirection: "row",
                               
                            }} >
                                <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                                    <View style={{ backgroundColor: "#ac1b3a", borderRadius: 20, width: 22, height: 22, justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ backgroundColor: "white", borderRadius: 20, width: 21, height: 21, justifyContent: "center" }}>
                                            <Image source={require("../../../assets/brasoes/brasil.png")} style={[styles.logo, { borderRadius: 100, height: 20, width: 20 }]} />
                                        </View>
                                    </View>
                                    <Text size={14} weight="bold" color="#ac1b3a" style={{ marginLeft: 10 }}>Brasil</Text>
                                </View>
                            </View>
                            <View style={{
                                borderRadius: 15,
                                flex: 1,
                                flexDirection: "row",
                               
                            }} >
                                <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                                    <View style={{ backgroundColor: "#ac1b3a", borderRadius: 20, width: 22, height: 22, justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ backgroundColor: "white", borderRadius: 20, width: 21, height: 21, justifyContent: "center" }}>
                                            <Image source={require("../../../assets/brasoes/brasil.png")} style={[styles.logo, { borderRadius: 100, height: 20, width: 20 }]} />
                                        </View>
                                    </View>
                                    <Text size={14} weight="bold" color="#ac1b3a" style={{ marginLeft: 10 }}>Brasil</Text>
                                </View>
                            </View>
                            <View style={{
                                borderRadius: 15,
                                flex: 1,
                                flexDirection: "row",
                               
                            }} >
                                <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                                    <View style={{ backgroundColor: "#ac1b3a", borderRadius: 20, width: 22, height: 22, justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ backgroundColor: "white", borderRadius: 20, width: 21, height: 21, justifyContent: "center" }}>
                                            <Image source={require("../../../assets/brasoes/brasil.png")} style={[styles.logo, { borderRadius: 100, height: 20, width: 20 }]} />
                                        </View>
                                    </View>
                                    <Text size={14} weight="bold" color="#ac1b3a" style={{ marginLeft: 10 }}>Brasil</Text>
                                </View>
                            </View>
                            
                           
                        </View>
                    </View>
                    
                    
                    
                </View>
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
        groups: state.groups.groups
    };
};

export default connect(mapStateToProps)(Ranking);