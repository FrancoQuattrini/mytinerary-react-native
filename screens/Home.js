import React from "react"
import { ScrollView } from "react-native"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import CalltoAction from "../components/CalltoAction"
import Footer from "../components/Footer"

const Home = (props) => {
   return (
      <ScrollView>
         <Hero />
         <CalltoAction navigation={props.navigation} />
         <Carousel />
         <Footer navigation={props.navigation} />
      </ScrollView>
   )
}

export default Home
