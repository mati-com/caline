import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

//Contenedor de TopBar
export default function TopBar() {
  return (
    <View style={styles.container}>
      <FontAwesome name="clone" size={27} color="black" />
      <FontAwesome name="wechat" size={27} color="black" />
      <FontAwesome name="user-circle" size={27} color="black" />
    </View>
  )
}

//Variable hoja de estilo para el contenedor de de TopBar 
const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
})