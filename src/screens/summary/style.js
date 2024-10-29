import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

    container : {
        height : '100%',
        width : '100%'
    },

    section: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        padding: 20,
        marginBottom : 10,
        alignItems : 'center'
      },

      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
      },

      negativeValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color : 'red'
      },

      positiveValue : {
        fontSize: 24,
        fontWeight: 'bold',
        color : 'green'
      }
});