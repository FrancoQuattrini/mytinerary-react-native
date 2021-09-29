import React from "react"
import { StyleSheet, Text, View, ImageBackground } from "react-native"
import Carousel from "react-native-snap-carousel"

const Carrousel = () => {
   const items = [
      {
         title: "Tokyo",
         img: "https://i.postimg.cc/0y4N9wjt/Tokyo.jpg",
         id: 1,
      },
      {
         title: "Buenos Aires",
         img: "https://i.postimg.cc/brLzWG49/Buenos-Aires.jpg",
         id: 2,
      },
      {
         title: "Cancun",
         img: "https://i.postimg.cc/RF5VHxcK/Cancun.jpg",
         id: 3,
      },
      {
         title: "Rome",
         img: "https://i.postimg.cc/nrnF3KSL/Rome.jpg",
         id: 4,
      },
      {
         title: "Budapest",
         img: "https://i.postimg.cc/wBsjMjs9/Budapest.jpg",
         id: 5,
      },
      {
         title: "Paris",
         img: "https://i.postimg.cc/G3jhHN9T/Paris.jpg",
         id: 6,
      },
      {
         title: "Venice",
         img: "https://i.postimg.cc/htvjFrDz/Venice.jpg",
         id: 7,
      },
      {
         title: "New York",
         img: "https://i.postimg.cc/4xYJ2xPp/NewYork.jpg",
         id: 8,
      },
      {
         title: "Las Vegas",
         img: "https://i.postimg.cc/G2F3PgQN/LasVegas.jpg",
         id: 9,
      },
      {
         title: "Cairo",
         img: "https://i.postimg.cc/tJcRyPn8/ElCairo.jpg",
         id: 10,
      },
      {
         title: "Madrid",
         img: "https://i.postimg.cc/3JJrpBDS/Madrid.jpg",
         id: 11,
      },
      {
         title: "London",
         img: "https://i.postimg.cc/XYtnR61m/London.jpg",
         id: 12,
      },
   ]

   const _renderItem = ({ item }) => {
      return (
         <View key={item.id} style={styles.slide}>
            <ImageBackground source={{ uri: item.img }} style={styles.image}>
               <Text style={styles.text}>{item.title}</Text>
               <Text style={styles.textShadow}>{item.title}</Text>
            </ImageBackground>
         </View>
      )
   }

   return (
      <View style={styles.containerCarrusel}>
         <Text style={styles.title}>Popular MYtineraries</Text>
         <Carousel
            ref={(c) => {
               _carousel = c
            }}
            data={items}
            sliderWidth={520}
            itemWidth={480}
            renderItem={_renderItem}
            layout={"tinder"}
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
      backgroundColor: "#4a3691",
      alignItems: "center",
   },
   image: {
      resizeMode: "cover",
      justifyContent: "center",
      height: 300,
      width: "100%",
   },
   title: {
      color: "white",
      fontSize: 42,
      fontFamily: "Montserrat_700Bold",
      backgroundColor: "#4a3691",
      textAlign: "center",
      paddingTop: 15,
      paddingBottom: 45,
   },
   text: {
      color: "#9b1bbb",
      fontSize: 42,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      paddingTop: 55,
      left: 4,
   },
   textShadow: {
      color: "white",
      fontSize: 42,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      position: "relative",
      bottom: 55,
   },
})

export default Carrousel
