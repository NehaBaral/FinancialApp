import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
    },
    header: {
      backgroundColor: 'white',
      padding: 20,
      marginTop: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
      marginBottom : 5
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    amount: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    expense: {
      color: 'red',
    },

    income: {
      color: 'green',
    },

    section: {
      backgroundColor: '#ffffff',
      marginTop: 10,
      padding: 20,
      marginBottom : 10
    },

    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },

    rowData: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },

    title: {
      fontSize: 16,
      color: 'gray',
    },

    value: {
      fontSize: 16,
      fontWeight: '500',
    },
    notes: {
      fontSize: 16,
    },
  });
  