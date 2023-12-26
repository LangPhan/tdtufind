import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './src/screens/loginSigup/login/Login';
import Signup_enterEmail from './src/screens/loginSigup/signup/Signup_enterEmail';
import Signup_enterVerifyCode from './src/screens/loginSigup/signup/Signup_enterVerifyCode';
import Signup_chooseUsername from './src/screens/loginSigup/signup/Signup_chooseUsername';
import Signup_choosePassword from './src/screens/loginSigup/signup/Signup_choosePassword';
import Signup_accountCreated from './src/screens/loginSigup/signup/Signup_accountCreated';
import Forgotpassword_accountRecovered from './src/screens/loginSigup/forgotpassword/Forgotpassword_accountRecovered';
import Forgotpassword_choosepassword from './src/screens/loginSigup/forgotpassword/Forgotpassword_choosepassword';
import Forgotpassword_enterEmail from './src/screens/loginSigup/forgotpassword/Forgotpassword_enterEmail';
import Forgotpassword_enterVerifyCode from './src/screens/loginSigup/forgotpassword/Forgotpassword_enterVerifyCode';
import Mainpage from './src/screens/mainpage/Mainpage';
import All_Chats from './src/screens/chatSections/All_Chats';
import SearchUserPage from './src/screens/mainpage/SearchUserPage';
import NotificationPage from './src/screens/mainpage/NotificationPage';
import My_UserProfile from './src/screens/profile/My_UserProfile';
import Setting from './src/screens/settings/Setting';

const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: true,
        animation:'slide_from_right'}}>


        <Stack.Screen name="Login" component={Login} 
          options={{
            animation: 'slide_from_right'
          }}/>
        <Stack.Screen name="Signup_enterEmail" component={Signup_enterEmail} />
        <Stack.Screen name="Signup_enterVerifyCode" component={Signup_enterVerifyCode} />
        <Stack.Screen name="Signup_chooseUsername" component={Signup_chooseUsername} />
        <Stack.Screen name="Signup_choosePassword" component={Signup_choosePassword} />
        <Stack.Screen name="Signup_accountCreated" component={Signup_accountCreated} />


        <Stack.Screen name="Forgotpassword_accountRecovered" component={Forgotpassword_accountRecovered} />
        <Stack.Screen name="Forgotpassword_choosepassword" component={Forgotpassword_choosepassword} />
        <Stack.Screen name="Forgotpassword_enterEmail" component={Forgotpassword_enterEmail} />
        <Stack.Screen name="Forgotpassword_enterVerifyCode" component={Forgotpassword_enterVerifyCode} />

        <Stack.Screen name="Mainpage" component={Mainpage} />

        <Stack.Screen name="All_Chats" component={All_Chats} 
          options={{
          animation:'slide_from_left'
        }}/>

        <Stack.Screen name="SearchUserPage" component={SearchUserPage} 
          options={{
          animation:'slide_from_bottom'
        }}/>

        <Stack.Screen name="NotificationPage" component={NotificationPage} />

        <Stack.Screen name="My_UserProfile" component={My_UserProfile} 
          options={{
          animation:'slide_from_left'
        }}/>

        <Stack.Screen name="Setting" component={Setting} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
