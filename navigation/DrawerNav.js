import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Cities from "../screens/Cities"
import Contact from "../screens/Contact"
import Home from "../screens/Home"
import Itineraries from "../screens/Itineraries"
import LogIn from "../screens/LogIn"
import SignUp from "../screens/SignUp"
const Drawer = createDrawerNavigator()
import StackNav from "./StackNav"

const DrawerNav = () => {
   return (
      <Drawer.Navigator>
         <Drawer.Screen
            name="home"
            component={StackNav}
            options={{
               title: "MYtinerary",
               headerShown: false,
            }}
         />
         <Drawer.Screen
            name="cities"
            component={Cities}
            options={{
               title: "Cities",
            }}
         />
         <Drawer.Screen
            name="itineraries"
            component={Itineraries}
            options={{
               title: "Itineraries",
            }}
         />
         <Drawer.Screen
            name="signUp"
            component={SignUp}
            options={{
               title: "Sign Up",
            }}
         />
         <Drawer.Screen
            name="logIn"
            component={LogIn}
            options={{
               title: "Log In",
            }}
         />
         <Drawer.Screen
            name="contact"
            component={Contact}
            options={{
               title: "Contact",
            }}
         />
      </Drawer.Navigator>
   )
}

export default DrawerNav
