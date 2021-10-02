import React from "react"
import { StatusBar } from "react-native"
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
import { NavigationContainer } from "@react-navigation/native"
import DrawerNav from "./navigation/DrawerNav"
const myStore = createStore(rootReducer, applyMiddleware(thunk))
import { ToastProvider } from "react-native-toast-notifications"

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
         <ToastProvider textStyle={{ fontSize: 23 }}>
            <Provider store={myStore}>
               <NavigationContainer>
                  <StatusBar backgroundColor="#000" barStyle="white" />
                  <DrawerNav />
               </NavigationContainer>
            </Provider>
         </ToastProvider>
      )
   }
}

export default App
