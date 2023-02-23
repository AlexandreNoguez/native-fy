import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Image, Pressable, StyleSheet, TextInput, Text, View } from 'react-native';
import { auth } from '../api/index'
import logo from '../../assets/nativefydark.png'

export const Register = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }
  // const navigation = useNavigation()

  return (
    <View className="w-full h-full">
      <View className="mx-4 h-5/6 flex justify-center align-center space-y-6">
        <Image source={logo} style={{ width: 100, height: 100, alignSelf: "center" }} />
        <Text className="block  font-title text-2xl font-bold text-center text-white">
          Sign Up
        </Text>

        <View className="space-y-6" >
          <View className="mt-1 space-y-4">
            <View className="flex-1 font-main flex-row justify-center align-center rounded-xl px-1 py-1 bg-gray-100">
              {/* <Icon style={styles.icon} name="email" size={18} color="gray" /> */}
              <TextInput
                placeholder='Email'
                value={value.email}
                className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
                onChangeText={(text) => setValue({ ...value, email: text })}
              />
            </View>

            <View className="flex-1 flex-row justify-center align-center rounded-xl px-1 py-1 bg-gray-100">
              {/* <Icon style={styles.icon} name="lock" size={18} color="gray" /> */}
              <TextInput
                placeholder="Password"
                className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
                onChangeText={(text) => setValue({ ...value, password: text })}
                secureTextEntry={true}
              />
            </View>
          </View>
          <Pressable className="bg-background border border-white rounded-3xl py-2 px-4 m-4" ><Text className="text-center text-white font-bold text-base" onPress={signUp}>Sign Up</Text></Pressable>
        </View>
        <Text className="text-center text-white font-main text-base">Have an account? <Text className="text-blue" onPress={() => navigation.navigate('Login')}>Sign In</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})