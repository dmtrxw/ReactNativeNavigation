import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/*
        If you want to share options across all screens,
        you can give `screenOptions` onto <Stack.Navigator>
      */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home Screen',
          headerStyle: {
            backgroundColor: '#333',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default Home;
