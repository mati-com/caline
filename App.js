import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Constants from 'expo-constants'
import TopBar from './components/TopBar'
import axios from 'axios'
import BottomBar from './components/BottomBar'
import Swipes from './components/Swipes'

export default function App() {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const swipesRef = useRef(null)
//Función asincrona con bloque de captura de prueba
  async function fetchUsers() {
    try {
      //Espera que axios obtenga datos el primer parametro es la url
      //Almacenamos esto en los estados 
      const { data } = await axios.get('https://randomuser.me/api/?gender=female&results=50')
      //Data.results es la propiedad del api   
      setUsers(data.results)
    } catch (error) {
      console.log(error)
      Alert.alert('Error al cargar usuarios', '', [{ text: 'Reintentar', onPress: () => fetchUsers() }])
    }
  }
//cuando todo este "montado" uso el hooks useEffect
//le pase un un array vacio para que indique el userEffect solo se ejecutará una vez(cuando se monte el componente)
  useEffect(() => {
    fetchUsers()
  }, [])

  function handleLike() {
    console.log('coffee')
    nextUser()
  }

  function handlePass() {
    console.log('ignore')
    nextUser()
  }

  function nextUser() {
    //lee los usuarios de lenght / resto 2 por que quiero dos usuario en el pila
    //si lenght es menor a 2 es igual al indice actual si es cierto el indice será 0 restablece la pila, 
    //de lo contrario el current index sera el siguiente en la pila 
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }
  //metodos invocados de gesture handler
  function handleLikePress() {
    swipesRef.current.openLeft()
  }
  function handlePassPress() {
    swipesRef.current.openRight()
  }

  return (
    <View style={styles.container}>
      <TopBar />
      {/*Si la longitud de user.length es mayor a 1 solo si es verdadero vamos a asignar a todos los usuarios*/}
      <View style={styles.swipes}>
        {/*Asigno el array de user y index pero solo lo represento si el currentidenx es igual a
        al index de anterior index. Se utiliza para mostrar al siguiente usuario en la cola. USO MAP. asi que es obligatorio el uso de una key*/}
        {users.length > 1 &&
          users.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  users={users}
                  handleLike={handleLike}
                  handlePass={handlePass}
                ></Swipes>
              )
          )}
      </View>
      <BottomBar handleLikePress={handleLikePress} handlePassPress={handlePassPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
})