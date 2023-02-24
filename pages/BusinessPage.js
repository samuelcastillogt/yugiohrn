import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import axios  from 'axios';
const BusinessPage = ({navigation, route}) => {
    console.log(route.params.id)
    const [state, setState] = useState()
    const getData = async()=>{
        try{
           const response = await axios.get(`http://192.168.0.17:5000/details/${route.params.id}`)
            setState(response.data)  
        }catch(err){console.log(err)}
       
    }
    useEffect(()=>{
        getData()
    }, [])
    if(!state){
        return <Text>Cargando</Text>
    }
    return (
        <View>
           <Text>{state.data.nombre}</Text> 
        </View>
    );
};

export default BusinessPage;