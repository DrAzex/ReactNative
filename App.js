import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import SettingsScreen from './Components/SettingsScreen/SettingsScreen';
import { AntDesign } from '@expo/vector-icons'; 

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
                <AntDesign name="down" size={24} color="black" />
              );
            },
            tabBarActiveTintColor: 'gray',
          }
        } />
        <Tab.Screen name="Settings" component={SettingsScreen} options={
          {
            title: 'Home',
            tabBarIcon: () => {
              return (
                <AntDesign name="down" size={24} color="black" />
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
