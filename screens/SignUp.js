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
import SelectPicker from "react-native-form-select-picker"
import { connect } from "react-redux"
import usersActions from "../redux/actions/usersActions"
import Toast, { ErrorToast } from "react-native-toast-message"

const SignUp = (props) => {
   console.log(props)
   const countries = [
      { id: 1, name: "Argentina" },
      { id: 2, name: "Brazil" },
      { id: 3, name: "Chile" },
      { id: 4, name: "Egypt" },
      { id: 5, name: "England" },
      { id: 6, name: "France" },
      { id: 7, name: "Hungary" },
      { id: 8, name: "Italy" },
      { id: 9, name: "Japan" },
      { id: 10, name: "Malaysia" },
      { id: 11, name: "Mexico" },
      { id: 12, name: "Netherlands" },
      { id: 13, name: "Russia" },
      { id: 14, name: "Spain" },
      { id: 15, name: "United States of America" },
   ]

   const [newUser, setNewUser] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      picture: "",
      country: "",
   })

   const inputHandler = (e, campo) => {
      setNewUser({
         ...newUser,
         [campo]: e,
      })
   }

   const postUser = (newUser) => {
      props
         .postUser(newUser)
         .then((res) => {
            if (res.success) {
               Toast.show({
                  text1: "Account created successfully",
                  type: "success",
                  position: "bottom",
                  bottomOffset: 40,
               })
               props.navigation.navigate("Home")
            } else if (res.errors) {
               res.errors.map((error) => {
                  return Toast.show({
                     text1: error.message,
                     type: "error",
                     position: "bottom",
                     bottomOffset: 40,
                  })
               })
            } else {
               Toast.show({
                  text1: "There is already an account with this email",
                  type: "error",
                  position: "bottom",
                  bottomOffset: 40,
               })
            }
         })
         .catch((err) => {
            console.log(err)
         })
   }

   const submitForm = () => {
      if (Object.values(newUser).some((value) => value === "")) {
         Toast.show({
            text1: "All the fields are required",
            type: "error",
            position: "bottom",
            bottomOffset: 40,
         })
      } else {
         postUser(newUser)
      }
   }

   return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
         <View style={styles.container}>
            <ImageBackground
               source={{ uri: "https://i.postimg.cc/3wjL9TjG/signup.jpg" }}
               style={styles.image}
            >
               <View>
                  <Text style={styles.title}>Create Account!</Text>
                  <Text style={styles.titleShadow}>Create Account!</Text>
                  <View style={styles.input}>
                     <Icon
                        style={styles.icon}
                        name="user"
                        type="font-awesome"
                        color="white"
                     />
                     <TextInput
                        style={styles.inputText}
                        value={newUser.firstname}
                        placeholder="FirstName"
                        placeholderTextColor="white"
                        onChangeText={(e) => inputHandler(e, "firstname")}
                     />
                  </View>
                  <View style={styles.input}>
                     <Icon
                        style={styles.icon}
                        name="user"
                        type="font-awesome"
                        color="white"
                     />
                     <TextInput
                        style={styles.inputText}
                        value={newUser.lastname}
                        placeholder="LastName"
                        placeholderTextColor="white"
                        onChangeText={(e) => inputHandler(e, "lastname")}
                     />
                  </View>
                  <View style={styles.input}>
                     <Icon
                        style={styles.icon}
                        name="envelope"
                        type="font-awesome"
                        color="white"
                     />
                     <TextInput
                        style={styles.inputText}
                        value={newUser.email}
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
                        value={newUser.password}
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={(e) => inputHandler(e, "password")}
                     />
                  </View>
                  <View style={styles.input}>
                     <Icon
                        style={styles.icon}
                        name="camera"
                        type="font-awesome"
                        color="white"
                     />
                     <TextInput
                        style={styles.inputText}
                        value={newUser.picture}
                        placeholder="URL picture"
                        placeholderTextColor="white"
                        onChangeText={(e) => inputHandler(e, "picture")}
                     />
                  </View>
                  <View style={styles.input2}>
                     <Icon
                        style={styles.icon}
                        name="globe"
                        type="font-awesome"
                        color="white"
                     />
                     <SelectPicker
                        style={styles.inputText}
                        default="Choose your country:"
                        onValueChange={(e) => inputHandler(e, "country")}
                        placeholderStyle={{
                           color: "white",
                           fontFamily: "Montserrat_400Regular",
                           fontSize: 30,
                        }}
                        onSelectedStyle={{
                           color: "white",
                           fontSize: 30,
                           fontFamily: "Montserrat_400Regular",
                           color: "white",
                        }}
                        label="Country"
                        placeholder="Choose country:"
                        containerStyle={{
                           backgroundColor: "#e3e3e4",
                           padding: 20,
                        }}
                        doneButtonText="DONE"
                        doneButtonTextStyle={{
                           color: "white",
                           fontFamily: "Montserrat_400Regular",
                           fontSize: 25,
                           backgroundColor: "#02b3a4",
                           paddingVertical: 5,
                           paddingHorizontal: 20,
                           borderRadius: 50,
                        }}
                        titleText="Choose your country!"
                        titleTextStyle={{
                           color: "#8312a5",
                           fontFamily: "Montserrat_400Regular",
                           fontSize: 25,
                        }}
                     >
                        {countries.map((country, id) => (
                           <SelectPicker.Item
                              label={country.name}
                              value={country.name}
                              key={country.id}
                           />
                        ))}
                     </SelectPicker>
                  </View>
               </View>
               <TouchableOpacity
                  onPress={submitForm}
                  style={styles.button}
                  activeOpacity={0.7}
               >
                  <Text style={styles.textButton}>Sign Up</Text>
               </TouchableOpacity>
               <Text style={styles.already}>Already have an account?</Text>
               <TouchableOpacity // onPress={submitForm}
                  activeOpacity={0.7}
               >
                  <Text style={styles.login}>Log In here!</Text>
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
   input2: {
      flexDirection: "row",
      backgroundColor: "#8312a5",
      color: "white",
      margin: 10,
      paddingVertical: 3,
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
   postUser: usersActions.postUser,
}

export default connect(null, mapDispatchToProps)(SignUp)
