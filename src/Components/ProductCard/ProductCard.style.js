import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    margin: 5,
  },
  image: {
    minHeight: 100,
    width: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'right',
    fontWeight: '300',
  },
});
