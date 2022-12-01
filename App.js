import React, { useState } from 'react'
import Login from "./src/screens/Login"
import SignIn from "./src/screens/SignIn"
import Home from "./src/screens/Home"
import Settings from "./src/screens/Settings"
import Ranking from "./src/screens/Ranking"
import Notification from "./src/screens/Notification"
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, View, TouchableOpacity, Dimensions, Text } from 'react-native';

export default function App() {
  const [auth, setAuth] = useState(true)
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const Header = (screen) => {
    return (
      <View style={{ alignSelf: "center", flexDirection: "row", height: "100%", width: Dimensions.get('window').width, justifyContent: "space-around" }}>
        {
          screen.screen != "Início" ?
            <TouchableOpacity hitslop={{ top: 100, bottom: 100, right: 100, left: 100 }} style={{ flex: 1, left: 10 }} onPress={() => {
            }}>
              <Ionicons name={"arrow-back"} size={35} color={"white"} />
            </TouchableOpacity>
            :
            <Text style={{ flex: 1, left: 10, color: "white", fontSize: 16, marginTop: 5 }}>Bem Vindo</Text>
        }

        <View style={{ flex: 1, alignItems: "center" }}>
          <Image source={require("./assets/logo.png")} style={{ resizeMode: "contain", width: 35, height: 35 }} />
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity hitslop={{ top: 100, bottom: 100, right: 100, left: 100 }} style={{ flex: 1, left: 10 }} onPress={() => { }}>
            <View style={{ backgroundColor: "white", right: 20, borderRadius: 20 }}>
              <Image source={require("./assets/google.png")} style={{ resizeMode: "contain", width: 35, height: 35 }} />
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
              size = 80
            } else if (route.name === 'Configurações') {
              iconName = focused ? 'ios-construct' : 'ios-construct-outline';
            } else if (route.name === 'Ranking') {
              iconName = focused ? 'ios-podium' : 'ios-podium-outline';
            } else if (route.name === 'Notificações') {
              iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
            } else if (route.name === 'Meu Perfil') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} style={{ marginTop: route.name == 'Início' ? -50 : 0 }} />;
          },
          tabBarStyle: {
            backgroundColor: "#111111",
            borderTopColor: "#111111",
            height: 60,
            paddingTop: 10,
            paddingBottom: 10,

          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'lightgray',
          headerStyle: {
            backgroundColor: "#111111",
          },
          headerTitle: () => <Header screen={route.name} />,
        })}
        initialRouteName="Início"
      >
        <Tab.Screen name="Ranking" component={Ranking} />
        <Tab.Screen name="Meu Perfil" component={Settings} />
        <Tab.Screen name="Início" component={Home} />
        <Tab.Screen name="Notificações" component={Notification} />
        <Tab.Screen name="Configurações" component={Settings} />
      </Tab.Navigator >
    );
  }
  const Unauthenticated = () => {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        {
          auth ? <Authenticated /> : <Unauthenticated />
        }

      </NavigationContainer>
    </PaperProvider>
  )
}
