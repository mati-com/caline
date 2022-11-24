import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { RectButton } from 'react-native-gesture-handler'
import SwipeableImage from './SwipeableImage'

function Swipes({ users, currentIndex, handleLike, handlePass, swipesRef }) {
  //variables fals
  const [willLike, setWillLike] = useState(false)
  const [willPass, setWillPass] = useState(false)

  {/*Para renderizar, los usarios que obtenemos de la API que es en un array*/}
  const renderLeftActions = () => {
    return (
      <RectButton style={styles.container}>
        {/*currentIndex + 1 es para indicar que puede ser el siguiente usuario de la pila*/}
        <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
      </RectButton>
    )
  }
  const renderRightActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
      </RectButton>
    )
  }

  return (
    <Swipeable
      ref={swipesRef}
      //Propiedad del tiempo del swipe 
      friction={3}
      //umbral de deslizamiento 
      leftThreshold={40}
      rightThreshold={40}
      //componene que esta detras de la carta
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      //triger que se deberia activar cuando deslizamos
      onSwipeableLeftOpen={() => {
        setWillLike(false)
        handleLike()
      }}
      onSwipeableRightOpen={() => {
        setWillPass(false)
        handlePass()
      }}
      //cuando desliza a la izquierda like perso/ sino pass person
      onSwipeableLeftWillOpen={() => setWillLike(true)}
      onSwipeableRightWillOpen={() => setWillPass(true)}
    >
      {/* Elemento hijo, */}
      <SwipeableImage user={users[currentIndex]} willLike={willLike} willPass={willPass} />
    </Swipeable>
  )
}
//Declaración de estilo
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

//exporto react.fowaref para refernciar/ reenviamos nuestro componente swipes y pasamos la propiedad swipes
//que va hacer igual a la la primer referencia
export default React.forwardRef((props, ref) => <Swipes swipesRef={ref} {...props}></Swipes>)