import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, hr80, logo1 } from '../../../commonsCss/pagecss'
import logo from '../../../../assets/logo.png'
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter, formTextLinkRight } from '../../../commonsCss/formcss';
import { MaterialIcons } from '@expo/vector-icons';

const Forgotpassword_choosepassword =  ({ navigation, route }) => {
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
      <Text style={formHead2}>Choose a strong password</Text>
      <TextInput placeholder="Enter password" style={formInput} secureTextEntry
          onChangeText={(text) => setpassword(text)}
      />
      <TextInput placeholder="Confirm password" style={formInput} secureTextEntry
          onChangeText={(text) => setconfirmpassword(text)}
      />
      {
          // loading ? <ActivityIndicator size="large" color="white" /> :
              <Text style={formbtn}
                  onPress={() => navigation.navigate('Forgotpassword_accountRecovered')}
              >
                  Next
              </Text>
      }

  </View>
  )
}

export default Forgotpassword_choosepassword