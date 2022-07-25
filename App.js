import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Profile from './Components/Profile/Profile';
import Messenger from './Components/MessengerScreen/Messenger';

import { MaterialCommunityIcons,Ionicons,MaterialIcons } from '@expo/vector-icons'; 
import { Register } from './src/Register';

const Tab = createBottomTabNavigator();

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e3e8e4',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Register />
    </SafeAreaView>
  );
}


