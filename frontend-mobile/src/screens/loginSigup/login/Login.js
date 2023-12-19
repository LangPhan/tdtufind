import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator} from 'react-native'
import logo from '../../../../assets/logo.png'
import React from 'react'
import { containerFull, hr80, logo1 } from '../../../commonsCss/pagecss'
import { formHead, formInput, formTextLinkCenter, formTextLinkRight, formbtn } from '../../../commonsCss/formcss'
import { AntDesign } from '@expo/vector-icons';


const Login = ({navigation}) => {

  const handleGoogleLogin = async () => {
    
  };

  return (
    <View style={containerFull}>
      <Image source={logo} style={logo1}></Image>
      <Text style='none'>Login</Text>
      <TextInput placeholder='Enter your email' style='none'/>
      <TextInput placeholder='Enter your password' style='none' secureTextEntry={true}/>

      <Text style='none'
        onPress={() => navigation.navigate('Forgotpassword_enterEmail')}>
          Forgot Password?</Text>


      <Text style='none'
        onPress={() => navigation.navigate('Mainpage')}>Login</Text>

      <View style='none' ></View>

      <Text style='none'>Don't have an account? &nbsp; 
        <Text style='none'
          onPress={() => navigation.navigate('Signup_enterEmail')}>
            Signup
        </Text>
      
      </Text>

      <Text style={formbtn} 
       onPress={() => navigation.navigate('Mainpage')}
        >
          <AntDesign name="google" size={24} color="white" /> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login by Google
          </Text>
    </View>
  )
}

export default Login