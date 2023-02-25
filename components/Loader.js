import React from 'react';
import { View, StyleSheet,ActivityIndicator, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Loader = () => {
    return (
        <View style={style.container}>
            <Text style={style.title}>Cargando...</Text>
            <ActivityIndicator size="large" />
        </View>
    );
};
const style = StyleSheet.create({
    container:{
        fontSize: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"

    },
    title:{
        fontSize: 25,
        fontWeight: "bold",
        margin: 3
    }
})
export default Loader;