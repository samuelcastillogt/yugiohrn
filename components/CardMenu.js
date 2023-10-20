import { StyleSheet, Text, View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
const dimensions = Dimensions.get('window');
const CardMenu = (props) => {
    const {img, title, navigation, categorie} = props
    return (
        <TouchableWithoutFeedback style={style.container} onPress={() => navigation.navigate('Negocios', {categorie: categorie})}>
            <View>
                <Image source={{uri:img}} style={style.image}/>
            <Text style={style.title}>{title}</Text>
            </View>
        
        </TouchableWithoutFeedback>
    );
};

const style = StyleSheet.create({
    title: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        position: "absolute",
        bottom: 3,
        padding: 10

    },
    image: {
        width: dimensions.width,
        height: 200,
      },
    container:{
        position: "relative",

    }
})
export default CardMenu;