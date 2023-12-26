import { View, Text, TouchableOpacity,Image, TextInput } from 'react-native'
import logo from '../../../../assets/logo.png'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../commonsCss/pagecss'
import { MaterialIcons } from '@expo/vector-icons';
import { formInput, formbtn, formHead } from '../../../commonsCss/formcss';

const Signup_chooseUsername = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback}>
      <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
        <Text style={{color:'gray', fontSize: 16}}>
          Go Back
        </Text>
      </TouchableOpacity>
      
      <Image source={logo} style={logo1}></Image>

      <Text style={formHead}>Enter a username</Text>

      <TextInput placeholder='Enter a username' style={formInput}/>

      <Text style={formbtn} onPress={() => navigation.navigate('Signup_choosePassword')}>Next</Text>
    </View>
  )
}
export default Signup_chooseUsername