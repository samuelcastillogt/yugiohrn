import React, {useEffect, useState} from "react";
import axios from "axios"
import { View, Text, Button, ScrollView  } from "react-native";
import BusinessCard from "../components/BusinessCard";
import Loader from "../components/Loader";
const ListBusiness = ({navigation, route}) => {
    const [state, setState] = useState()
    const getData = async()=>{
        try{
           const response = await axios.get("http://192.168.0.17:5000/categorie/"+ route.params.categorie)
            setState(response.data)  
        }catch(err){console.log(err)}
       
    }
    useEffect(()=>{
        getData()
    }, [])
    if(!state){
        <Loader />
    }else{
        return (
        <ScrollView>
            {state.map((item)=> <BusinessCard 
                img={item.data.imagen}
                title={item.data.nombre}
                navigation = {navigation}
                id={item.id} 
            />)}
            
        </ScrollView>
    );
    }
    
};

export default ListBusiness;