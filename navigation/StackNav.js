import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Cities from "../screens/Cities"
import Contact from "../screens/Contact"
import Home from "../screens/Home"
import Itineraries from "../screens/Itineraries"
import LogIn from "../screens/LogIn"
import SignUp from "../screens/SignUp"
const Stack = createNativeStackNavigator()

const StackNav = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="home"
            component={Home}
            options={{
               title: "MYtinerary",
            }}
         />
         <Stack.Screen
            name="cities"
            component={Cities}
            options={{
               title: "Cities",
            }}
         />
         <Stack.Screen
            name="itineraries"
            component={Itineraries}
            options={{
               title: "Itineraries",
            }}
         />
         <Stack.Screen
            name="signUp"
            component={SignUp}
            options={{
               title: "Sign Up",
            }}
         />
         <Stack.Screen
            name="logIn"
            component={LogIn}
            options={{
               title: "Log In",
            }}
         />
         <Stack.Screen
            name="contact"
            component={Contact}
            options={{
               title: "Contact",
            }}
         />
      </Stack.Navigator>
   )
}

export default StackNav
