import { View, Text, Image, StyleSheet,Dimensions } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import React from 'react'

export default function CardData(props) {
  const {data, setCard} = props
  return (
    <View style={style.container}>
      
        <Image   source={{
          uri: data.card_images[0].image_url_cropped,
        }} 
        style={style.image}
        />
        <View style={style.textContainer}>
         <Text style={style.title}>{data.name}</Text>
         <View style={style.atrContainer}>
          <Text style={style.textAtr}>Type: {data.type}</Text>
          {
            data.atk && <Text style={style.textAtr}>ATK: {data.atk} / DEF: {data.def}</Text>
          }
         </View>
      {
        data.level && <Text style={style.levelText}><AntDesign name="star" size={15} color="#ffc100" /> {data.level}</Text>
      }
      <Text style={style.desc}>{data.desc}</Text> 
        </View>
        <FontAwesome name="search" size={30} color="white" style={style.icon} onPress={()=> setCard([])}/>
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      backgroundColor: "rgba(36, 39, 79, 0.7)",
      padding: 10,
      borderRadius: 10
    },
    icon:{
      position: "absolute",
      right: 20,
      top: 20
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        margin: 10
    },
    title:{
        fontSize: 22,
        color: "#ffc100",
        fontWeight: "bold"
    },
    desc:{
        backgroundColor: "#ffc100",
        padding: 10,
        fontSize: 15,
        borderRadius: 10
    },
    textAtr:{
      color: "white",
      margin: 10
    },
    levelText: {
      color: "#ffc100",
      margin: 10
    },
    atrContainer:{
      display: "flex",
      flexDirection: "row"
    }
})