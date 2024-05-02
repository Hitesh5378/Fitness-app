import { StyleSheet, Text, View  ,Image, ScrollView,Pressable  } from 'react-native'
import React from 'react'
import {useContext} from "react";
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FitnessItems } from "../Context";
import { AntDesign } from '@expo/vector-icons';









const WorkoutScreen = () => {
     const route=useRoute();
    console.log(route.params)
    const navigation=useNavigation();

    const {
      completed,
      setCompleted,
    
    } = useContext(FitnessItems);

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"white" ,marginTop:40}}>
      <Image style={{width:'100%',height:170}} source={{uri:route.params.image}}/>
      <Ionicons
      onPress={()=>navigation.goBack()}
      style={{position:'absolute', top:30,left:20}}
      name="arrow-back" size={24} color="white" />

      {route.params.excersises.map((item,index)=>
      <Pressable style={{margin:10, flexDirection:"row" ,alignItems:"center"}} key={index}>
        <Image style={{width:90,height:90}} source={{uri:item.image}}/>
        <View style={{marginLeft:10}}>
          <Text style={{fontSize:17, fontWeight:'bold'}}>{item.name}</Text>
          <Text style={{marginTop:4,fontSize:18, color:'gray'}}>{item.sets}</Text>
        </View>
        {completed.includes(item.name) ? (
              <AntDesign style={{marginLeft:50}} name="checkcircle" size={24} color="green" />
            ) : (
              null
            )}

      </Pressable>
      )}
    </ScrollView>

    <Pressable
     onPress={()=>navigation.navigate('fit',{excersises:route.params.excersises})}
    style={{backgroundColor:'blue',padding:10, marginLeft:'auto',marginRight:'auto' ,marginVertical:20, borderRadius:6,width:120}}>
       <Text style={{textAlign:'center',color:'white',fontSize:15,fontWeight:'600'}}>START</Text>
    </Pressable>
    </>
  )
}

export default WorkoutScreen

const styles = StyleSheet.create({})