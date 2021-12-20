import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native'
import api from '../../Services/Api.js'

function Series({ navigation }) {
  const [series, setSeries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/series')
      setSeries(response.data)
    }
    fetchData()
  }, [])

  return (
    <View style={styles.firstContainer}>
      <FlatList
        numColumns={2}
        horizontal={false}
        data={series}
        columnWrapperStyle={styles.secondContainer}
        renderItem={({ item }) => (
          <View style={styles.secondContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', {
                  description: item.descricao,
                  photo1: item.foto1,
                  photo2: item.foto2,
                  name: item.nome,
                  cast: item.elenco
                })
              }
            >
              <Image source={{ uri: item.foto1 }} style={styles.img} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  secondContainer: {
    padding: 20
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    padding: 20
  },
  img: {
    width: 150,
    height: 250,
    borderRadius: 20
  }
})
export default Series
