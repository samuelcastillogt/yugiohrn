import React, {useEffect, useState} from "react";
import axios from "axios"
import { View, Text, Button, ScrollView  } from "react-native";
import BusinessCard from "../components/BusinessCard";
import Loader from "../components/Loader";
const ListBusiness = ({navigation, route}) => {
    const [state, setState] = useState()
    const getData = async()=>{
        try{
           const response = await axios.get("http://192.168.0.15:5000/type/" + route.params.categorie)
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
            <View>
              <ScrollView>
            {state.map((item)=> <BusinessCard 
                img={item.card_images[0].image_url_cropped}
                title={item.name}
                navigation = {navigation}
                id={item.id} 
                key={item.id}
            />)}

        </ScrollView>  
            </View>
        
    );
    }
    
};

export default ListBusiness;