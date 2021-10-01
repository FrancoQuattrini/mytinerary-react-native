import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Cities from "../screens/Cities"
import Contact from "../screens/Contact"
import Home from "../screens/Home"
import Itineraries from "../screens/Itineraries"
import LogIn from "../screens/LogIn"
import SignUp from "../screens/SignUp"
import { Image, View } from "react-native"
const Stack = createNativeStackNavigator()
import { Icon } from "react-native-elements/dist/icons/Icon"

export const StackNav = (props) => {
   const LogoTitle = () => {
      return (
         <Icon
            onPress={() => props.navigation.toggleDrawer()}
            name="bars"
            type="font-awesome-5"
            color="white"
         />
      )
   }

   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: "black",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
               fontFamily: "Montserrat_700Bold",
               fontSize: 35,
            },
            headerRight: () => <LogoTitle />,
         }}
      >
         <Stack.Screen
            name="home"
            component={Home}
            options={{
               title: "MYtinerary",
            }}
         />
      </Stack.Navigator>
   )
}

export const StackNavCities = (props) => {
   const LogoTitle = () => {
      return (
         <Icon
            onPress={() => props.navigation.toggleDrawer()}
            name="bars"
            type="font-awesome-5"
            color="white"
         />
      )
   }

   const LogoBack = () => {
      return (
         <Icon
            onPress={() => props.navigation.navigate("Home")}
            name="home"
            type="font-awesome-5"
            color="white"
         />
      )
   }

   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: "black",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
               fontFamily: "Montserrat_700Bold",
               fontSize: 35,
            },
            headerTitleAlign: "center",
            headerRight: () => <LogoTitle />,
         }}
      >
         <Stack.Screen
            name="cities"
            component={Cities}
            options={{
               title: "Cities",
               headerLeft: () => <LogoBack />,
            }}
         />
         <Stack.Screen
            name="itineraries"
            component={Itineraries}
            options={{
               title: "Itineraries",
            }}
         />
      </Stack.Navigator>
   )
}

export const StackNavSignUp = (props) => {
   const LogoTitle = () => {
      return (
         <Icon
            onPress={() => props.navigation.toggleDrawer()}
            name="bars"
            type="font-awesome-5"
            color="white"
         />
      )
   }

   const LogoBack = () => {
      return (
         <Icon
            onPress={() => props.navigation.navigate("Home")}
            name="home"
            type="font-awesome-5"
            color="white"
         />
      )
   }

   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: "black",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
               fontFamily: "Montserrat_700Bold",
               fontSize: 35,
            },
            headerTitleAlign: "center",
            headerRight: () => <LogoTitle />,
         }}
      >
         <Stack.Screen
            name="signUp"
            component={SignUp}
            options={{
               title: "Sign Up",
               headerLeft: () => <LogoBack />,
            }}
         />
      </Stack.Navigator>
   )
}

export const StackNavLogIn = (props) => {
   const LogoTitle = () => {
      return (
         <Icon
            onPress={() => props.navigation.toggleDrawer()}
            name="bars"
            type="font-awesome-5"
            color="white"
         />
      )
   }

   const LogoBack = () => {
      return (
         <Icon
            onPress={() => props.navigation.navigate("Home")}
            name="home"
            type="font-awesome-5"
            color="white"
         />
      )
   }

   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: "black",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
               fontFamily: "Montserrat_700Bold",
               fontSize: 35,
            },
            headerTitleAlign: "center",
            headerRight: () => <LogoTitle />,
         }}
      >
         <Stack.Screen
            name="logIn"
            component={LogIn}
            options={{
               title: "Log In",
               headerLeft: () => <LogoBack />,
            }}
         />
      </Stack.Navigator>
   )
}

export const StackNavContact = (props) => {
   const LogoTitle = () => {
      return (
         <Icon
            onPress={() => props.navigation.toggleDrawer()}
            name="bars"
            type="font-awesome-5"
            color="white"
         />
      )
   }

   const LogoBack = () => {
      return (
         <Icon
            onPress={() => props.navigation.navigate("Home")}
            name="home"
            type="font-awesome-5"
            color="white"
         />
      )
   }

   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: "black",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
               fontFamily: "Montserrat_700Bold",
               fontSize: 35,
            },
            headerTitleAlign: "center",
            headerRight: () => <LogoTitle />,
         }}
      >
         <Stack.Screen
            name="contact"
            component={Contact}
            options={{
               title: "Contact",
               headerLeft: () => <LogoBack />,
            }}
         />
      </Stack.Navigator>
   )
}

export default StackNav
