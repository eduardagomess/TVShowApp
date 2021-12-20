import * as React from 'react'
import Series from './src/Pages/Series/series'
import Details from './src/Pages/Series/details'
import Home from './src/Pages/Series/home'
import SeriesList from './src/Pages/Series/seriesList'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="TV shows" component={Series} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TV shows list" component={SeriesList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
