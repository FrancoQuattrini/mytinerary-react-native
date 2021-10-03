import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import { useToast } from "react-native-toast-notifications"
import { Icon } from "react-native-elements"
import Comment from "./Comment"

const Comments = (props) => {
   const { itinerary, token, comments, setComments } = props
   const [inputComment, setInputComment] = useState({ comment: "" })

   const inputHandler = (e) => {
      setInputComment({
         ...inputComment,
         comment: e,
      })
   }

   const sendComment = () => {
      if (!token) {
         toast.show("You must be logged in to post a comment", {
            type: "danger",
            placement: "top",
            duration: 3000,
            offset: 30,
            animationType: "slide-in",
         })
      } else if (inputComment.comment === "") {
         toast.show("You can't post an empty comment", {
            type: "danger",
            placement: "top",
            duration: 3000,
            offset: 30,
            animationType: "slide-in",
         })
      } else {
         props
            .postComment(itinerary, token, inputComment.comment)
            .then((res) => {
               setComments(res.response.comments)
            })
         setInputComment({ comment: "" })
      }
   }

   const modifyComment = (comment, idComment) => {
      props
         .modifyComment(itinerary, comment, idComment)
         .then((res) => setComments(res.response.comments))
   }

   const deleteComment = (idComment) => {
      props
         .deleteComment(itinerary, idComment)
         .then((res) => setComments(res.response.comments))
   }

   const pressEnter = (e) => {
      if (e.key === "Enter") {
         sendComment()
      }
   }

   const toast = useToast()

   return (
      <View style={{ alignItems: "center", width: "100%" }}>
         <Text style={styles.title}>Comments</Text>
         {comments.length === 0 ? (
            <View>
               <Text>No comments yet. Be the first ↓</Text>
            </View>
         ) : (
            <View>
               {comments.map((comment) => {
                  return (
                     <Comment
                        comment={comment}
                        modifyComment={modifyComment}
                        deleteComment={deleteComment}
                        key={comment._id}
                     />
                  )
               })}
            </View>
         )}

         <View style={styles.containerInput}>
            <TextInput
               style={styles.inputText}
               value={inputComment.comment}
               placeholder="Leave a message here..."
               placeholderTextColor="white"
               onChangeText={inputHandler}
               onKeyPress={pressEnter}
            />
            <Icon
               name="arrow-circle-up"
               type="font-awesome-5"
               color="white"
               size={35}
               iconStyle={{ paddingRight: 25 }}
               onPress={sendComment}
            />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   title: {
      color: "#4a3691",
      fontSize: 42,
      fontFamily: "Montserrat_700Bold",
      textAlign: "center",
      paddingTop: 15,
      paddingBottom: 45,
   },
   containerInput: {
      backgroundColor: "#69a079",
      borderRadius: 20,
      width: 430,
      marginVertical: 25,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   inputText: {
      color: "white",
      fontSize: 25,
      padding: 20,
      width: 380,
      fontFamily: "Montserrat_400Regular",
   },
})

const mapStateToProps = (state) => {
   return {
      token: state.users.token,
   }
}

const mapDispatchToProps = {
   postComment: itinerariesActions.postComment,
   modifyComment: itinerariesActions.modifyComment,
   deleteComment: itinerariesActions.deleteComment,
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)
