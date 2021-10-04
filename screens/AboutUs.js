import React from "react"
import {
   Image,
   ScrollView,
   StyleSheet,
   Text,
   View,
   Linking,
} from "react-native"

const AboutUs = () => {
   return (
      <ScrollView>
         <Text style={styles.title}>Social networks</Text>
         <View style={styles.container}>
            <View style={styles.dos}>
               <Image
                  source={{ uri: "https://i.postimg.cc/ryfPvMBC/twitter.png" }}
                  style={styles.icon}
               ></Image>
            </View>
            <View style={styles.dos}>
               <Image
                  source={{
                     uri: "https://i.postimg.cc/9015k9GG/facebook.png",
                  }}
                  style={styles.icon}
               ></Image>
            </View>
         </View>
         <View style={styles.container}>
            <View style={styles.dos}>
               <Image
                  source={{
                     uri: "https://i.postimg.cc/NFdSDccD/instragram.png",
                  }}
                  style={styles.icon}
               ></Image>
            </View>
            <View style={styles.dos}>
               <Image
                  source={{
                     uri: "https://i.postimg.cc/LXRWMX4v/pinterest.png",
                  }}
                  style={styles.icon}
               ></Image>
            </View>
         </View>
         <View style={styles.container2}>
            <Text style={styles.title2}>Contact</Text>
            <Text style={styles.contact}>Base Marambio, La Antártida</Text>
            <Text style={styles.contact2}>contact@mytinerary.com</Text>
            <Text style={styles.contact}>+ 01 234 567 88</Text>
            <Text style={styles.contact}>+ 98 765 432 10</Text>
         </View>
      </ScrollView>
   )
}

export default AboutUs

const styles = StyleSheet.create({
   container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 180,
      paddingTop: 50,
   },
   dos: {
      width: "50%",
      justifyContent: "center",
      alignItems: "center",
   },
   icon: {
      height: 130,
      width: "50%",
   },
   value: {
      fontSize: 35,
      fontFamily: "Montserrat_500Medium",
      textAlign: "center",
   },
   title: {
      fontSize: 45,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      color: "#9d23d0",
      paddingTop: 20,
   },
   container2: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: 330,
      marginTop: 60,
   },
   title2: {
      fontSize: 45,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      color: "#9d23d0",
      paddingBottom: 30,
   },
   contact: {
      fontSize: 30,
      fontFamily: "Montserrat_500Medium",
      textAlign: "center",
      color: "black",
      paddingBottom: 15,
   },
   contact2: {
      fontSize: 30,
      fontFamily: "Montserrat_500Medium",
      textAlign: "center",
      color: "#c823dc",
      paddingBottom: 15,
   },
})
