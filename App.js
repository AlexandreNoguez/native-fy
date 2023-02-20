import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MainRoutes } from './src/routes/MainRoutes';

export default function App() {

  function fofinha(fofinha) {
    alert(fofinha)
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MainRoutes />
        <StatusBar style="dark" />
      </View>
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
