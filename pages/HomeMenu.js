import React, {useRef, useState} from "react";
import { View, Text, Button, SafeAreaView, ScrollView, StyleSheet, TextInput  } from "react-native";
import CardData from "../components/CardData";
import getData from "../services/cardConsult";
const HomeMenu = ({ navigation }) => {
    const [idCard, setIdCard] = useState()
    const [card, setCard] = useState()
    const getCardData = async()=>{
        const response = await getData(idCard)
        setCard(response)
    }
    return (
    <View style={style.main}>
        <View style={style.container}>
            <Text>Este es el Texto</Text>
            <TextInput style={style.input} placeholder="Write the number card" onChangeText={(e)=> setIdCard(e)} blurOnSubmit/>
            <Button title="Search" color="#580069" style={style.button} disabled={idCard && idCard.length >= 4 ? false : true } onPress={getCardData}/>
        </View>
        {
            card != undefined && card.length > 0 && <CardData data={card[0]} />
        }
        
    </View>
          

          
    );
};
const style = StyleSheet.create({
    title: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        position: "absolute",
        bottom: 3,
        padding: 10

    },
    main: {
        backgroundColor: "#003287",
        height: "100%"
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }
})
export default HomeMenu;