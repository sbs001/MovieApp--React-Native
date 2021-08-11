import { StyleSheet } from "react-native";

export const CastItemStyle = StyleSheet.create({

  ctn: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems:'center'
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  character:{
    fontSize: 15,
    color:'grey'
  },

  img:{
    width:70,
    height:60,
    margin:10,
    borderRadius:5,
  }
})