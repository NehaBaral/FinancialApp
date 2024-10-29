import { Text, View } from "react-native";
import style from "./style";
import { transactions } from "../../data/TransactionsData";
import { useEffect, useState } from "react";

export default function SummaryComponent(){
    const [totalIncome, setTotalIncome] = useState();
    const [totalExpenses, setTotalExpenses] = useState();

    useEffect(()=>{
        let income = 0;
        let expense = 0;

        for (const item of transactions) {
            if(item.type == 'Expense') expense+=item.amount
            else{
                income+=item.amount
            }
          }

          setTotalIncome(income);
          setTotalExpenses(expense);

    },[]);
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