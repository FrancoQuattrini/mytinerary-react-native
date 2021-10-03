import React from "react"
import { StyleSheet, Text, View, ImageBackground } from "react-native"
import Carousel from "react-native-snap-carousel"

const CarrouselAct = (props) => {
   const items = props.activities

   const _renderItem = ({ item }) => {
      return (
         <View key={item._id} style={styles.slide}>
            <ImageBackground source={{ uri: item.img }} style={styles.image}>
               <Text style={styles.text}>{item.title}</Text>
               <Text style={styles.textShadow}>{item.title}</Text>
            </ImageBackground>
         </View>
      )
   }

   return (
      <View style={styles.containerCarrusel}>
         <Text style={styles.title}>Activities</Text>
         <Carousel
            ref={(c) => {
               _carousel = c
            }}
            data={items}
            sliderWidth={495}
            itemWidth={495}
            renderItem={_renderItem}
            layout={"default"}
            loop={true}
            autoplay={true}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   containerCarrusel: {
      paddingVertical: 20,
      height: 500,
      alignItems: "center",
   },
   image: {
      resizeMode: "cover",
      justifyContent: "center",
      height: 360,
      width: "100%",
   },
   title: {
      color: "#4a3691",
      fontSize: 42,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      paddingTop: 15,
      paddingBottom: 45,
   },
   text: {
      color: "#9b1bbb",
      fontSize: 35,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      paddingTop: 25,
      left: -4,
   },
   textShadow: {
      color: "white",
      fontSize: 35,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      position: "relative",
      bottom: 45,
      right: 4,
   },
})

export default CarrouselAct
