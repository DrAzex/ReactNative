import react from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export const Register = ({title}) => {
    
    return(
        <View style = {styles.components}>
            <TextInput placeholder ='Email' style = {styles.block}></TextInput>
            <View style = {styles.view}></View>
            <TextInput placeholder ='Password' style = {styles.block}></TextInput>

            <Button style = {styles.button}onPress={()=>alert('Barev')}
                    title="Sign Up"/>
        </View>
    )

}
const styles = StyleSheet.create({
        block: {
            fontSize: 20,
            width:300,
            height:50,
            backgroundColor: 'white',
            borderRadius:10,
            alignItems:"center",
            justifyContent:"center",
            padding:10,
        },
        components: {
            flex: 1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor: '#e3e8e4',
            alignItems:"center",
            justifyContent:"center",
        },
        view: {
            margin:6,
        },
        button: {
            width:300,
            height:50,
            backgroundColor: "blue"
        }
    })
