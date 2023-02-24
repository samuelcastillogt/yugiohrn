import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Post from "./pages/Post"
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
import { Entypo } from '@expo/vector-icons'; 
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
        <Tab.Screen name="Inicio" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Settings" component={Post} />
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
