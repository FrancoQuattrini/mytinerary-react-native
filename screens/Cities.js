import React from "react"
import { ScrollView } from "react-native"
import CitiesData from "../components/CitiesData"
import HeroCities from "../components/HeroCities"

const Cities = () => {
   return (
      <ScrollView>
         <HeroCities />
         <CitiesData />
      </ScrollView>
   )
}

export default Cities
