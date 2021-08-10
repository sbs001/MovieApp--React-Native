import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen/DetailScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { Movie } from '../interfaces/ApiResponse';

export type RootStackParams = {
  Home: undefined,
  Detail: Movie
}

const Stack = createStackNavigator<RootStackParams>();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Detail' component={DetailScreen} />
    </Stack.Navigator>
  );
}