import React from "react"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"

const HeroItineraries = (props) => {
   if (!props.getCity) {
      props.navigation.navigate("Cities")
      return false
   }
   const {
      name,
      country,
      img2,
      language,
      flag,
      local_currency,
      estimated_population,
   } = props.getCity
   return (
      <View style={{ marginBottom: 20 }}>
         <ImageBackground source={{ uri: img2 }} style={styles.image}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.nameShadow}>{name}</Text>
         </ImageBackground>
         <View style={styles.container}>
            <View style={styles.dos}>
               <Image source={{ uri: flag }} style={styles.icon2}></Image>
               <Text style={styles.value2}>{country}</Text>
            </View>
            <View style={styles.dos}>
               <Image
                  source={{
                     uri: "https://i.postimg.cc/fRGFBC6G/local-Currency.png",
                  }}
                  style={styles.icon}
               ></Image>
               <Text style={styles.value}>{local_currency}</Text>
            </View>
         </View>
         <View style={styles.container}>
            <View style={styles.dos}>
               <Image
                  source={{ uri: "https://i.postimg.cc/xTFBbngT/language.png" }}
                  style={styles.icon}
               ></Image>
               <Text style={styles.value}>{language}</Text>
            </View>
            <View style={styles.dos}>
               <Image
                  source={{
                     uri: "https://i.postimg.cc/prL1p6FF/population.png",
                  }}
                  style={styles.icon}
               ></Image>
               <Text style={styles.value}>{estimated_population}</Text>
            </View>
         </View>
      </View>
   )
}

export default HeroItineraries

const styles = StyleSheet.create({
   image: {
      height: 350,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
   },
   name: {
      fontSize: 55,
      fontFamily: "Montserrat_700Bold",
      color: "black",
      paddingTop: 75,
      left: 5,
   },
   nameShadow: {
      fontSize: 55,
      fontFamily: "Montserrat_700Bold",
      color: "white",
      position: "relative",
      bottom: 75,
      borderRadius: 10,
      paddingHorizontal: 15,
   },
   container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
   },
   dos: {
      width: "50%",
      justifyContent: "center",
      alignItems: "center",
   },
   icon: {
      height: 150,
      width: "60%",
      marginVertical: 25,
   },
   icon2: {
      height: 120,
      width: "70%",
      marginBottom: 30,
   },
   value: {
      fontSize: 35,
      fontFamily: "Montserrat_500Medium",
      textAlign: "center",
   },
   value2: {
      fontSize: 35,
      fontFamily: "Montserrat_500Medium",
      textAlign: "center",
   },
})
