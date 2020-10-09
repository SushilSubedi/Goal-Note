import React from 'react';
import { StyleSheet, TextInput, View,Button,Modal } from 'react-native';


const InputGoal = (props) => {
    return (
      <Modal
        animationType={"fade"}
        visible={props.visible}
        onRequestClose={props.onClose}
      >
        <View style={styles.InputContainer}>
          <TextInput
          style={styles.TextInput}
          value={props.goal}
          onChangeText={props.handletext}
          placeholder="Type your goal"
          />
          <View style={{flexDirection:'row',justifyContent:'space-between',width:160}}>
            <Button title="  Add  " color="purple" onPress={props.handleGoal}/>  
            <Button title="cancel" color="red" onPress={props.onClose}/>         
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    InputContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      TextInput: {
        width:240,
        height:40,
        borderRadius:4,
        paddingLeft:7,
        borderWidth:1,
        marginBottom:20
      },
})

export default InputGoal;