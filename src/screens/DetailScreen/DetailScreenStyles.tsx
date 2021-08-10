import { Dimensions, StyleSheet } from "react-native";

const screenHeight = Dimensions.get('window').height

export const DetailScreenStyle = StyleSheet.create({

  viewImage: {
    width: '100%',
    height: screenHeight * 0.7,

  },

  image: {
    flex: 1,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  }
})