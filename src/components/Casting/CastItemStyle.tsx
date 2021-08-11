import { StyleSheet } from "react-native";

export const CastItemStyle = StyleSheet.create({

  ctn: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding:10
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  character: {
    fontSize: 15,
    color: 'grey'
  },

  img: {
    width: 70,
    height: 60,
    marginRight: 10,
    borderRadius: 5,
  },

})