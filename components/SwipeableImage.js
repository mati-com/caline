import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

//Parametros que se "leen"
export default function SwipeableImage({ user, willLike, willPass }) {
  return (
    <View>
      {/*uri, lee desde user*/}
      <Image source={{ uri: user.picture.large }} style={styles.photo} />
      {/*solo se mostrara si el willLike es True*/}
      {willLike && (
        <View style={styles.likeBox}>
          <Text style={{ ...styles.textPrimary, color: '#64EDCC' }}>COFFE</Text>
        </View>
      )}
      {willPass && (
        <View style={styles.passBox}>
          <Text style={{ ...styles.textPrimary, color: '#F06795' }}>NOPE</Text>
        </View>
      )}
      <View style={styles.textContainer}>
        <View style={styles.textRow}>
          {/*Propiedades first (nombre) y age (edad)*/}
          <Text style={[styles.textPrimary, styles.textShadow]}>{user.name.first}</Text>
          <Text style={[styles.textSecondary, styles.textShadow]}>{user.dob.age}</Text>
        </View>
        <View style={styles.textRow}>
          {/*Propiedad city (cuidad)*/}
          <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
          <Text style={[styles.textSecondary, styles.textShadow]}>{user.location.city}</Text>
        </View>
      </View>
    </View>
  )
}
//caja de estilo de el Coffe y el Ignore
const boxStyle = {
  position: 'absolute',
  top: '50%',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  borderWidth: 3,
  borderRadius: 10,
}

//StyleSheet declarados para likeBox, PassBox, Photo, TextContainer, textRow, textprimary/secundary y text shadow
const styles = StyleSheet.create({
  likeBox: {
    ...boxStyle,
    left: 40,
    borderColor: '#64EDCC',
  },
  passBox: {
    ...boxStyle,
    right: 40,
    borderColor: '#F06795',
  },
  photo: {
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPrimary: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  textSecondary: {
    color: 'white',
    marginLeft: 10,
    fontSize: 25,
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.80)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
})