import React from "react";
import { View, Text, Button, SafeAreaView, ScrollView  } from "react-native";
import CardMenu from "../components/CardMenu";
const HomeMenu = ({ navigation }) => {
    return (
    <ScrollView>
        <View >
<CardMenu 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjLCiLJtuppYYf0a9iDVfYD3bE1oIlS7F-oz2t_3IfM6gQshe9Gqhh7a2KQY6JzR0U9Y&usqp=CAU"
                title="Servicios"
                categorie ="Servicios"
                navigation = {navigation}
                
            />
        </View>
            <CardMenu 
                img="https://www.diegocoquillat.com/wp-content/uploads/2015/12/Los-espa%C3%B1oles-quieren-men%C3%BAs-cerrados-caseros-y-m%C3%A1s-econ%C3%B3micos-en-los-restaurantes.jpg"
                title="Restaurantes"
                navigation = {navigation}
                categorie="Restaurante" 
            />
                        <CardMenu 
                img="https://media.istockphoto.com/id/1319479588/es/foto/los-m%C3%BAsicos-tocaban-m%C3%BAsica-rock-en-el-escenario-hab%C3%ADa-un-p%C3%BAblico-lleno-de-gente-viendo-el.jpg?s=612x612&w=0&k=20&c=H1kP1pyY2dXgaYHzIkBrGSaTCqR1ukUuT4AXS1T2QpQ="
                title="Musicos"
                navigation = {navigation}
                categorie="Musicos" 
            />
       
    </ScrollView>
          

          
    );
};

export default HomeMenu;