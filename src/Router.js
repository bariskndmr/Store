import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Detail from './Pages/Detail';
import Products from './Pages/Products';
import Login from './Pages/Login/Login';
import Loading from './Components/Loading';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="LogOut"
        onPress={() => dispatch({type: 'REMOVE_USER', user: null})}
        icon={() => <Icon />}
      />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="ProductsPageDrawer"
        component={Products}
        options={{
          title: 'Products',
          headerStyle: {backgroundColor: '#607d8b'},
          headerTitleStyle: {color: 'white', fontWeight: 'bold'},
          headerTintColor: 'white',
        }}
      />
    </Drawer.Navigator>
  );
}

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
            component={MyDrawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailPage"
            component={Detail}
            options={{
              title: 'Product Detail',
              headerStyle: {backgroundColor: '#607d8b'},
              headerTitleStyle: {color: 'white', fontWeight: 'bold'},
              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;

const Icon = () => {
  return <MaterialCommunityIcons name="logout" size={30} />;
};
