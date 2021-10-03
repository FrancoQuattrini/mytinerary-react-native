import React, { useState } from "react"
import {
   ImageBackground,
   Keyboard,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   TouchableWithoutFeedback,
   View,
} from "react-native"
import { Icon } from "react-native-elements"
import { connect } from "react-redux"
import usersActions from "../redux/actions/usersActions"
import { useToast } from "react-native-toast-notifications"

const LogIn = (props) => {
   const [login, setLogin] = useState({
      email: "",
      password: "",
   })

   const inputHandler = (e, campo) => {
      setLogin({
         ...login,
         [campo]: e,
      })
   }

   const toast = useToast()

   const logIn = (login) => {
      props
         .logIn(login)
         .then((res) => {
            if (res.success) {
               toast.show("Welcome to MYtinerary", {
                  type: "success",
                  placement: "top",
                  duration: 3000,
                  offset: 30,
                  animationType: "slide-in",
               })
               props.navigation.navigate("Home")
            } else {
               toast.show("Username and/or password incorrect", {
                  type: "danger",
                  placement: "top",
                  duration: 3000,
                  offset: 30,
                  animationType: "slide-in",
               })
            }
         })
         .catch((err) => {
            console.log(err)
         })
   }

   const submitForm = () => {
      if (login.email === "" || login.password === "") {
         toast.show("All the fields are required", {
            type: "warning",
            placement: "top",
            duration: 3000,
            offset: 30,
            animationType: "slide-in",
         })
      } else {
         logIn(login)
      }
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
                        value={login.email}
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
                        value={login.password}
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={(e) => inputHandler(e, "password")}
                     />
                  </View>
               </View>
               <TouchableOpacity
                  onPress={submitForm}
                  style={styles.button}
                  activeOpacity={0.7}
               >
                  <Text style={styles.textButton}>Log In</Text>
               </TouchableOpacity>
               <Text style={styles.already}>Don't have an account?</Text>
               <TouchableOpacity
                  onPress={() => {
                     props.navigation.navigate("SignUp")
                  }}
                  activeOpacity={0.7}
               >
                  <Text style={styles.login}>Sign Up here!</Text>
               </TouchableOpacity>
            </ImageBackground>
         </View>
      </TouchableWithoutFeedback>
   )
}

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

const mapDispatchToProps = {
   logIn: usersActions.logIn,
}

export default connect(null, mapDispatchToProps)(LogIn)
