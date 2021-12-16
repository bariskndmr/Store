import {StyleSheet, Dimensions} from 'react-native';

const Device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    width: Device.width,
    height: Device.height / 2,
    resizeMode: 'contain',
  },
  bodyContainer: {
    justifyContent: 'space-between',
    margin: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    fontWeight: '300',
    marginVertical: 10,
  },
  price: {
    textAlign: 'right',
    fontWeight: 'bold',
  },
});
