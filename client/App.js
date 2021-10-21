import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './Home';
import CreateAccount from './CreateAccount';
import Login from './Login';
import FillAccount from './FillAccount';
import Homeless from './Homeless';
import CreateHome from './CreateHome';
import JoinHome from './JoinHome';
import ListPage from './ListPage';
import Checkout from './Checkout';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name = "Home"
          component = {Home} 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name = "CreateAccount"
          component = {CreateAccount} 
          options={{
            headerShown: false,
          }} 
        />
         <Stack.Screen 
          name = "FillAccount"
          component = {FillAccount} 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name = "Login"
          component = {Login} 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name = "Homeless"
          component = {Homeless} 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name = "CreateHome"
          component = {CreateHome} 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name = "JoinHome"
          component = {JoinHome} 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name = "ListPage"
          component = {ListPage} 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name = "Checkout"
          component = {Checkout} 
          options={{
            headerShown: false,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}