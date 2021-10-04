import React, { useState } from "react"
import {
   Image,
   Pressable,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from "react-native"
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import { useToast } from "react-native-toast-notifications"
import { Icon } from "react-native-elements"
import CarrouselAct from "./CarouselAct"
import Comments from "./Comments"

const Itinerary = (props) => {
   const toast = useToast()
   const [viewText, setViewText] = useState(false)
   const [activities, setActivities] = useState([])
   const {
      nameUser,
      imgUser,
      price,
      duration,
      likes,
      title,
      description,
      img,
      hashtags,
      languages,
      _id,
   } = props.data

   const [comments, setComments] = useState(props.data.comments)
   const [liked, setLiked] = useState(likes.includes(props.id))
   const [likesItineraries, setLikesItineraries] = useState(likes)

   const getActivities = () => {
      if (!viewText && activities.length === 0) {
         props
            .getActivities(_id)
            .then((res) => {
               if (res.success) {
                  setActivities(res.response)
               } else {
                  //   props.navigation.navigate("Home")
               }
            })
            .catch((err) => {
               console.log(err)
               //    props.navigation.navigate("Home")
            })
      }
      setViewText(!viewText)
   }

   const likeItinerary = () => {
      if (props.token) {
         props.like(_id, props.token).then((res) => {
            setLikesItineraries(res.response.likes)
            setLiked(!liked)
         })
      } else {
         toast.show("You must be logged in to like a post", {
            type: "danger",
            placement: "top",
            duration: 3000,
            offset: 30,
            animationType: "slide-in",
         })
      }
   }

   return (
      <View
         style={{
            height: "auto",
            marginVertical: 50,
            width: "100%",
            alignItems: "center",
         }}
      >
         <View style={styles.container}>
            <Image
               source={{
                  uri: img,
               }}
               style={styles.imageTop}
            />
            <Image
               source={{
                  uri: imgUser,
               }}
               style={styles.imageUser}
            />
            <View style={styles.containerName}>
               <Text style={styles.nameUser}>{nameUser}</Text>
               <Image
                  source={{
                     uri: "https://i.postimg.cc/154jSbPx/verified.png",
                  }}
                  style={styles.verified}
               />
            </View>
            <Text style={styles.title}>{title}</Text>
            {hashtags.map((hashtag, index) => (
               <Text style={styles.hashtag} key={index}>
                  {hashtag}
               </Text>
            ))}
            <Text style={styles.description}>{description}</Text>
            <View style={styles.containerPrice}>
               <Text style={styles.price}>Price: </Text>
               {Array(price)
                  .fill(price)
                  .map((price, index) => {
                     return (
                        <Image
                           source={{
                              uri: "https://i.postimg.cc/Bv2zyD3X/money2.png",
                           }}
                           style={styles.money}
                           key={index}
                        />
                     )
                  })}
            </View>
            <View style={styles.containerPrice}>
               <Text style={styles.price}>Duration: </Text>
               <Text style={styles.text3}>{duration} hs</Text>
            </View>
            <View style={{ marginVertical: 15 }}>
               <Text style={styles.price}>Languages: </Text>
               {languages.map((language, index) => (
                  <Text style={styles.languages} key={index}>
                     {language}.
                  </Text>
               ))}
            </View>
            <View style={styles.containerPrice}>
               <Pressable onPress={likeItinerary}>
                  {!liked ? (
                     <Icon
                        name="star-o"
                        type="font-awesome"
                        color="#dde002"
                        size={50}
                        iconStyle={{ marginRight: 25 }}
                     />
                  ) : (
                     <Icon
                        name="star"
                        type="font-awesome"
                        color="#dde002"
                        size={50}
                        iconStyle={{ marginRight: 25 }}
                     />
                  )}
               </Pressable>
               <Text style={styles.text3}>{likesItineraries.length}</Text>
            </View>

            {viewText && (
               <View>
                  <CarrouselAct activities={activities} />
                  <Comments
                     itinerary={_id}
                     comments={comments}
                     setComments={setComments}
                  />
               </View>
            )}

            <TouchableOpacity activeOpacity={0.7} onPress={getActivities}>
               <View style={styles.button}>
                  <Text style={styles.textButton}>
                     {viewText ? "View Less" : "View More"}
                  </Text>
               </View>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
      backgroundColor: "white",
      borderRadius: 20,
   },
   imageTop: {
      width: "90%",
      height: 300,
      borderRadius: 20,
      position: "relative",
      bottom: 50,
   },
   imageUser: {
      width: 130,
      height: 130,
      borderRadius: 100,
   },
   containerName: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 30,
   },
   nameUser: {
      fontSize: 39,
      fontFamily: "Montserrat_500Medium",
      color: "black",
      paddingRight: 30,
   },
   verified: {
      width: 45,
      height: 45,
   },
   title: {
      fontSize: 35,
      fontFamily: "Montserrat_700Bold",
      color: "black",
      textAlign: "center",
   },
   hashtag: {
      fontSize: 30,
      fontFamily: "Montserrat_400Regular",
      textAlign: "center",
      paddingTop: 30,
      color: "darkgrey",
   },
   description: {
      fontSize: 30,
      fontFamily: "Montserrat_400Regular",
      textAlign: "center",
      paddingHorizontal: 16,
      paddingVertical: 30,
      color: "grey",
   },
   containerPrice: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 20,
   },
   price: {
      fontSize: 30,
      fontFamily: "Montserrat_500Medium",
      paddingRight: 10,
   },
   money: {
      width: 55,
      height: 55,
      position: "relative",
      top: 5,
      marginHorizontal: 10,
   },
   text3: {
      fontSize: 30,
      fontFamily: "Montserrat_400Regular",
      textAlign: "center",
      color: "grey",
   },
   languages: {
      fontSize: 30,
      fontFamily: "Montserrat_400Regular",
      textAlign: "center",
      color: "grey",
      paddingTop: 25,
      paddingBottom: 10,
   },
   button: {
      backgroundColor: "#a31b86",
      borderRadius: 50,
      paddingHorizontal: 120,
      paddingVertical: 15,
      marginVertical: 40,
   },
   textButton: {
      fontSize: 27,
      color: "white",
      fontFamily: "Montserrat_500Medium",
   },
   notFound: {
      width: "60%",
      height: 360,
   },
   containerSorry: {
      alignItems: "center",
      marginTop: 20,
   },
   textSorry: {
      color: "#f54cde",
      fontSize: 30,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      padding: 10,
   },
})

const mapStateToProps = (state) => {
   return {
      token: state.users.token,
      id: state.users.id,
   }
}

const mapDispatchToProps = {
   getActivities: itinerariesActions.getActivities,
   like: itinerariesActions.like,
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
