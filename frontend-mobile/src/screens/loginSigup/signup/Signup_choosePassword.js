import { View, Text, TouchableOpacity,Image, TextInput } from 'react-native'
import logo from '../../../../assets/logo.png'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../commonsCss/pagecss'
import { MaterialIcons } from '@expo/vector-icons';
import { formInput, formbtn, formHead} from '../../../commonsCss/formcss';

const Signup_choosePassword = ({navigation}) => {
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
            <Text style={formHead}>Choose a strong password</Text>
            <TextInput placeholder="Enter password" style={formInput} secureTextEntry
                onChangeText={(text) => setpassword(text)}
            />
            <TextInput placeholder="Confirm password" style={formInput} secureTextEntry
                onChangeText={(text) => setconfirmpassword(text)}
            />
            <Text style={formbtn}
                onPress={() => navigation.navigate('Signup_accountCreated')}>
                Next
            </Text>

        </View>
  )
}

export default Signup_choosePassword