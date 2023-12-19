import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { containerFull, goback, hr80, logo1 } from '../../../commonsCss/pagecss'
import logo from '../../../../assets/logo.png'
import { formbtn, formHead, formHead2, formInput, formTextLinkCenter, formTextLinkRight } from '../../../commonsCss/formcss';
import { MaterialIcons } from '@expo/vector-icons';

const Forgotpassword_enterEmail =  ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback}>

          <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
          <Text style={{
              color: 'gray',
              fontSize: 16,
          }}

          >Go Back</Text>

      </TouchableOpacity>

      <Image source={logo} style={logo1} />
      <Text style={formHead2}>Verify Your Email</Text>
      <TextInput placeholder="Enter Your Email" style={formInput}
          onChangeText={(text) => setEmail(text)}
      />
      {
          // loading ? <ActivityIndicator size="large" color="white" /> :
              <Text style={formbtn}
                  onPress={() => navigation.navigate('Forgotpassword_enterVerifyCode')}
              >
                  Next
              </Text>
      }
  </View>
  )
}

export default Forgotpassword_enterEmail