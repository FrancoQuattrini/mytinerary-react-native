import React, { useState } from "react"
import {
   ImageBackground,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   TouchableWithoutFeedback,
   View,
} from "react-native"
import { Icon } from "react-native-elements"

const LogIn = () => {
   const [userLogged, setUserLogged] = useState({
      email: "",
      password: "",
   })

   const inputHandler = (e, campo) => {
      setUserLogged({
         ...userLogged,
         [campo]: e,
      })
   }

   return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
         <View style={styles.container}>
            <ImageBackground
               source={{ uri: "https://i.postimg.cc/NfVPjbfK/login.jpg" }}
               style={styles.image}
            >
               <View>
                  <Text style={styles.title}>Welcome Back!</Text>
                  <Text style={styles.titleShadow}>Welcome Back!</Text>
                  <View style={styles.input}>
                     <Icon
                        style={styles.icon}
                        name="envelope"
                        type="font-awesome"
                        color="white"
                     />
                     <TextInput
                        style={styles.inputText}
                        value={userLogged.email}
                        placeholder="Email"
                        placeholderTextColor="white"
                        onChangeText={(e) => inputHandler(e, "email")}
                     />
                  </View>
                  <View style={styles.input}>
                     <Icon
                        style={styles.icon}
                        name="lock"
                        type="font-awesome"
                        color="white"
                     />
                     <TextInput
                        style={styles.inputText}
                        value={userLogged.password}
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={(e) => inputHandler(e, "password")}
                     />
                  </View>
               </View>
               <TouchableOpacity
                  // onPress={submitForm}
                  style={styles.button}
                  activeOpacity={0.7}
               >
                  <Text style={styles.textButton}>Log In</Text>
               </TouchableOpacity>
               <Text style={styles.already}>Don't have an account?</Text>
               <TouchableOpacity // onPress={submitForm}
                  activeOpacity={0.7}
               >
                  <Text style={styles.login}>Sign Up here!</Text>
               </TouchableOpacity>
            </ImageBackground>
         </View>
      </TouchableWithoutFeedback>
   )
}

export default LogIn

const styles = StyleSheet.create({
   container: {
      height: 1000,
      justifyContent: "center",
   },
   image: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   title: {
      color: "black",
      fontSize: 55,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      marginTop: 20,
      left: 4,
   },
   titleShadow: {
      color: "white",
      fontSize: 55,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      position: "relative",
      bottom: 80,
   },
   input: {
      flexDirection: "row",
      backgroundColor: "#8312a5",
      color: "white",
      margin: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "flex-start",
   },
   inputText: {
      fontSize: 32,
      fontFamily: "Montserrat_400Regular",
      color: "white",
      paddingLeft: 32,
      width: "80%",
   },
   icon: {
      paddingLeft: 10,
      width: 40,
   },
   button: {
      backgroundColor: "#02b3a4",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      margin: 10,
   },
   textButton: {
      fontSize: 32,
      paddingHorizontal: 50,
      paddingVertical: 10,
      color: "white",
      fontFamily: "Montserrat_400Regular",
   },
   already: {
      fontSize: 32,
      color: "white",
      fontFamily: "Montserrat_400Regular",
   },
   login: {
      fontSize: 28,
      color: "white",
      fontFamily: "Montserrat_400Regular",
      textDecorationLine: "underline",
   },
})
