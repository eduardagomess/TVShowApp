import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Details({ route, navigation }) {
  Details.navigationOptions = () => ({
    title: 'Details'
  })
  const { description } = route.params
  const { photo1 } = route.params
  const { photo2 } = route.params
  const { name } = route.params
  const { cast } = route.params

  return (
    <View style={styles.firstContainer}>
      <Image style={styles.firstImg} source={{ uri: photo2 }}></Image>

      <Text style={styles.textName}>{name}</Text>
      <View style={styles.secondContainer}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              `https://www.youtube.com/results?search_query= ${name} trailer`
            )
          }
        >
          <View style={styles.secondContainer}>
            <Image
              style={styles.secondImg}
              source={require('../../../assets/triangulo.png')}
            ></Image>
            <Text style={styles.button}>Tap here to see the trailer</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.textDescription}> {description}</Text>
      <Text style={styles.textCast}> Cast: {cast}</Text>
      <View style={styles.thirdcontainer}>
        <Text style={styles.textRaction}>Add to your list:</Text>
        <TouchableOpacity
          onPress={async () => {
            const seriesList = await AsyncStorage.getItem('likedSeries')
            const items = seriesList ? JSON.parse(seriesList) : []
            if (items.indexOf(photo1) === -1) {
              items.push(photo1)
              await AsyncStorage.setItem('likedSeries', JSON.stringify(items))
            }
          }}
        >
          <Image
            style={styles.checkImg}
            source={require('../../../assets/check.png')}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            const seriesList = await AsyncStorage.getItem('likedSeries')
            const items = seriesList ? JSON.parse(seriesList) : []
            if (items.indexOf(photo1) > -1) {
              items.splice(items.indexOf(photo1), 1)
              await AsyncStorage.setItem('likedSeries', JSON.stringify(items))
            }
          }}
        >
          <Image
            style={styles.removeImg}
            source={require('../../../assets/remove.png')}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  secondContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5
  },
  thirdcontainer: {
    flexDirection: 'row'
  },
  textDescription: {
    color: 'white',
    fontSize: 20,
    padding: 20,
    marginTop: 10
  },
  textName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 20
  },
  textCast: {
    color: '#c4c0c0',
    fontSize: 13,
    marginLeft: 20,
    marginTop: 10
  },
  textRaction: {
    color: 'white',
    fontSize: 20,
    padding: 30,
    marginTop: 10
  },
  firstImg: {
    width: '100%',
    height: 350
  },
  secondImg: {
    width: 20,
    height: 20,
    marginTop: 8,
    marginRight: 5
  },
  button: {
    overflow: 'hidden',
    padding: 10
  },
  removeImg: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 40
  },
  checkImg: {
    width: 45,
    height: 45,
    marginRight: 50,
    marginLeft: 10,
    marginTop: 30
  }
})
export default Details
