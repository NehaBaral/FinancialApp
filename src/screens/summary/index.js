import { Text, View } from "react-native";
import style from "./style";
import { transactions } from "../../data/TransactionsData";

export default function SummaryComponent(){
    var totalIncome = 0;
    var totalExpenses = 0;

    for (const item of transactions) {
        if(item.type == 'Expense') totalExpenses+=item.amount
        else{
            totalIncome+=item.amount
        }
      }
    return(
        <View style = {style.container}>
            <View style = {style.section}>
                <Text style = {style.title}>Total Income</Text>
                <Text style = {style.positiveValue}>$ {totalIncome}</Text>
            </View>

            <View style = {style.section}>
                <Text style = {style.title}>Total Expenses</Text>
                <Text style = {style.negativeValue}>$ {totalExpenses}</Text>
            </View>
        </View>
    )
}