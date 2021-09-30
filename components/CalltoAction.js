import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const CalltoAction = (props) => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>
            Now, it is your decision. Just choose your destination!
         </Text>
         <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
               props.navigation.navigate("cities")
            }}
         >
            <View style={styles.button}>
               <Text style={styles.textButton}>CLICK HERE</Text>
            </View>
         </TouchableOpacity>
         <Image
            source={{ uri: "https://i.postimg.cc/pXXtF0Hk/familia.png" }}
            style={styles.img}
         />
      </View>
   )
}

export default CalltoAction

const styles = StyleSheet.create({
   container: {
      height: 500,
      alignItems: "center",
      justifyContent: "center",
   },
   title: {
      fontSize: 40,
      fontFamily: "Montserrat_500Medium",
      textAlign: "center",
      paddingHorizontal: 30,
   },
   img: {
      width: "80%",
      height: 150,
   },
   button: {
      backgroundColor: "#a31b86",
      borderRadius: 50,
      paddingHorizontal: 30,
      paddingVertical: 15,
      marginVertical: 40,
   },
   textButton: {
      fontSize: 25,
      color: "white",
      fontFamily: "Montserrat_500Medium",
   },
})
