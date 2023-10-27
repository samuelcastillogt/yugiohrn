import React, {useRef, useState} from "react";
import { View, Text, Button, SafeAreaView, ScrollView, StyleSheet, TextInput, Dimensions  } from "react-native";
import CardData from "../components/CardData";
import getData from "../services/cardConsult";
const HomeMenu = ({ navigation }) => {
    const [idCard, setIdCard] = useState()
    const [card, setCard] = useState([])
    const getCardData = async()=>{
        const response = await getData(idCard)
        setCard(response)
    }
    return (
    <View style={style.main}>
        {
           card.length == 0  &&  <View style={style.container}>
            <Text style={style.title}>Este es el Texto</Text>
            <TextInput style={style.input} placeholder="Write the number card" onChangeText={(e)=> setIdCard(e)} blurOnSubmit/>
            <Button title="Search" color="#580069" style={style.button} disabled={idCard && idCard.length >= 4 ? false : true } onPress={getCardData}/>
        </View>
        }
       
        {

             card.length > 0 && <ScrollView style={style.scrollContainer}><CardData data={card[0]} setCard={setCard}/></ScrollView> 
        }
        
    </View>
          

          
    );
};
const style = StyleSheet.create({
    title: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        padding: 10,
        textAlign: "left"

    },
    scrollContainer:{
        width: Dimensions.get("window").width,

    },
    main: {
        backgroundColor: "#483285",
        height: "100%",
        color: "white",
        display: "flex",
        alignItems: "center",
    },
    input: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#9a0056",
        width: 300,
        borderRadius: 5,
        fontSize: 20,
        padding: 10
    },
    button:{
        color: "red",
        width: 200,
        margin: 10
    },
    container:{
        width: 350,
        height:300,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#24274f",
        margin: 0,
        borderRadius: 10

    }
})
export default HomeMenu;