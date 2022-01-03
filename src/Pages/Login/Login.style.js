import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#607d8b',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: height / 4,
    resizeMode: 'contain',
    tintColor: '#d5ffff',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
  },
});
