import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Detail from './Pages/Detail';
import Products from './Pages/Products';
import Login from './Pages/Login/Login';

const Stack = createNativeStackNavigator();
const screenOptions = {
  title: 'Products',
  headerStyle: {backgroundColor: '#607d8b'},
  headerTitleStyle: {color: 'white', fontWeight: 'bold'},
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={screenOptions}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
