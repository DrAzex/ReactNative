import React, {useContext} from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import {useCollection} from "react-firebase-hooks/firestore";
import {Context} from "../../App";

import PostEdit from "../PostEdit/PostEdit";
import Loader from "../Loader/Loader";
import Comments from '../Comments/Comments'
import {useAuthState} from "react-firebase-hooks/auth";

export default function HomeScreen() {
    const {firestore, auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages,loading] = useCollection(
        firestore.collection('posts').orderBy('createAt')
    )
    const Liking = (m)=>{
        if(!m.data().likeSendUsersId.includes(user.uid)){
            firestore.doc(m.ref.path).update({'likeCount':m.data().likeCount+1})
            firestore.doc(m.ref.path).update({'likeSendUsersId':[...m.data().likeSendUsersId,user.uid]})
        }
        else{
            firestore.doc(m.ref.path).update({'likeCount':m.data().likeCount-1})
            let a =m.data().likeSendUsersId;
            a.pop(a.indexOf(user.uid))
            firestore.doc(m.ref.path).update({'likeSendUsersId':[...a]})
        }
    }
    if(loading){
        return <Loader />
    }
    return (
        <ScrollView >
            <PostEdit />
                {
                    messages.docs.map(message =>
                    <View style={{borderSize:"30px",margin:20}} key = {message.id}>

                        <View>
                            <Image source={{
                                    uri: message.data().photoURL,
                                    width: 60,
                                    height: 60,
                                    resizeMode:"contain"
                            }} />
                            <Text>{message.data().displayName}</Text>
                        </View>
                        <View>
                            <Text>{message.data().text}</Text>
                            {(message.data().img)? <Image source={{
                                uri: message.data().img,
                                width: 350,
                                height: 350,
                                defaultSource : 'http://www.dermalina.com/wp-content/uploads/2020/12/no-image.jpg',
                                resizeMode:"contain"
                            }} /> : <></>}
                        </View>
                        <View>
                            <View>
                                <Text>Likes {message.data().likeCount}</Text>
                                <Text>Comment {message.data().commentCount}</Text>
                            </View>
                            <View >
                                <TouchableOpacity onPress={()=> Liking(message)} ><AntDesign  name={(message.data().likeSendUsersId.includes(user.uid))?'like1': 'like2'} size={24} color="black" /></TouchableOpacity>
                                <Comments message ={message} />

                            </View>
                        </View>
                    </View>
                )}
        </ScrollView>
    );
}

