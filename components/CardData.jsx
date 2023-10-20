import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function CardData(props) {
  return (
    <View style={style.container}>
        <Image   source={{
          uri: props.data.card_images[0].image_url_cropped,
        }} 
        style={style.image}
        />
      <Text style={style.title}>{props.data.name}</Text>
      <Text>Type: {props.data.type}</Text>
      <Text style={style.desc}>{props.data.desc}</Text>
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 200,
        height: 200,
        margin: 10
    },
    title:{
        fontSize: 18,
        color: "white"
    },
    desc:{
        backgroundColor: "#ffc100",
        padding: 10,
        fontSize: 15
    }
})