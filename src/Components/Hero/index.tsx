import React from "react";
import { Text, ImageBackground, View, Image } from "react-native";
import styles from "./style";



const Hero = () => {
    return (
      
         <ImageBackground style={styles.hero} source={require('../../assets/images (3).jpg')}>
           
              <Image resizeMode = "contain" style={styles.logo} source={require('../../assets/Logo BB.png')}/>
        <View style={styles.containerTOP10}>
            <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
        </View>
    </ImageBackground>
    );
};

export default Hero;


