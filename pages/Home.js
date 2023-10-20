import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ListBusiness from "./ListBusiness";
import HomeMenu from "./HomeMenu";
import Post from "./Post";
import BusinessPage from "./BusinessPage";
const Stack = createStackNavigator();
const Home = () => {

    return (
           <NavigationContainer independent={true} initialRouteName="Home">
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeMenu} options={{headerShown: false}}/>
                <Stack.Screen name="Negocios" component={ListBusiness} />
                <Stack.Screen name="Detalles" component={BusinessPage} />
              </Stack.Navigator>
           </NavigationContainer>
          
    );
};

export default Home;