import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { formHead } from '../../commonsCss/formcss'

const Setting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.gohomeicon}

        onPress={() => navigation.navigate('My_UserProfile')}
        />

      <Text style={styles.txt1}>Setting</Text>

      <Text style={styles.txt1}>Edit Profile</Text>
      
      <Text style={styles.txt1}>Change Password</Text>

      <Text style={styles.txt1}>Customer Support</Text>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    txt1: {
        marginTop: 20,
        color: 'white',
        fontSize: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    }
})
