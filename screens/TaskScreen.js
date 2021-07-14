import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import TaskOne from '../database/TaskOne';

  
  const TaskScreen = ({navigation}) => {
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
                data={TaskOne}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.item}
                     onPress={() => navigation.navigate('AnswerOne', 
                     {
                         id: item.id,
                         
                         type: item.type,
                         title: item.title,
                         image: item.image,
                         answer: item.answer,
                         band: item.brand,
                         comment: item.comment,
                         
                    }     
                     )}
                    >
                        <Text style={styles.id}>
                            {item.id}
                        </Text>
                        <Text style={styles.type}>
                            {item.type}
                        </Text>
                    </TouchableOpacity>
                    
                )}
                /> 
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    id: {
      fontSize: 25,
      height: 60,
      marginLeft: 10,
      marginTop: 10,
      color: "#311b92"
  },
  type: {
      fontSize: 20,
      marginHorizontal: 10,
      marginTop: 10,
  },
  container: {
      marginBottom: '10%'
  },
  item: {
      flexDirection: "row",
      borderColor: 'silver',
      borderWidth: 1,
      marginHorizontal: 5,
      marginBottom: 0,
  },
  });



export default TaskScreen

