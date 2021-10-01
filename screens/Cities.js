import React from "react"
import { ScrollView } from "react-native"
import CitiesData from "../components/CitiesData"
import HeroCities from "../components/HeroCities"

const Cities = (props) => {
   return (
      <ScrollView>
         <HeroCities />
         <CitiesData navigation={props.navigation} />
      </ScrollView>
   )
}

export default Cities
