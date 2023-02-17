import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator 
          screenOptions={
            {
              // The header's text color.
              headerTintColor: "white",
              // The header's background color.
              headerStyle: { backgroundColor: "purple" },
              // The main content's background color.
              contentStyle: { backgroundColor: "white" },
              // The background color of the active drawer element.
              drawerActiveBackgroundColor: "purple",
              // The text color of the active drawer element.
              drawerActiveTintColor: "white"
            }    
          } 
        >
          <Drawer.Screen 
            name="Welcome" 
            component={WelcomeScreen} 
            options={{
                drawerIcon: ({color, size}) => {
                  return <Ionicons name="home" color={color} size={size} />
                }
            }}
          />
          <Drawer.Screen 
            name="User" 
            component={UserScreen} 
            options={{
                drawerLabel: "User Profile",
                drawerIcon: ({color, size}) => {
                  return <Ionicons name="person" color={color} size={size} />
                }
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
