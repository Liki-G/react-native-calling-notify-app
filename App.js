import React, { useEffect } from 'react';
import { Alert, View, Text } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home() { return <View><Text>Home Screen</Text></View>; }
function Notification({ route }) {
  return <View><Text>Push: {route.params?.body}</Text></View>;
}

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    messaging().onMessage(async msg => {
      Alert.alert(msg.notification?.title, msg.notification?.body);
    });

    messaging().setBackgroundMessageHandler(async msg => {
      console.log('BG msg', msg);
    });

    messaging().getToken().then(token => console.log('FCM Token:', token));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
