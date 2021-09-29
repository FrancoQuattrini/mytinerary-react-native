import React from "react"
import { StatusBar, View } from "react-native"
import Home from "./screens/Home"
import Cities from "./screens/Cities"
import SignUp from "./screens/SignUp"
import {
   useFonts,
   Montserrat_400Regular,
   Montserrat_500Medium,
   Montserrat_700Bold,
} from "@expo-google-fonts/montserrat"
import AppLoading from "expo-app-loading"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./redux/reducers/rootReducer"

const myStore = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
   let [fontsLoaded] = useFonts({
      Montserrat_700Bold,
      Montserrat_500Medium,
      Montserrat_400Regular,
   })

   if (!fontsLoaded) {
      return <AppLoading />
   } else {
      return (
         <Provider store={myStore}>
            <View>
               <StatusBar backgroundColor="#000" barStyle="white" />
               {/* <Home /> */}
               {/* <Cities /> */}
               <SignUp />
            </View>
         </Provider>
      )
   }
}

export default App
