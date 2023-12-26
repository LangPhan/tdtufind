import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import TopNavbar from '../../components/TopNavbar'
import Bottomnavbar from '../../components/Bottomnavbar'
import { StatusBar } from 'expo-status-bar'
import { formHead } from '../../commonsCss/formcss'

const My_UserProfile = ({navigation}) => {
  const data = {
    username: 'user1',
    follower: 1201,
    following: 2101,
    description: 'I am a developer',
    profile_image: 'https://picsum.photos/500/500',
    posts:[
      {
        id: 1,
        post_images: "https://picsum.photos/100/100"
      },
      {
        id: 2,
        post_images: "https://picsum.photos/200/200"
      },
      {
        id: 3,
        post_images: "https://picsum.photos/300/300"
      },
      {
        id: 4,
        post_images: "https://picsum.photos/400/400"
      },
      {
        id: 5,
        post_images: "https://picsum.photos/500/500"
      },
      {
        id: 6,
        post_images: "https://picsum.photos/600/600"
      },

    ]
  }
  return (
    
      <View style={styles.container}>
  
        <StatusBar />
        <TopNavbar navigation={navigation} page='My_UserProfile'/>
        <Bottomnavbar navigation={navigation} page='My_UserProfile'/>
        
        <ScrollView>
            <View style={styles.c1}>
              <Image style={styles.profilepic} source={{uri: data.profile_image}}/>
              <Text style={styles.txt}>@{data.username}</Text>

              <View style={styles.c11}>
                <View style={styles.c111}>
                  <Text style={styles.txt1}>Follower</Text>
                  <Text style={styles.txt2}>{data.follower}</Text>
                </View>
                <View style={styles.vr1}/>

                <View style={styles.c111}>
                  <Text style={styles.txt1}>Following</Text>
                  <Text style={styles.txt2}>{data.following}</Text>
                </View>

                <View style={styles.vr1}/>

                <View style={styles.c111}>
                  <Text style={styles.txt1}>Posts</Text>
                  <Text style={styles.txt2}>{data.posts.length}</Text>
                </View>
              </View>

              <Text style={styles.description}>{data.description}</Text>

            </View>
            <View style={styles.c1}>
              <Text style={styles.txt}>Your Posts</Text>

              <View style={styles.c13}>
                {
                  data.posts.map((item) =>{
                    return (
                      <Image key={item.id} style={styles.postpic} source={{uri: item.post_images}}/>
                    )
                  })
                }
              </View>
            </View>
        </ScrollView>
      </View>
    
  )
}

export default My_UserProfile

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: 50,
  },
  c1: {
      width: '100%',
      alignItems: 'center',
  },
  profilepic: {
      width: 150,
      height: 150,
      borderRadius: 75,
      margin: 10
  },
  txt: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      backgroundColor: '#111111',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20
  },
  txt1: {
      color: 'white',
      fontSize: 15,
  },
  txt2: {
      color: 'white',
      fontSize: 20,
  },
  c11: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
  },
  c111: {
      alignItems: 'center',
  },
  vr1: {
      width: 1,
      height: 50,
      backgroundColor: 'white'
  },
  description: {
      color: 'white',
      fontSize: 15,
      marginVertical: 10,
      backgroundColor: '#111111',
      width: '100%',
      padding: 10,
      paddingVertical: 20,
  },
  postpic: {
      width: '30%',
      height: 120,
      margin: 5
  },
  c13: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 20,
      justifyContent: 'center'
  },
  c2: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 200
  },
  refresh: {
      position: 'absolute',
      top: 50,
      right: 5,
      zIndex: 1,
  }
})