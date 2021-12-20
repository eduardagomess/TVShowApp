import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function SeriesList({ navigation }) {
  const [list, setList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const value = await AsyncStorage.getItem('likedSeries')
      setList(JSON.parse(value))
    }
    fetchData()
  }, [])

  return (
    <View style={styles.firstContainer}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View>
            <View style={styles.secondContainer}>
              <Image source={{ uri: item }} style={styles.img}></Image>
            </View>
          </View>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    backgroundColor: 'black',
    height: '100%'
  },

  secondContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20
  },

  img: {
    width: 150,
    height: 250,
    borderRadius: 20
  }
})
export default SeriesList
