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
   StackNavAboutUs,
   StackNavCities,
   StackNavLogIn,
   StackNavSignUp,
} from "./StackNav"
import { Icon } from "react-native-elements"
import { connect } from "react-redux"
import usersActions from "../redux/actions/usersActions"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
   Image,
   ImageBackground,
   Text,
   TouchableOpacity,
   View,
} from "react-native"

const DrawerNav = (props) => {
   const { token, firstname, picture } = props
   useEffect(() => {
      storage()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const storage = async () => {
      if (await AsyncStorage.getItem("token")) {
         const token = await AsyncStorage.getItem("token")
         const firstname = await AsyncStorage.getItem("firstname")
         const picture = await AsyncStorage.getItem("picture")
         props.logInLS(token)
      }
   }

   const cleanStorage = async () => {
      await props.logOut()
   }

   const DrawerInfo = (props) => {
      return (
         <ImageBackground
            style={{ width: "100%", height: 1000 }}
            source={{
               uri: "https://i.postimg.cc/BvJc1kP6/back-Drawer.jpg",
            }}
         >
            <DrawerContentScrollView {...props}>
               <View
                  style={{
                     width: "100%",
                     height: 220,
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
                        marginTop: 10,
                        paddingVertical: 3,
                        paddingHorizontal: 15,
                        fontFamily: "Montserrat_500Medium",
                        borderRadius: 100,
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
                        props.navigation.navigate("Home")
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
                        <Icon
                           name="sign-out-alt"
                           type="font-awesome-5"
                           color="black"
                           style={{ paddingRight: 30 }}
                        />
                        <Text
                           style={{
                              fontSize: 25,
                              fontFamily: "Montserrat_500Medium",
                              paddingRight: 20,
                           }}
                        >
                           Log Out
                        </Text>
                     </View>
                  </TouchableOpacity>
               )}
            </DrawerContentScrollView>
         </ImageBackground>
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
                     style={{ paddingLeft: 28 }}
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
            name="AboutUs"
            component={StackNavAboutUs}
            options={{
               title: "About Us",
               headerShown: false,
               drawerIcon: () => (
                  <Icon
                     name="mail-bulk"
                     type="font-awesome-5"
                     color="black"
                     style={{ paddingLeft: 28 }}
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
   }
}

const mapDispatchToProps = {
   logInLS: usersActions.logInLS,
   logOut: usersActions.logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNav)
