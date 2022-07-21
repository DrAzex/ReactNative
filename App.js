import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Profile from './Components/Profile/Profile';
import Messenger from './Components/MessengerScreen/Messenger';

import { MaterialCommunityIcons,Ionicons,MaterialIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={
          {
            title: 'Home',
            tabBarIcon: () => {
              return (
                <Ionicons name="ios-home-outline" size={24} color="black" />
              );
            },
            tabBarActiveTintColor: 'gray',
          }
        } />
        <Tab.Screen name="Messenger" component={Messenger} options={
          {
            title: 'Messenger',
            tabBarIcon: () => {
              return (
                <MaterialIcons name="messenger-outline" size={24} color="black" />
              );
            },
            tabBarActiveTintColor: 'gray',
          }
        }/>
        <Tab.Screen name="Profile" component={Profile} options={
          {
            title: 'Profile',
            tabBarIcon: () => {
              return (
                <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />
              );
            },
            tabBarActiveTintColor: 'gray',
          }
        }/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
