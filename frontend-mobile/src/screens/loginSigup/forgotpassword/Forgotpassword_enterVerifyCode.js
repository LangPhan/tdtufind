import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { containerFull, goback, hr80, logo1 } from '../../../commonsCss/pagecss'
import logo from '../../../../assets/logo.png'
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter, formTextLinkRight } from '../../../commonsCss/formcss';
import { MaterialIcons } from '@expo/vector-icons';

const Forgotpassword_enterVerifyCode = ({ navigation, route }) => {

  const handleVerificationCode = () => {

    if (verificationCode != userVerificationCode) {
        alert('Invalid Verification Code')
    }
    else {
        alert('Verification Code Matched')
        navigation.navigate('Forgotpassword_choosepassword', { email: useremail })
    }

    // navigation.navigate('Forgotpassword_choosepassword')
  }

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
      <Text style={formHead3}>A verification code has been sent to your email</Text>

      <TextInput placeholder="Enter 6-Digit Code here" style={formInput}
          onChangeText={(text) => setVerificationCode(text)}
      />

      <Text style={formbtn}
          onPress={() => navigation.navigate('Forgotpassword_choosepassword')}
      >
          Next
      </Text>
  </View>
  )
}

export default Forgotpassword_enterVerifyCode