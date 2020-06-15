import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './tabs/Home';
import Settings from './tabs/Settings';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      {/*
        You can provide `tabBarOptions` if you want to change something like
        styles for the tab bar, active/inactive tint color/bg color, label
        visibility, etc.

        https://reactnavigation.org/docs/bottom-tab-navigator/#tabbaroptions
      */}
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="ios-home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="ios-settings" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
