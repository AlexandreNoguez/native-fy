import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged } from 'firebase/auth';
import { Button, StyleSheet, Text, View } from 'react-native';
import { auth } from './src/api';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
import { MainRoutes } from './src/routes/MainRoutes';


export default function App() {


  return (
    <NavigationContainer>
      <MainRoutes />
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
