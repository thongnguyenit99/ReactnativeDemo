import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/Homescreen';
import AboutScreen from './components/Aboutscreen';
import ContactScreen from './components/Contactscreen';
import ChannelScreen from './components/ChannelScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
const Stack = createStackNavigator();

// Home Screen
function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome to thongnguyen' }}
        />
        <Stack.Screen name="Channel" component={ChannelScreen} />
    </Stack.Navigator>
  );
}
const SettingsStack = createStackNavigator();

//Contact Screen
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Contact" component={ContactScreen} />
      <SettingsStack.Screen name="Channel" component={ChannelScreen} />
    </SettingsStack.Navigator>
  );
}
// Screen About
const AboutStack = createStackNavigator();

function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={AboutScreen} />
      <AboutStack.Screen name="Channel" component={ChannelScreen} />
    </AboutStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="About" component={AboutStackScreen} />
        <Tab.Screen name="Contact" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
