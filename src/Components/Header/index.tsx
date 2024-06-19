import React from "react";
import { Text, View,TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./style";

const Header = () => {
    return (

        <LinearGradient colors={['rgba(0,0,0,1)','rgba(0,0,0,0)']} style={styles.header}>
        <View style={styles.headerSafeAreaView}>
            <Image source={require('../../assets/LogoNetflix.png')}/>

            <TouchableOpacity>
                <Text style={styles.tesxtWhite}>Séries</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.tesxtWhite}>Filmes</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.tesxtWhite}>Lista</Text>
            </TouchableOpacity>

        </View>

        </LinearGradient>



    );
};

export default Header;







