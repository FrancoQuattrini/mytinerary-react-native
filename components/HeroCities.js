import React from "react"
import { ImageBackground, StyleSheet, Text, View } from "react-native"

const image = { uri: "https://i.postimg.cc/W1kYFrhX/lupa-Mundo.png" }

const HeroCities = () => {
   return (
      <View>
         <ImageBackground source={image} style={styles.image}>
            <Text style={styles.title}>OUR CITIES</Text>
            <Text style={styles.titleShadow}>OUR CITIES</Text>
         </ImageBackground>
         <Text style={styles.text2}>Find your destination ↓</Text>
      </View>
   )
}

export default HeroCities

const styles = StyleSheet.create({
   title: {
      fontSize: 55,
      fontFamily: "Montserrat_700Bold",
      color: "#9b1bbb",
      paddingTop: 100,
      left: 5,
   },
   titleShadow: {
      fontSize: 55,
      fontFamily: "Montserrat_700Bold",
      color: "white",
      position: "relative",
      bottom: 75,
      backgroundColor: "#9b1bbb",
      borderRadius: 10,
      paddingHorizontal: 15,
   },
   image: {
      height: 280,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
   },
   text2: {
      color: "#4a3691",
      fontSize: 40,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      position: "relative",
      bottom: 20,
   },
})
