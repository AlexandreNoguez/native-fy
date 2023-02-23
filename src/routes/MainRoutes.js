import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../api';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register'

const Stack = createNativeStackNavigator();

export const MainRoutes = () => {
  const navigation = useNavigation();

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      alert("Bem vindo ao Native-FY")
      navigation.navigate('Home')
    } else {
      // alert("Deslogado");
      navigation.navigate("Login")
    }
  })

  return (
    <Stack.Navigator

      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Login'
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
    </Stack.Navigator>

  )
}