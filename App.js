
import React, { useState } from 'react';
import { StyleSheet, View,TextInput, Button,FlatList, Alert } from 'react-native';
import GoalItem from './Components/GoalItem';
import InputGoal from './Components/InputGoal';


export default function App() {
  const [goal,setGoal] = useState('')
  const [mainGoal,setMainGoal] = useState([]);
  const [visible,setVisible] = useState(false);

  const handletext= (e) => {
    setGoal(e);
  }
  const handleGoal = () => {
    setMainGoal(prev => [...prev,{key:Math.random().toString(),value:goal}]);
    setGoal('');
    setVisible(false);
  }

  const handleDelete = (k) => {
    setMainGoal(prev => {
      return prev.filter(goal => goal.key !== k)
    })
  }

  const newGoalHandler = () => {
    if(!visible){
      setVisible(true)
    }else {
      setVisible(false);
    }
  }

  const handleClose = () => {
    setVisible(false);
    // Alert.alert("New close Input is closed!")
  }


  return (
    <View style={styles.screen}>
      <View style={{width:120,alignSelf:'center',padding:10}}>
        <Button title="New Goal" onPress={newGoalHandler}/>
      </View>
        <InputGoal
            goal={goal}
            handletext={handletext}
            handleGoal={handleGoal}
            visible={visible}
            onClose={handleClose}
        />
       <View>
          {/* flat list is esstential because list could be long and it will be difficult to scroll down the list  */}
          <FlatList
            data={mainGoal}
            renderItem={(itemData) =><GoalItem delete={() =>handleDelete(itemData.item.key)} title={itemData.item.value}/>}
            keyExtractor={(item,index) => item.key}
          />
            {/* {
              mainGoal.map((data,index) => (
                <Text style={styles.text} key={index}>{data}</Text>
              ))
            } */}
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      paddingTop:40,
      paddingLeft:20,
      paddingRight:20
    },
 
});
