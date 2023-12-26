import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { containerFull } from '../../commonsCss/pagecss'
import { formHead } from '../../commonsCss/formcss'
import TopNavbar from '../../components/TopNavbar'
import Bottomnavbar from '../../components/Bottomnavbar'
import FollowersRandomPost from '../../components/FollowersRandomPost'

const Mainpage = ({navigation}) => {
  return (
    <View style={styles.container}>

      <StatusBar />
      <TopNavbar navigation={navigation} page='Mainpage'/>
      <Bottomnavbar navigation={navigation} page='Mainpage'/>
      <FollowersRandomPost />
    </View>
  )
}

export default Mainpage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        paddingVertical: 50,
    }
})