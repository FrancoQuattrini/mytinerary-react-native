import React from "react"
import {
   ImageBackground,
   Pressable,
   StyleSheet,
   Text,
   View,
} from "react-native"

const CardCity = (props) => {
   const { _id, name, country, img, description } = props.city
   return (
      <View style={styles.containerCard}>
         <ImageBackground source={{ uri: img }} style={styles.img}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.nameShadow}>{name}</Text>
            <Text style={styles.country}>{country}</Text>
            <Text style={styles.countryShadow}>{country}</Text>
         </ImageBackground>
      </View>
   )
}

export default CardCity

const styles = StyleSheet.create({
   containerCard: {
      width: "100%",
      padding: 20,
   },
   img: {
      width: "100%",
      height: 300,
      alignItems: "center",
      justifyContent: "center",
   },
   name: {
      color: "#9b1bbb",
      fontSize: 42,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      paddingTop: 55,
      left: 4,
   },
   nameShadow: {
      color: "white",
      fontSize: 42,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      position: "relative",
      bottom: 55,
   },
   country: {
      color: "#9b1bbb",
      fontSize: 35,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      left: 4,
   },
   countryShadow: {
      color: "white",
      fontSize: 35,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      position: "relative",
      bottom: 50,
   },
})

// onPress={() => props.navigation.navigate('itineraries', { id: _id })}
