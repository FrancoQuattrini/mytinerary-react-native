import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
const Drawer = createDrawerNavigator()
import StackNav, {
   StackNavCities,
   StackNavContact,
   StackNavLogIn,
   StackNavSignUp,
} from "./StackNav"
import { Icon } from "react-native-elements"

const DrawerNav = () => {
   return (
      <Drawer.Navigator
         screenOptions={{
            drawerContentStyle: {
               backgroundColor: "#6016AC",
            },
            drawerLabelStyle: {
               fontSize: 26,
               fontFamily: "Montserrat_500Medium",
            },
            drawerInactiveBackgroundColor: "white",
            drawerActiveTintColor: "white",
            drawerInactiveTintColor: "black",
            drawerActiveBackgroundColor: "#f43ad5",
            headerRight: () => <LogoTitle />,
         }}
      >
         <Drawer.Screen
            name="Home"
            component={StackNav}
            options={{
               title: "Home",
               headerShown: false,
               drawerIcon: () => (
                  <Icon
                     name="home"
                     type="font-awesome-5"
                     color="black"
                     style={{ paddingLeft: 30 }}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Cities"
            component={StackNavCities}
            options={{
               title: "Cities",
               headerShown: false,
               drawerIcon: () => (
                  <Icon
                     name="globe-americas"
                     type="font-awesome-5"
                     color="black"
                     style={{ paddingLeft: 30 }}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="SignUp"
            component={StackNavSignUp}
            options={{
               title: "Sign Up",
               headerShown: false,
               drawerIcon: () => (
                  <Icon
                     name="file-signature"
                     type="font-awesome-5"
                     color="black"
                     style={{ paddingLeft: 30 }}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="LogIn"
            component={StackNavLogIn}
            options={{
               title: "Log In",
               headerShown: false,
               drawerIcon: () => (
                  <Icon
                     // sign-out-alt para log out
                     name="sign-in-alt"
                     type="font-awesome-5"
                     color="black"
                     style={{ paddingLeft: 30 }}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Contact"
            component={StackNavContact}
            options={{
               title: "Contact",
               headerShown: false,
               drawerIcon: () => (
                  <Icon
                     name="mail-bulk"
                     type="font-awesome-5"
                     color="black"
                     style={{ paddingLeft: 30 }}
                  />
               ),
            }}
         />
      </Drawer.Navigator>
   )
}

export default DrawerNav
