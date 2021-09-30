import React from "react"
import { ScrollView } from "react-native"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import CalltoAction from "../components/CalltoAction"

const Home = (props) => {
   return (
      <ScrollView>
         <Hero />
         <CalltoAction navigation={props.navigation} />
         <Carousel />
      </ScrollView>
   )
}

export default Home
