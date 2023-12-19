import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import TopNavbar from '../../components/TopNavbar'
import Bottomnavbar from '../../components/Bottomnavbar'
import { StatusBar } from 'expo-status-bar'
import { formHead } from '../../commonsCss/formcss'
import { searchbar } from '../../commonsCss/pagecss'
import UserCard from '../../cards/UserCard'

const SearchUserPage = ({navigation}) => {
  let data = [
    {
        username: "user1",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "adsj1",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "ádas123",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "user2",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "viraj2",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "ravi1234",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "user1",
        profile_image: "https://picsum.photos/200/300",
    },
    {
        username: "user2",
        profile_image: "https://picsum.photos/200/300",
    },
    {
        username: "auser3",
        profile_image: "https://picsum.photos/200/300",
    },
    {
        username: "auser5",
        profile_image: "https://picsum.photos/200/300",
    },
    {
        username: "buser6",
        profile_image: "https://picsum.photos/200/300",
    },
    {
        username: "buser9",
        profile_image: "https://picsum.photos/200/300",
    },
    {
        username: "cuser10",
        profile_image: "https://picsum.photos/200/300",
    }
  ]

  const [keyword, setKeyword] = useState("")

  return (
    
      <View style={styles.container}>
  
        <StatusBar />
        <TopNavbar navigation={navigation} page='SearchUserPage'/>
        <Bottomnavbar navigation={navigation}page='SearchUserPage'/>
        <TextInput placeholder="Search By Username.." style={searchbar}
                onChangeText={(text) => {
                    setKeyword(text)
                }}
            />

        <ScrollView style={styles.userlists}>
          {
              data.filter(
                (user) =>{
                  if(keyword==""){
                    return null
                  }
                  else if(user.username.toLowerCase().includes(keyword.toLowerCase())){
                    return user
                  }
                }
                
              ).map((item, index) => {
                  return <UserCard key={item.username} user={item} />
              })
          }
      </ScrollView>
      </View>
    
  )
}

export default SearchUserPage

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: 50,
},
userlists: {
    width: '100%',
    marginTop: 20,
    backgroundColor: 'black',
}
})