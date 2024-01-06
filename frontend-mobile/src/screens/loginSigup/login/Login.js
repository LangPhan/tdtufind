import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator} from 'react-native'
import logo from '../../../../assets/logo.png'
import React from 'react'
import { containerFull, hr80, logo1 } from '../../../commonsCss/pagecss'
import { formHead, formInput, formTextLinkCenter, formTextLinkRight, formbtn } from '../../../commonsCss/formcss'
import { AntDesign } from '@expo/vector-icons';


const Login = ({navigation}) => {

  const handleGoogleLogin = async () => {
    
  };
  // const [token, setToken] = useState("");
  // const [userInfo, setUserInfo] = useState(null);

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId: "564118171380-gqljr4fdjv0q9vd9tpqrbq6kji60pk5c.apps.googleusercontent.com",
  //   iosClientId: "564118171380-6onnbsg88hcloa0955goukju7d39niaa.apps.googleusercontent.com",
  //   webClientId: "564118171380-6onnbsg88hcloa0955goukju7d39niaa.apps.googleusercontent.com",
  //   });


  // useEffect(() => {
  //   handleEffect();
  // }, [response, token]);

  // async function handleEffect() {
  //   const user = await getLocalUser();
  //   console.log("user", user);
  //   if (!user) {
  //     if (response?.type === "success") {

  //       getUserInfo(response.authentication.accessToken);
  //     }
  //   } else {
  //     setUserInfo(user);
  //     console.log("loaded locally");
  //   }
  // }

  // const getLocalUser = async () => {
  //   const data = await AsyncStorage.getItem("@user");
  //   if (!data) return null;
  //   return JSON.parse(data);
  // };

  // const getUserInfo = async (token) => {
  //   if (!token) return;
  //   try {
  //     const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const user = await response.json();
  //     await AsyncStorage.setItem("@user", JSON.stringify(user));
  //     setUserInfo(user);
  //   } catch (error) {
  //     console.error("Error fetching user info:", error);

  //   }
  // };

  return (
    <View style={containerFull}>
      <Image source={logo} style={logo1} />
        <Text style={formHead}>Login</Text>
        <TextInput placeholder="Enter Your Email" style={formInput} />
        <TextInput placeholder="Enter Your Password" style={formInput}
            secureTextEntry={true}
        />
        <Text style={formTextLinkRight}
            onPress={() => navigation.navigate('ForgotPassword_EnterEmail')}
        >Forgot Password?</Text>

        <Text style={formbtn} onPress={
            () => navigation.navigate('MainPage')
        }>
            Submit
        </Text>


        <View style={hr80}></View>


        <Text style={formTextLinkCenter}>
            Don't have an account? <Text style={{ color: 'white' }}
                onPress={() => navigation.navigate('Signup_chooseUsername')}
            >Signup</Text>
        </Text>

      <Text style={formbtn} 
       onPress={() => navigation.navigate('Mainpage')}
        >
          <AntDesign name="google" size={24} color="white" /> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login by Google
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Login