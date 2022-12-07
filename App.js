import React, { useEffect, useState } from 'react'
import Login from "./src/screens/Login"
import SignIn from "./src/screens/SignIn"
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
import { Image, View, TouchableOpacity, Dimensions } from 'react-native';
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
              <ConnectedRoot />
            </NavigationContainer>
          </Provider>
        </ApolloProvider>
      </PersistGate>
    </PaperProvider>
  )
}

const Root = (props) => {
  useEffect(() => {
    console.warn('props', props)
  }, [props])
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const Header = (screen) => {
    return (
      <View style={{ alignSelf: "center", flexDirection: "row", height: "100%", width: Dimensions.get('window').width, justifyContent: "space-around" }}>
        {
          screen.screen != "Início" ?

            <Text weight="bold" style={{ flex: 1, left: 10, color: "white", fontSize: 16, marginTop: 5 }}>{screen.screen}</Text>
            :
            <Text weight="bold" style={{ flex: 1, left: 10, color: "white", fontSize: 16, marginTop: 5 }}>Olá, {props.user.name}</Text>
        }

        <View style={{ flex: 1, alignItems: "center" }}>
          <Image source={require("./assets/logo.png")} style={{ resizeMode: "contain", width: 35, height: 35 }} />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
          <TouchableOpacity hitslop={{ top: 100, bottom: 100, right: 100, left: 100 }} onPress={() => { }}>
              <Ionicons
                name={'ios-notifications'}
                size={20}
                color={'white'}
                style={{marginRight: 50}}
              />
          </TouchableOpacity>
          <TouchableOpacity hitslop={{ top: 100, bottom: 100, right: 100, left: 100 }} onPress={() => { }}>
            <View style={{ right: 20, width: 35, height: 35 }}>
              <Image source={{ uri: props.user.photo }} style={{ resizeMode: "contain", width: "100%", height: "100%", borderRadius: 20 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View >
    )
  }

  const Authenticated = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = focused ? 'ios-football' : 'ios-football-outline';
              size = 50
            } else if (route.name === 'Configurações') {
              iconName = focused ? 'ios-construct' : 'ios-construct-outline';
            } else if (route.name === 'Meu Time') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
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
                marginTop: route.name == 'Início' ? -30 : 0,
              }} />
              <Text size={10} weight="medium">{route.name}</Text>
            </>;
          },

          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'lightgray',
          headerStyle: {
            backgroundColor: "#111111",
          },
          tabBarInactiveBackgroundColor: "#111111",
          tabBarActiveBackgroundColor: "#111111",
          tabBarStyle: {
            borderTopColor: "#111111",
            backgroundColor: "#111111",
            height: 60,
            paddingBottom: 10,
            paddingTop: 10,
          },
          tabBarBackground: () => (
            <LinearGradient colors={['transparent', '#111112', '#111111']}
              style={{
                position: "absolute", backgroundColor: "#111111", backgroundColor: "#111111",
                borderTopColor: "#111111",
                height: 80,
                width: "20%",
                bottom: 10,
                alignSelf: "center",
                borderRadius: 100
              }}>

            </LinearGradient>
          ),
          tabBarHideOnKeyboard: true,
          headerTitle: () => <Header screen={route.name} />,
        })}
        initialRouteName="Início"
      >
        <Tab.Screen name="Ranking" component={Ranking} />
        <Tab.Screen name="Meu Time" component={Formation} />
        <Tab.Screen name="Início" component={Home} />
        <Tab.Screen name="Meu Perfil" component={Profile} />
        {/* <Tab.Screen name="Notificações" component={Notification} /> */}
        <Tab.Screen name="Configurações" component={Settings} />
      </Tab.Navigator >
    );
  }
  const Unauthenticated = () => {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
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
