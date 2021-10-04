import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Footer = (props) => {
   return (
      <View style={styles.container}>
         <View style={styles.title}>
            <Image
               source={{ uri: "https://i.postimg.cc/1RBkspqF/logo.png" }}
               style={styles.logo}
            />
            <Text style={styles.text}>MYtinerary©</Text>
         </View>
         <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
               props.navigation.navigate("AboutUs")
            }}
         >
            <View style={styles.button}>
               <Text style={styles.textButton}>About us</Text>
            </View>
         </TouchableOpacity>
         <Text style={styles.fq}>
            {"<"} Franco Quattrini {">"}
         </Text>
      </View>
   )
}

export default Footer

const styles = StyleSheet.create({
   container: {
      height: 300,
      alignItems: "center",
      justifyContent: "center",
   },
   logo: {
      width: 45,
      height: 40,
      marginRight: 20,
   },
   title: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
   },
   text: {
      color: "grey",
      fontSize: 35,
      fontFamily: "Montserrat_700Bold",
   },
   button: {
      backgroundColor: "#4dc0dd",
      borderRadius: 50,
      paddingHorizontal: 30,
      paddingVertical: 15,
      marginVertical: 30,
   },
   textButton: {
      fontSize: 25,
      color: "white",
      fontFamily: "Montserrat_500Medium",
   },
   fq: {
      fontSize: 25,
      textAlign: "center",
      fontFamily: "Montserrat_400Regular",
      backgroundColor: "darkgrey",
      color: "white",
      width: "100%",
      marginTop: 15,
      paddingVertical: 5,
   },
})
