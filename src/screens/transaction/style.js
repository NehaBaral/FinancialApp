import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    mainView: {
        height:'100%',
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 16,
        margin : 8,
        borderRadius : 10,

    },

    transactionView:{
        flex : 1,
        flexDirection: 'row',
        width: '100%',
    },

    transactionView1:{
        flex : 1,
    },

    transcationName : {
        flexShrink: 1,
        color: 'black',
        fontSize: 16,
        marginEnd : 16,
        width : '70%',
        fontWeight : '700'
    },

    transactionDate : {
        flexShrink: 1,
        color: 'black',
        fontSize: 14,
    },

    transactionAmount : {
        flexShrink: 1,
        color: 'saddlebrown',
        fontSize: 14,
        marginEnd : 16
    }
});