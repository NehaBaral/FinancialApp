import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import TransactionComponent from './src/screens/transaction';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionDetailComponent from './src/screens/transactionDetail';
import SummaryComponent from './src/screens/summary';


const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const TransactionStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='TransactionList'
        component={TransactionComponent}
        options={{ title: 'My Transaction' }} />

      <Stack.Screen
        name='TransactionDetail'
        component={TransactionDetailComponent} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#145a32',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Transaction') {
            iconName = focused ? 'briefcase-check' : 'briefcase-check-outline'
          } else {
            iconName = focused ? 'clipboard-text' : 'clipboard-text-outline';
          }
          return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
        }
      })}>
        <Tab.Screen name="Transaction" component={TransactionStackNavigation}
          options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name="Summary" component={SummaryComponent}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
