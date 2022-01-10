import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import Detail from './Pages/Detail';
import Products from './Pages/Products';
import Login from './Pages/Login/Login';
import Loading from './Components/Loading';

const Stack = createNativeStackNavigator();
const screenOptions = {
  title: 'Products',
  headerStyle: {backgroundColor: '#607d8b'},
  headerTitleStyle: {color: 'white', fontWeight: 'bold'},
};

const Router = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.authLoading);
  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
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
      )}
    </NavigationContainer>
  );
};

export default Router;
