import React, { useState, useEffect, useMemo } from "react";
import {
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
  View,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import EmphasisHome from "../../components/EmphasisHome/index";
import Vitrine from "../../components/Vitrine/index";
import VitrineNoticies from "../../components/VitrineNoticies/index";
import Text from "../../components/Text/index";
import Carousel from "../../components/Carousel/index";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authentication";
import { matchs } from "../../store/actions/groups";
import moment from "moment";
import io from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio } from "expo-av";
import { setAudioModeAsync } from "expo-av/build/Audio";
import { createNotifications } from "../../store/actions/notifications";
import LottieView from "lottie-react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

const socket = io("http://192.168.1.102:8081");

// adicionarJogoResponse()
// async function playSound() {
//     console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync( require('./../../../assets/sound/notificacao.mp3'));
//     setAudioModeAsync({
//         playsInSilentModeIOS: true,
//   }
//           );
//     setSound(sound);

//     console.log('Playing Sound');
//     await sound.playAsync();
//   }

const Home = (props, { navigation }) => {
  const [matchsState, setMatchsState] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const [sound, setSound] = useState();
  const [isEnabled, setIsEnabled] = useState(false);
  const [select, setSelect] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  async function playSound() {
    // console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require("./../../../assets/sound/notificacao.mp3")
    );
    setAudioModeAsync({
      playsInSilentModeIOS: true,
    });
    setSound(sound);

    // console.log('Playing Sound');
    await sound.playAsync();
  }

  useMemo(() => {
    props.dispatch(matchs(props.token));
    socket.on("adicionar_jogo_response", (data) => {
      props.dispatch(
        createNotifications({
          message:
            "Jogo entre " +
            data?.payload?.data?.create_game?.first_team_description?.[0]
              ?.name +
            " X " +
            data?.payload?.data?.create_game?.second_team_description?.[0]
              ?.name +
            " cadastrado!",
          title: "Novo Jogo Cadastrado",
        })
      );
      props.dispatch(matchs(props.token));
      playSound();
    });
    socket.emit("entrada_app", props.user);
    socket.on("adicionar_resultado_jogo_response", (data) => {
      props.dispatch(
        createNotifications({
          message:
            data?.payload?.data?.create_game_result?.first_team_description?.[0]
              ?.name +
            " fez " +
            data?.payload?.data?.create_game_result?.result?.[0]?.first_team +
            " e a(o) " +
            data?.payload?.data?.create_game_result
              ?.second_team_description?.[0]?.name +
            " fez " +
            data?.payload?.data?.create_game_result?.result?.[0]?.second_team,
          title: "Novo Resultado de Jogo cadastrado",
        })
      );
      props.dispatch(matchs(props.token));
      playSound();
    });
    socket.on("adicionar_historico_jogo_response", (data) => {
      props.dispatch(
        createNotifications({
          message: data?.payload?.data?.create_game_historic?.descricao,
          title: "Novo historico de Jogo cadastrado",
        })
      );
      // props.dispatch(matchs(props.token))
      playSound();
    });
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          //   console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    var array = [];
    var filterOrNotFilter =
      seeAll == false
        ? props.matchs?.filter(
            (item) =>
              moment(item?.date).format("DD/MM/YYYY") ==
              moment().format("DD/MM/YYYY")
          )
        : props?.matchs;
    filterOrNotFilter?.map((item) =>
      array.push({
        gradient: ["#0c1a75", "#2946d8"],
        id: item?.id,
        firstId: item?.first_team_description[0]?.id,
        firstBrasao: item?.first_team_description[0]?.brasao[0]?.url,
        firstName: item?.first_team_description[0]?.name,
        secondId: item?.second_team_description[0]?.id,
        secondBrasao: item?.second_team_description[0]?.brasao[0]?.url,
        secondName: item?.second_team_description[0]?.name,
        result: item?.result,
        date: item?.date,
        important: item.important,
        historic: item.historic,
        informacao_partida: item.informacao_partida,
        formacao: item.formacao,
        jogadoresFirst: item?.first_team_description[0]?.jogador,
        jogadoresSecond: item?.second_team_description[0]?.jogador,
      })
    );
    setMatchsState(array);
  }, [seeAll]);

  useEffect(() => {
    var array = [];
    props.matchs != null &&
      props.matchs
        ?.filter(
          (item) =>
            moment(item?.date).format("DD/MM/YYYY") ==
            moment().format("DD/MM/YYYY")
        )
        ?.map((item) =>
          array.push({
            gradient: ["#0c1a75", "#2946d8"],
            id: item?.id,
            firstId: item?.first_team_description[0]?.id,
            firstBrasao: item?.first_team_description[0]?.brasao[0]?.url,
            firstName: item?.first_team_description[0]?.name,
            secondId: item?.second_team_description[0]?.id,
            secondBrasao: item?.second_team_description[0]?.brasao[0]?.url,
            secondName: item?.second_team_description[0]?.name,
            result: item?.result,
            date: item?.date,
            important: item.important,
            historic: item.historic,
            informacao_partida: item.informacao_partida,
            formacao: item.formacao,
            jogadoresFirst: item?.first_team_description[0]?.jogador,
            jogadoresSecond: item?.second_team_description[0]?.jogador,
          })
        );
    setMatchsState(array);
  }, [props.matchs]);
  // props.dispatch(logout())

  return (
    <SafeAreaView
      style={[styles.container, { paddingTop: StatusBar.currentHeight }]}
    >
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#ac1b3a",
          position: "absolute",
          bottom: 20,
          right: 30,
          alignItems: 'center', justifyContent: 'center',
          borderRadius: 20,
          zIndex: 10
        }}
        onPress={() => {props.navigation.navigate("Support", props)}}
        hitSlop={{left: 30, right: 30, top: 30, bottom: 30}}
      >
        <Ionicons name={"ios-call"} size={20} color={"white"} style={{}} />
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 60,
        }}
      >
        <Text
          style={[
            styles.text,
            { textAlign: "left", marginTop: 20, marginBottom: 20 },
          ]}
          size={16}
          weight="bold"
        >
          Informações
        </Text>
        <Carousel
          options={[
            { key: 1, img: require("../../../assets/notice1.jpg") },
            { key: 2, img: require("../../../assets/notice2.jpg") },
            { key: 3, img: require("../../../assets/notice2.jpg") },
            { key: 4, img: require("../../../assets/notice2.jpg") },
          ]}
          callbackParent={() => {}}
          vitrineNoticies
        />

        <Vitrine
          options={matchsState}
          seeAll={(value) => {
            setSeeAll(value);
          }}
          loading={props.loadingGroup}
          style={{ flex: 1 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",

    backgroundColor: "#f0ece9",
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
    zIndex: 0,
  },

  degrade: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "90%",
    zIndex: 0,
  },
});

const mapStateToProps = (state) => {
  return {
    token: state.authentication.token,
    loading: state.authentication.loading,
    loadingGroup: state.groups.loading,
    error: state.authentication.error,
    matchs: state.groups.matchs,
    user: state.authentication.user,
  };
};

export default connect(mapStateToProps)(Home);
