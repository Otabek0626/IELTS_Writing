import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';
import AnswerOneScreen from './screens/AnswerOneScreen';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white", 
}

export default function App() {
  return (
      <NavigationContainer style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'IELTS Writing Band 9', headerTitleStyle: { alignSelf: 'center' }, }} />
          <Stack.Screen name="TaskOne" component={TaskScreen} options={{ title: 'Task 1' }} />
          <Stack.Screen name="TaskTwo" component={TaskScreen} options={{ title: 'Task 2' }} />
          <Stack.Screen name="AnswerOne" component={AnswerOneScreen} options={{ title: 'Task 1 Answer' }} />

        </Stack.Navigator>
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
