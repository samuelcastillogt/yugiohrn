import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Post from "./pages/Post"
import Configuracion from './pages/Configuracion';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMenu from './pages/HomeMenu';
import ListBusiness from './pages/ListBusiness';
// import {
//   AdMobBanner,
//   AdMobInterstitial,
//   PublisherBanner,
//   AdMobRewarded,
//   setTestDeviceIDAsync,
// } from 'expo-ads-admob';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
export default function App() {
  return (
      <NavigationContainer>
    <Tab.Navigator >
        <Tab.Screen name="Search a Card" component={Home} options={{headerShown: false, tabBarIcon: ()=> <Ionicons name="ios-business-sharp" size={24} color="black" /> }}/>
        <Tab.Screen name="Search" component={Post} options={{headerShown: false,tabBarIcon: ()=> <MaterialCommunityIcons name="post-outline" size={24} color="black" /> }}/>
        <Tab.Screen name="Configuracion" component={Configuracion} options={{tabBarIcon: ()=> <Ionicons name="settings-outline" size={24} color="black" /> }}/>
      </Tab.Navigator>
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c3756',
    color: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
