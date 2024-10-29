import { View , Text , ScrollView } from "react-native";
import styles from "./style";

export default function TransactionDetailComponent({route}){

    const transaction  = route?.params?.selectedTransaction;
    
    return(
        <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{transaction.name}</Text>
          <Text style={[styles.amount, transaction.type === 'Expense' ? styles.expense : styles.income]}>
            {transaction.type === 'Expense' ? '-' : '+'}{transaction.currency} {transaction.amount}
          </Text>
        </View>
  
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Transaction Details</Text>
          <View style={styles.rowData}>
            <Text style={styles.title}>Date:</Text>
            <Text style={styles.value}>{transaction.date}</Text>
          </View>
          <View style={styles.rowData}>
            <Text style={styles.title}>Category:</Text>
            <Text style={styles.value}>{transaction.category}</Text>
          </View>
          <View style={styles.rowData}>
            <Text style={styles.title}>Payment Method:</Text>
            <Text style={styles.value}>{transaction.paymentMethod}</Text>
          </View>
          <View style={styles.rowData}>
            <Text style={styles.title}>Location:</Text>
            <Text style={styles.value}>{transaction.location}</Text>
          </View>
          <View style={styles.rowData}>
            <Text style={styles.title}>Status:</Text>
            <Text style={styles.value}>{transaction.status}</Text>
          </View>
        </View>
  
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Information</Text>
          <View style={styles.rowData}>
            <Text style={styles.title}>Description:</Text>
            <Text style={styles.value}>{transaction.description}</Text>
          </View>
          <View style={styles.rowData}>
            <Text style={styles.title}>Tags:</Text>
            <Text style={styles.value}>{transaction.tags.join(', ')}</Text>
          </View>
          <View style={styles.rowData}>
            <Text style={styles.title}>Recurring:</Text>
            <Text style={styles.value}>{transaction.recurring ? 'Yes' : 'No'}</Text>
          </View>
          <View style={styles.rowData}>
            <Text style={styles.title}>Budget Category:</Text>
            <Text style={styles.value}>{transaction.budgetCategory}</Text>
          </View>
        </View>
  
        {transaction.notes && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notes</Text>
            <Text style={styles.notes}>{transaction.notes}</Text>
          </View>
        )}
      </ScrollView>
    )
}