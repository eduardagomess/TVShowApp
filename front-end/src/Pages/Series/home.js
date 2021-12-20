import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

function Home({ navigation }) {
  return (
    <View style={style.firstContainer}>
      <View style={style.secondContainer}>
        <Image
          style={style.img}
          source={require('../../../assets/logo.png')}
        ></Image>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('TV shows')}>
        <View style={style.secondContainer}>
          <Text style={style.text}>Tap here to see tv shows suggestions</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TV shows list')}>
        <View style={style.thirdContainer}>
          <Text style={style.textButton}>Favorite tv shows</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  firstContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  secondContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  thirdContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 100,
    marginRight: 100,
    paddingTop: 2
  },
  text: {
    color: 'white',
    fontSize: 15,
    padding: 30,
    marginBottom: 20
  },
  textButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 15,
    marginLeft: 25
  },
  img: {
    width: 300,
    height: 100,
    marginTop: 250
  }
})

export default Home
