import { StyleSheet } from "react-native";



export const MovieCardStyle = StyleSheet.create({

  viewImage: {
    width: 300,
    height: 420,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 12,
    },
    shadowOpacity: 0.8,
    shadowRadius: 16.00,
    
    elevation: 24,
  },
  separation:{
    marginHorizontal:5
  },

  image: {
    flex: 1,
    borderRadius: 18,
  }
})