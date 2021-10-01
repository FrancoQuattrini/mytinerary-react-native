import React, { useEffect, useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { SearchBar } from "react-native-elements"
import { connect } from "react-redux"
import citiesActions from "../redux/actions/citiesActions"
import CardCity from "./CardCity"

const CitiesData = (props) => {
   const [search, setSearch] = useState("")
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      props
         .getCities()
         .then((res) => {
            if (res.success) {
               setLoading(false)
            } else {
               props.navigation.navigate("home")
            }
         })
         .catch((err) => {
            console.log(err)
            props.navigation.navigate("home")
         })
   }, [])

   if (loading) {
      return (
         <View style={styles.containerSorry}>
            <Text style={styles.textSorry}>Loading</Text>
            <Image
               source={{
                  uri: "https://i.postimg.cc/Kj7fzXm2/Ripple-1s-200px.gif",
               }}
               style={styles.notFound}
            />
            <Text style={styles.textSorry}>Please wait...</Text>
         </View>
      )
   }

   const inputSearch = (e) => {
      props.filterCities(e)
      setSearch(e)
   }

   return (
      <View style={styles.cities}>
         <SearchBar
            lightTheme={true}
            style={styles.search}
            placeholder="Search here..."
            onChangeText={inputSearch}
            value={search}
         />
         <View>
            {props.citiesSearch.length === 0 ? (
               <View style={styles.containerSorry}>
                  <Text style={styles.textSorry}>
                     Sorry, it seems that what you are looking for cannot be
                     found.
                  </Text>
                  <Image
                     source={{
                        uri: "https://i.postimg.cc/Znss3x8D/notFound.png",
                     }}
                     style={styles.notFound}
                  />
                  <Text style={styles.textSorry}>Try another please...</Text>
               </View>
            ) : (
               <View>
                  {props.citiesSearch.map((city) => {
                     return (
                        <CardCity
                           navigation={props.navigation}
                           city={city}
                           key={city.name}
                        />
                     )
                  })}
               </View>
            )}
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   cities: {
      backgroundColor: "#e3e3e4",
      height: "auto",
   },
   search: {
      padding: 15,
      fontSize: 25,
      fontFamily: "Montserrat_400Regular",
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
      citiesSearch: state.cities.citiesSearch,
      //    token: state.users.token,
   }
}

const mapDispatchToProps = {
   getCities: citiesActions.getCities,
   filterCities: citiesActions.filterCities,
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesData)
