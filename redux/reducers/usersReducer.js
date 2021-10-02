import AsyncStorage from "@react-native-async-storage/async-storage"

const usersReducer = async (
   state = {
      token: null,
      firstname: null,
      picture: null,
      email: null,
      id: null,
      status: null,
   },
   action
) => {
   switch (action.type) {
      case "ACTION_USER":
         await AsyncStorage.setItem("token", action.payload.token)
         await AsyncStorage.setItem("firstname", action.payload.firstname)
         await AsyncStorage.setItem("picture", action.payload.picture)
         await AsyncStorage.setItem("email", action.payload.email)

         return {
            token: action.payload.token,
            firstname: action.payload.firstname,
            picture: action.payload.picture,
            email: action.payload.email,
            id: action.payload.id,
            status: action.payload,
         }
      case "LOG_OUT":
         await AsyncStorage.clear()
         return {
            token: null,
            firstname: null,
            picture: null,
            email: null,
         }
      default:
         return state
   }
}

export default usersReducer
