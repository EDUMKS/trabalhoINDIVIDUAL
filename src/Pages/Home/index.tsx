import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import Hero from '../../Components/Hero';
import Header from '../../Components/Header';


 export const Home = () => {
    return (
        <>

        <View style={styles.container}>
        <Header/>
        <Hero/>
        <Text>Home</Text>
        </View>
        </>

    )



}

