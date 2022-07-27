import React, {useContext} from "react";
import {Button, Text, View,Image} from 'react-native';

import {Context} from "../../App";
import {useAuthState} from "react-firebase-hooks/auth";

export default function Messenger() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Messenger!</Text>
          <Text>Your name is {user.displayName}</Text>
          <Image source={{
          uri: user.photoURL,
          width: 100,
          height: 100,
          defaultSource : 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
      }} />
          <Button title='Sing out' onPress={()=>console.log(auth.signOut())}/>
      </View>
    );
  }


