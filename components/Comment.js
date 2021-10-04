import React, { useEffect, useState } from "react"
import {
   Alert,
   Image,
   ScrollView,
   StyleSheet,
   Text,
   TextInput,
   View,
} from "react-native"
import { Icon } from "react-native-elements"
import { connect } from "react-redux"

const Comment = (props) => {
   const { token, modifyComment, deleteComment } = props
   const { comment, userId, _id } = props.comment
   const [modifiedComment, setModifiedComment] = useState(comment)
   const [editComment, setEditComment] = useState(false)
   const [validUser, setValidUser] = useState(false)
   const [change, setChange] = useState(false)

   useEffect(() => {
      if (token && userId._id === props.id) {
         setValidUser(true)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const infoInput = (e) => {
      setModifiedComment(e)
   }

   const confirmationDelete = () => {
      Alert.alert("Confirmation", "Do you want to delete this comment?", [
         {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
         },
         { text: "Delete", onPress: () => deleteComment(_id) },
      ])
   }

   const actionModify = () => {
      modifyComment(modifiedComment, _id)
      setEditComment(!editComment)
      setChange(!change)
   }

   const pressEnter = (e) => {
      if (e.key === "Enter") {
         actionModify()
      }
   }

   return (
      <>
         <View style={styles.containerComment}>
            <Image
               style={{ width: 50, height: 50, borderRadius: 100 }}
               source={{
                  uri: userId.picture,
               }}
            />
            <Text style={styles.nameUser}>
               {userId.firstname + " "}
               {userId.lastname}
            </Text>
         </View>
         <View style={{ alignItems: "center", width: 500 }}>
            {!editComment ? (
               <View style={styles.inputComment}>
                  <Text style={styles.textComment}>{comment}</Text>
               </View>
            ) : (
               <View style={styles.inputCommentEdit}>
                  <TextInput
                     style={styles.textComment}
                     value={modifiedComment}
                     onChangeText={infoInput}
                     onKeyPress={pressEnter}
                  ></TextInput>
                  <Icon
                     name="check-circle"
                     type="font-awesome"
                     color="white"
                     size={35}
                     iconStyle={{ paddingRight: 15 }}
                     onPress={actionModify}
                  />
               </View>
            )}
            {validUser && (
               <View
                  style={{
                     flexDirection: "row",
                     width: 100,
                     justifyContent: "space-between",
                  }}
               >
                  {!editComment ? (
                     <Icon
                        name="pencil-square"
                        type="font-awesome"
                        color="#ac00a3"
                        size={40}
                        iconStyle={{ paddingTop: 19 }}
                        onPress={() => setEditComment(!editComment)}
                     />
                  ) : (
                     <Icon
                        name="times-circle"
                        type="font-awesome"
                        color="#ac00a3"
                        size={40}
                        iconStyle={{ paddingTop: 20 }}
                        onPress={() => setEditComment(!editComment)}
                     />
                  )}

                  <View>
                     <Icon
                        name="trash"
                        type="font-awesome-5"
                        color="#ac00a3"
                        size={35}
                        iconStyle={{ paddingTop: 20 }}
                        style={{ paddingRight: 30 }}
                        onPress={confirmationDelete}
                     />
                  </View>
               </View>
            )}
         </View>
      </>
   )
}

const styles = StyleSheet.create({
   containerComment: {
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      paddingLeft: 30,
      paddingBottom: 10,
      paddingTop: 30,
   },
   nameUser: {
      fontSize: 30,
      fontFamily: "Montserrat_500Medium",
      color: "black",
      textAlign: "center",
      paddingLeft: 20,
   },
   inputComment: {
      backgroundColor: "#b1b1b1",
      width: "85%",
      borderTopRightRadius: 17,
      borderBottomRightRadius: 17,
      borderBottomLeftRadius: 20,
      flexDirection: "row",
      alignItems: "center",
   },
   inputCommentEdit: {
      backgroundColor: "#6a5acd",
      width: "85%",
      borderTopRightRadius: 17,
      borderBottomRightRadius: 17,
      borderBottomLeftRadius: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   textComment: {
      fontSize: 25,
      fontFamily: "Montserrat_400Regular",
      color: "white",
      paddingVertical: 10,
      paddingHorizontal: 20,
   },
})

const mapStateToProps = (state) => {
   return {
      email: state.users.email,
      token: state.users.token,
      id: state.users.id,
   }
}

export default connect(mapStateToProps)(Comment)
