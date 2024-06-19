import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    
  },

  title: {
    fontSize: 60,
    textAlign: 'center',
    color: '#FF0000',
    textShadowRadius: 3,
    textShadowColor: '#999',
    display: 'flex',
    fontWeight: '600',
  },
});