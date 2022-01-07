import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import reducers from './reducers';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [authloading, setAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@USER').then(usersession => {
      usersession && setUser(JSON.parse(usersession));
      setAuthLoading(false);
    });
  }, []);

  const store = createStore(reducers, {user, authloading});
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
