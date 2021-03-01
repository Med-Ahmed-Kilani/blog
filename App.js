import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/IndexScreen'
import { Provider } from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen' 
import CreationScreen from './src/screens/CreationScreen'
import EditScreen from './src/screens/EditScreen'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='index'>
        <Stack.Screen 
          name='index' 
          component={Home}
        />
        <Stack.Screen
          name='Details' 
          component={ShowScreen}
        />
        <Stack.Screen 
          name='Create' 
          component={CreationScreen}
        />
        <Stack.Screen
          name='edit'
          component={EditScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () =>{
  return <Provider>
    <App/>
  </Provider>
}