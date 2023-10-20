import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios  from 'axios';
import Loader from '../components/Loader';
const BusinessPage = ({navigation, route}) => {
    console.log(route.params)
    const id = route.params.id
    const [state, setState] = useState()
    const getData = async()=>{
        try{
           const response = await axios.get(`http://192.168.0.15:5000/card/` + id)
           console.log(response.data)
            setState(response.data[0])  
        }catch(err){console.log(err)}
       
    }
    useEffect(()=>{
        getData()
    }, [])
    if(!state){
        return <Loader />
    }
    return (
        <ScrollView>
        <View style={style.container}>
            <Image source={{uri:state.card_images[0].image_url_cropped}} style={style.image}/>
           <Text style={style.title}>{state.name}</Text>
           {
            state.atk && <View style={style.stars}>
                            <Text style={style.textBold}>Stars Level: {state.level}, Race: {state.race}</Text> 
                        </View>
           }
           <Text>{state.desc}</Text>
           {
            state.atk && <Text style={style.bold}>ATK:{state.atk} / DEF:{state.def}</Text>
           }
          {
            Object.keys(state.card_prices[0]).forEach((e) => { 
                return <Text style={style.bold}>{e}: {state.card_prices[0][e]}</Text>
               })
          } 
        </View>            
        </ScrollView>

    );
};
const style = StyleSheet.create({
    image:{
        width: 300,
        height: 300
    },
    container: {
        display: "flex",
        flexDirection:'column',
        justifyContent:'center',
        padding: 10
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    },
    bold: {
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#631d3d",
        padding: 20,
        borderRadius: 10,
        margin: 10,
        textAlign: "center",
    },
    textBold:{
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    stars: {
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#102249",
        textAlign: "center",
        padding: 20,
        borderRadius: 10,
        margin: 10
    }
})

export default BusinessPage;

