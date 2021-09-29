import React from "react"
import { ScrollView } from "react-native"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import CalltoAction from "../components/CalltoAction"

const Home = () => {
   return (
      <ScrollView>
         <Hero />
         <CalltoAction />
         <Carousel />
      </ScrollView>
   )
}

export default Home
