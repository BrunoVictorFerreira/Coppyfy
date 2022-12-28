import React, { useEffect, useState } from 'react'
import GameDetails from "./src/screens/GameDetails"
import Login from "./src/screens/Login"
import Register from "./src/screens/Register"
import ForgotPassword from "./src/screens/ForgotPassword"
import Home from "./src/screens/Home"
import Settings from "./src/screens/Settings"
import Ranking from "./src/screens/Ranking"
import Profile from "./src/screens/Profile"
import Formation from "./src/components/Formation"
import Text from "./src/components/Text"
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, View, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux'
import { store, persistor } from './src/utils/configureStore.js';
import { PersistGate } from 'redux-persist/integration/react'
import { connect } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';


const client = new ApolloClient({
  uri: 'localhost:8000/api/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <PaperProvider>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <NavigationContainer>
              <StatusBar
                barStyle="dark-content"
                hidden={false}
                translucent={false}
              />
              <ConnectedRoot />
            </NavigationContainer>
          </Provider>
        </ApolloProvider>
      </PersistGate>
    </PaperProvider>
  )
}

const Root = (props) => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const Header = (screen) => {
    return (
      <View style={{ alignSelf: "center", flexDirection: "row", width: Dimensions.get('window').width, justifyContent: "space-between" }}>

        <TouchableOpacity hitslop={{ top: 100, bottom: 100, right: 100, left: 100 }} onPress={() => { }}>
          <View style={{ left: 20, flexDirection: "row" }}>
            {console.warn("props?.user?.photo", props?.user?.photo)}
            <Image source={{ uri: props?.user?.photo }} style={{ resizeMode: "contain", width: 50, height: 50, borderRadius: 25 }} />
            <View style={{ marginLeft: 10, flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
              <Text color="#606060" weight='bold' size={14}>Olá, {props.user.name?.split(" ")[0] + " " + props.user.name?.split(" ")[1]}</Text>
              <Text color="#ac1b3a" weight='medium' size={10}>Bem vindo a Catar 2022</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* {
          screen.screen == "Início" ?

          <Text weight="bold" style={{ flex: 1, left: 10, color: "white", fontSize: 16, marginTop: 5 }}>Olá, {props.user.name?.split(" ")[0]}</Text>
            // <Text weight="bold" style={{ flex: 1, left: 10, color: "white", fontSize: 16, marginTop: 5 }}>{screen.screen}</Text>
            :
            <View style={{flex: 1}}/>
        } */}

        {/* <View style={{ flex: 1, alignItems: "center" }}>
          <Image source={require("./assets/logo.png")} style={{ resizeMode: "contain", width: 35, height: 35 }} />
        </View> */}
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
          <TouchableOpacity hitslop={{ top: 100, bottom: 100, right: 100, left: 100 }} onPress={() => { }}>
            <View style={{ position: "absolute", backgroundColor: "green", width: 10, height: 10, left: 10, borderRadius: 5, zIndex: 2 }}>

            </View>
            <Ionicons
              name={'ios-notifications-outline'}
              size={20}
              color={'#ac1b3a'}
              style={{ marginRight: 50 }}
            />
          </TouchableOpacity>

        </View>
      </View >
    )
  }

  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
              size = 30
            } else if (route.name === 'Configurações') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            } else if (route.name === 'Ranking') {
              iconName = focused ? 'ios-podium' : 'ios-podium-outline';
            } else if (route.name === 'Notificações') {
              iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
            } else if (route.name === 'Meu Perfil') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }

            // You can return any component that you like here!
            return <><Ionicons
              name={iconName}
              size={size}
              color={color}
              style={{
                marginTop: 0,
              }} />
              {/* <Text size={10} weight="medium" color={focused ? "" : }>{route.name}</Text> */}
            </>;
          },

          tabBarShowLabel: false,
          tabBarActiveTintColor: '#880218',
          tabBarInactiveTintColor: '#606060',
          headerStyle: {
            backgroundColor: "#fafafa",
            height: 80
          },
          tabBarInactiveBackgroundColor: "#fdfdfd",
          tabBarActiveBackgroundColor: "#fdfdfd",
          tabBarStyle: {
            borderTopColor: "#fdfdfd",
            backgroundColor: "#fdfdfd",
            height: 60,
            paddingBottom: 10,
            paddingTop: 10,
            shadowColor: 'rgba(0,0,0,.5)',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.9,
            shadowRadius: 15,
          },

          tabBarHideOnKeyboard: true,
          headerTitle: () => <Header screen={route.name} />,
        })}
        initialRouteName="Início"
      >
        <Tab.Screen name="Ranking" component={Ranking} />
        {/* <Tab.Screen name="Meu Time" component={Formation} /> */}
        <Tab.Screen name="Início" component={Home} />
        <Tab.Screen name="Meu Perfil" component={Profile} />
        {/* <Tab.Screen name="Notificações" component={Notification} /> */}
        <Tab.Screen name="Configurações" component={Settings} />
      </Tab.Navigator >
    )
  }

  const Authenticated = () => {
    return (
      <>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ac1b3a',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackVisible:true,
            headerBackTitle: "voltar"
          }}
        >
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="GameDetails"
          options={{
            headerTitle: (props) => <Text size={16} weight="bold">Detalhes do Jogo</Text>,
            // headerRight: () => (
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),
          }}
          component={GameDetails}/>
        </Stack.Navigator>
      </>
    );
  }
  const Unauthenticated = () => {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  return props.token == null ? <Unauthenticated /> : <Authenticated />

}

const mapStateToProps = (state) => {
  return {
    token: state.authentication.token,
    user: state.authentication.user,
  }
}

const ConnectedRoot = connect(mapStateToProps)(Root)