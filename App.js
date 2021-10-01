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
import Toast, { ErrorToast, SuccessToast } from "react-native-toast-message"

const toastConfig = {
   error: (props) => (
      <ErrorToast
         {...props}
         text1Style={{
            fontSize: 30,
            textAlign: "center",
            fontWeight: "normal",
            color: "red",
            paddingHorizontal: 10,
            width: "100%",
            fontFamily: "Montserrat_500Medium",
         }}
         text2Style={{
            fontSize: 30,
         }}
      />
   ),
   success: (props) => (
      <SuccessToast
         {...props}
         text1Style={{
            fontSize: 30,
            textAlign: "center",
            fontWeight: "normal",
            color: "green",
            paddingHorizontal: 10,
            width: "100%",
            fontFamily: "Montserrat_500Medium",
         }}
         text2Style={{
            fontSize: 30,
         }}
      />
   ),
}

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
            <NavigationContainer>
               <StatusBar backgroundColor="#000" barStyle="white" />
               <DrawerNav />
               <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
            </NavigationContainer>
         </Provider>
      )
   }
}

export default App
