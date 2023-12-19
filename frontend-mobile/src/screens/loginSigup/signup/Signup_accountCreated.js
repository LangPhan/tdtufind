import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { containerFull, goback, hr80, logo1, row } from '../../../commonsCss/pagecss'
import logo from '../../../../assets/logo.png'
import { formbtn, formHead, formHead3, formInput, formTextLinkCenter, formTextLinkRight } from '../../../commonsCss/formcss';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Signup_accountCreated =  ({ navigation }) => {
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


        <View style={row}>
            <MaterialCommunityIcons name="check-decagram" size={30} color="#99B83C" />
            <Text style={formHead}> Account Created Successfully</Text>
        </View>

        <Text style={formbtn}
            onPress={() => navigation.navigate('Login')}
        >
            Let's Roll
        </Text>
    </View>
  )
}

export default Signup_accountCreated