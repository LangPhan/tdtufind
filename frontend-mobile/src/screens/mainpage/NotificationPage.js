import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNavbar from '../../components/TopNavbar'
import Bottomnavbar from '../../components/Bottomnavbar'
import { StatusBar } from 'expo-status-bar'
import { formHead } from '../../commonsCss/formcss'

const NotificationPage = ({navigation}) => {
  return (
    
      <View style={styles.container}>
  
        <StatusBar />
        <TopNavbar navigation={navigation} page='NotificationPage'/>
        <Bottomnavbar navigation={navigation} page='NotificationPage'/>
        
        <View style={styles.c1}>
          <View style={styles.notification}>
              <Text>Some Notification</Text>
          </View>
          <View style={styles.notification}>
              <Text>Some Notification</Text>
          </View>
          <View style={styles.notification}>
              <Text>Some Notification</Text>
          </View>
          <View style={styles.notification}>
              <Text>Some Notification</Text>
          </View>
        </View>
      </View>
    
  )
}

export default NotificationPage

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: 50,
  },
  c1: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
  },
  notification: {
      width: '98%',
      height: 50,
      backgroundColor: 'white',
      marginTop: 10,
  }
})