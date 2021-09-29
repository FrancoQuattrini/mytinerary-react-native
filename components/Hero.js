import React from "react"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"

const image = { uri: "https://i.postimg.cc/63LD7ZbD/fondo.jpg" }

const Hero = () => (
   <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
         <Image
            source={{ uri: "https://i.postimg.cc/MTDFZSvw/logo1.png" }}
            style={styles.logo}
         />
         <Text style={styles.text}>MYtinerary</Text>
         <Text style={styles.textShadow}>MYtinerary</Text>
         <Text style={styles.text2}>
            Find your perfect trip, designed by insiders who know and love their
            cities!
         </Text>
         <Text style={styles.textShadow2}>
            Find your perfect trip, designed by insiders who know and love their
            cities!
         </Text>
      </ImageBackground>
   </View>
)

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
   logo: {
      justifyContent: "center",
      height: 250,
      width: "60%",
   },
   text: {
      color: "black",
      fontSize: 55,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      marginTop: 20,
      left: 4,
   },
   textShadow: {
      color: "white",
      fontSize: 55,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      position: "relative",
      bottom: 80,
   },
   text2: {
      color: "black",
      fontSize: 40,
      paddingHorizontal: 30,
      fontFamily: "Montserrat_500Medium",
      textAlign: "center",
      left: 3,
   },
   textShadow2: {
      color: "white",
      fontSize: 40,
      paddingHorizontal: 30,
      fontFamily: "Montserrat_500Medium",
      textAlign: "center",
      position: "absolute",
      bottom: 195,
   },
})

export default Hero
