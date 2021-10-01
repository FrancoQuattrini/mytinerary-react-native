import React, { useEffect, useState } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import HeroItineraries from "../components/HeroItineraries"
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"

const Itineraries = (props) => {
   const [loading, setLoading] = useState(true)

   const getCity = props.cities.find(
      (city) => city._id === props.route.params.id
   )

   useEffect(() => {
      if (!getCity) {
         props.navigation.navigate("cities")
         return false
      }
      props
         .getItineraries(props.route.params.id)
         .then((res) => {
            if (res.success) {
               setLoading(false)
            } else {
               props.navigation.navigate("home")
               return false
            }
         })
         .catch((err) => {
            console.log(err)
            props.navigation.navigate("home")
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
