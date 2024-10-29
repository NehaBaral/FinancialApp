import { TouchableOpacity, View, Text, FlatList } from "react-native";
import { useEffect, useRef, useState } from "react";
import style from "./style";
import { transactions } from "../../data/TransactionsData.js";

export default function TransactionComponent({ navigation }) {
    const [sortedTransaction, setSortedTransaction] = useState()

    useEffect(()=>{
        let sorted = transactions.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });

          setSortedTransaction(sorted);
    },[])

    const list = useRef(null);
    const Separator = () => {
        return <View style={{ height: 1, backgroundColor: '#023020' }} />;
    };

    const navigateToDetailScreen = (item) =>{
        const selectedTransaction = item;
        console.log("selected",selectedTransaction);
    navigation.navigate('TransactionDetail',{selectedTransaction});
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style = {style.container} onPress={() => {navigateToDetailScreen(item) }}>
            <View style = {style.transactionView}>
                <View style = {style.transactionView1}>
                    <Text style = {style.transcationName}>{item.name}</Text>
                    <Text style = {style.transactionAmount}>Total Amount : {item.currency} {item.amount} </Text>
                </View>
                <Text style = {style.transactionDate}>{item.date}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style = {style.mainView}>
            <FlatList
                ref={list}
                keyExtractor={(item) => item.id + item.name}
                data={sortedTransaction}
                renderItem={renderItem}
            />
        </View>
    )
}
