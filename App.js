import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/screens/LoadingScreen';
import SongListScreen from './src/screens/SongListScreen';
import SongDetailsScreen from './src/screens/SongDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SongListScreen" >
        <Stack.Screen name="SongListScreen" component={SongListScreen} options={{
          headerTitle: 'Songs',
          headerStyle: {
            backgroundColor: '#351431',
          },
          headerTintColor: '#dfe0dc',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SongDetailsScreen" component={SongDetailsScreen} options={{
          headerTitle: 'Song Detail',
          headerStyle: {
            backgroundColor: '#351431',
          },
          headerTintColor: '#dfe0dc',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}