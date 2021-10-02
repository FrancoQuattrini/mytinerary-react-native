import React, { useEffect, useState } from "react"
import {
   createDrawerNavigator,
   DrawerContent,
   DrawerContentScrollView,
   DrawerItem,
   DrawerItemList,
} from "@react-navigation/drawer"
const Drawer = createDrawerNavigator()
import StackNav, {
   StackNavCities,
   StackNavContact,
   StackNavLogIn,
   StackNavSignUp,
} from "./StackNav"
import { Icon, withTheme } from "react-native-elements"
import { connect } from "react-redux"
import usersActions from "../redux/actions/usersActions"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Image, Text, TouchableOpacity, View } from "react-native"

const DrawerNav = (props) => {
   console.log(props)
   const [token, setToken] = useState(null)
   const [firstname, setFirstname] = useState(null)
   const [picture, setPicture] = useState(null)
   useEffect(() => {
      storage()
   }, [])

   const storage = async () => {
      const token = await AsyncStorage.getItem("token")
      setToken(token)
      const firstname = await AsyncStorage.getItem("firstname")
      const picture = await AsyncStorage.getItem("picture")
      setFirstname(firstname)
      setPicture(picture)
   }

   const cleanStorage = async () => {
      setToken(null)
      setFirstname(null)
      setPicture(null)
      await props.logOut()
   }

   console.log(token)

   const DrawerInfo = (props) => {
      return (
         <DrawerContentScrollView
            style={{ backgroundColor: "#591481" }}
            {...props}
         >
            <View
               style={{
                  width: "100%",
                  height: 200,
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               {token ? (
                  <Image
                     style={{ width: "50%", height: 140, borderRadius: 100 }}
                     source={{
                        uri: picture,
                     }}
                  />
               ) : (
                  <Image
                     style={{ width: "50%", height: 140 }}
                     source={{
                        uri: "https://i.postimg.cc/C56yrT9j/iconuser.png",
                     }}
                  />
               )}
               <Text
                  style={{
                     fontSize: 30,
                     color: "white",
                     paddingTop: 5,
                     fontFamily: "Montserrat_500Medium",
                  }}
               >
                  {token && `👋 Hi ${firstname}!`}
               </Text>
            </View>
            <DrawerItemList {...props} />
            {token && (
               <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                     cleanStorage()
                  }}
               >
                  <View
                     style={{
                        backgroundColor: "white",
                        marginHorizontal: 10,
                        marginVertical: 5,
                        borderRadius: 4,
                        height: 57,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                     }}
                  >
                     <Text
                        style={{
                           fontSize: 25,
                           fontFamily: "Montserrat_500Medium",
                        }}
                     >
                        Log Out
                     </Text>
                  </View>
               </TouchableOpacity>
            )}
         </DrawerContentScrollView>
      )
   }

   return (
      <Drawer.Navigator
         drawerContent={(props) => <DrawerInfo {...props} />}
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
            drawerType: "slide",
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
         {!token && (
            <>
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
            </>
         )}

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

const mapStateToProps = (state) => {
   return {
      token: state.users.token,
      firstname: state.users.firstname,
      picture: state.users.picture,
      status: state.users.status,
   }
}

const mapDispatchToProps = {
   logOut: usersActions.logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNav)
