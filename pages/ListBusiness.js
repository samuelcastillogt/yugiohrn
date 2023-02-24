import React, {useEffect} from "react";
import axios from "axios"
import { View, Text, Button  } from "react-native";
import CardMenu from "../components/CardMenu";
import { Entypo } from '@expo/vector-icons'; 
import { Link } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const ListBusiness = ({navigation, route}) => {
    const getData = async()=>{
        try{
           const response = await axios.get("http://192.168.0.17:5000")
            console.log(response.data)  
        }catch(err){console.log(err)}
       
    }
    useEffect(()=>{
        getData()
    }, [])
    return (
        <View>
            <Text>Este es el {route.params.categorie}</Text>
        </View>
    );
};

export default ListBusiness;