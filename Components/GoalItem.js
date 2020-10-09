import React from 'react';
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
return(
    <TouchableOpacity activeOpacity={0.8} onPress={props.delete}>
        <View style={styles.view}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight:'500',
        height:40,
        textTransform:'lowercase',
        textAlign:'center',
        color:'white',
        paddingTop:8
      },
      view: {
        backgroundColor:'black',
        height:40,
        marginVertical:10,
        borderRadius: 6
      }
})

export default GoalItem;