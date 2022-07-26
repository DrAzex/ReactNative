import React, {useContext} from "react";
import {Button, Text, View} from 'react-native';
import {Context} from "../../App";
import {useAuthState} from "react-firebase-hooks/auth";

export default function Messenger() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Messenger!</Text>
          <Text>Your name is {user.displayName}</Text>
          <Button title='Sing out' onPress={()=>console.log(auth.signOut())}/>
      </View>
    );
  }


