import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    hero: {
        height: 400,
        width: '100%', 


    },
    logo: {
        marginTop: 200,
        alignSelf: 'center',
        width: 300,
        height:150,
        position: 'absolute',
        zIndex: 10,
    },
    containerTOP10: {
        position: 'absolute',
        zIndex: 10,
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
      top10Text: {
        color: '#fff',
        fontSize:15,
      },
});

export default styles;