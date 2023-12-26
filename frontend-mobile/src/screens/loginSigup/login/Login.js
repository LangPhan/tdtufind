import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import AsyncStorage from "@react-native-async-storage/async-storage";


WebBrowser.maybeCompleteAuthSession();

export default function App() {
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
  const [userInfo, setUserInfo] = useState(null)
  return (
    <View style={styles.container}>
      {!userInfo && (

        <GoogleOAuthProvider
          clientId="902539468556-admgq4ogf7q1gqdst7rd0ea2e1ab0vd3.apps.googleusercontent.com"
        >
          <GoogleLogin
            width={1000}
            shape="pill"
            theme="filled_blue"
            text="continue_with"
            locale="vi"
            onSuccess={(res) => {
              fetch(
                "http://localhost:3000/api/v1/auth",
                {
                  method: "POST",
                  headers: {
                    "Content-Type":
                      "application/json",
                  },
                  body: JSON.stringify({
                    credential:
                      res.credential,
                  }),
                }
              )
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  setUserInfo(data.data)
                  console.log(data);
                  console.log(userInfo);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
            onError={() => {
              console.log("ERROR");
            }}
          />
        </GoogleOAuthProvider>
      )
      }
      {/* {!userInfo ? (
        <Button
          title="Sign in with Google"
          // disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
      ) : ( */}
      <View style={styles.card}>
        {userInfo?.picture && (
          <Image source={{ uri: userInfo?.picture }} style={styles.image} />
        )}
        <Text style={styles.text}>Email: {userInfo?.email}</Text>
        <Text style={styles.text}>
          Verified: {userInfo?.email_verified ? "yes" : "no"}
        </Text>
        <Text style={styles.text}>Name: {userInfo?.name}</Text>
        {/* <Text style={styles.text}>{JSON.stringify(userInfo, null, 2)}</Text> */}
      </View>
      {/* )} */}
      <Button
        title="remove local store"
        onPress={async () => await AsyncStorage.removeItem("@user")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
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
