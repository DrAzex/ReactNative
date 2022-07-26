import React from 'react';
import { Text, View, TouchableWithoutFeedback,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
            <View>
                <Text style={{fontSize:'20px',borderBottomWidth:'1px'}}>Postet By Gev</Text>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <Image source={{
                    uri: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
                    width: '100%',
                    height: '100%',
                }} />
                <View>
                    <Text>Likes 14</Text>
                    <Text>Comment 21</Text>
                </View>
                <View >
                    <AntDesign name="like2" size={24} color="black" />
                    <Text>Show comments</Text> 
                    <View>
                        <View>
                            <Text>Vazgenchik</Text>
                            <Text>er took a galley of type and scrambled it to make a type specimen book. It has survived not onl</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
      </View>
    );
}

