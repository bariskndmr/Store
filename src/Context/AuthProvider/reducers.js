import AsyncStorage from '@react-native-async-storage/async-storage';

export default function reducers(state, action) {
  switch (action.type) {
    case 'SET_USER':
      const {user} = action.payload;
      // const jsonUser = JSON.stringify(user); // bu şekilde de kullanabiliriz
      AsyncStorage.setItem('@USER', JSON.stringify(user)); // JSON.stringify, json datayı diziye dönüştürür
      return {...state, user};

    default:
      return state;
  }
}
