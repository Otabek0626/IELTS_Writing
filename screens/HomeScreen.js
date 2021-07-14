import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import StyledButton from './StyledButton';
import MenuButton from './MenuButton'


const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.vertical}>
        <MenuButton style={styles.button}
          content="Task 1"
          image="https://reactnative.dev/img/tiny_logo.png"
          onPress={() => navigation.navigate("TaskOne", {
            content: "Task 1",
          })}
        />
        <MenuButton style={styles.button}
          content="Task 1"
          image="https://reactnative.dev/img/tiny_logo.png"
          onPress={() => navigation.navigate("TaskOne", {
            content: "Task 1",
          })}
        />
        </View>

        <View style={styles.vertical}>
        <MenuButton style={styles.button}
          content="Task 1"
          image="https://reactnative.dev/img/tiny_logo.png"
          onPress={() => navigation.navigate("TaskOne", {
            content: "Task 1",
          })}
        />
        <MenuButton style={styles.button}
          content="Task 1"
          image="https://reactnative.dev/img/tiny_logo.png"
          onPress={() => navigation.navigate("TaskOne", {
            content: "Task 1",
          })}
        />
        </View>
      </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: 'flex',
  },
  vertical: {
    height: "20%",
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
})
