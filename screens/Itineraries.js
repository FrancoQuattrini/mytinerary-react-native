import React, { useEffect, useState } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import HeroItineraries from "../components/HeroItineraries"
import Itinerary from "../components/Itinerary"
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"

const Itineraries = (props) => {
   const [loading, setLoading] = useState(true)

   const getCity = props.cities.find(
      (city) => city._id === props.route.params.id
   )

   useEffect(() => {
      if (!getCity) {
         props.navigation.navigate("Cities")
         return false
      }
      props
         .getItineraries(props.route.params.id)
         .then((res) => {
            if (res.success) {
               setLoading(false)
            } else {
               props.navigation.navigate("Home")
               return false
            }
         })
         .catch((err) => {
            console.log(err)
            props.navigation.navigate("Home")
         })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   if (loading) {
      return (
         <View style={styles.containerSorry}>
            <Text style={styles.textSorry}>Loading</Text>
            <Image
               source={{
                  uri: "https://i.postimg.cc/XvFMbmfN/astro-Load.gif",
               }}
               style={styles.notFound}
            />
            <Text style={styles.textSorry}>Please wait...</Text>
         </View>
      )
   }

   return (
      <ScrollView>
         <HeroItineraries getCity={getCity} history={props.navigation} />
         <View style={styles.containerItineraries}>
            {props.itineraries.length === 0 ? (
               <View>
                  <Text style={styles.textSorry}>
                     It seems there are no itineraries yet!
                  </Text>
                  <Image
                     source={{
                        uri: "https://i.postimg.cc/Y9pdss8s/astronaut.gif",
                     }}
                     style={styles.notFound}
                  />
               </View>
            ) : (
               props.itineraries.map((data) => {
                  return (
                     <View
                        key={data.nameUser}
                        style={{ backgroundColor: "#b4b3b3" }}
                     >
                        <Itinerary data={data} navigation={props.navigation} />
                     </View>
                  )
               })
            )}
         </View>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   notFound: {
      width: "100%",
      height: 400,
   },
   containerSorry: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "white",
      width: "100%",
      height: 1000,
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
      city: state.cities.city,
      cities: state.cities.cities,
      itineraries: state.itineraries.itineraries,
   }
}

const mapDispatchToProps = {
   getCity: citiesActions.getCity,
   getItineraries: itinerariesActions.getItineraries,
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)
