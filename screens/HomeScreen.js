import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import MenuButton from './MenuButton'


const HomeScreen = ({navigation}) => {
    return (
      
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.top}>
          <Text style={styles.text}>Welcome to IELTS Writing 2021</Text>
        </View>
        <View style={styles.vertical}>
        <MenuButton style={styles.button}
          content="Essay Samples"
          text="Writing Task 1 of the Academic and General part"
          image={require("./APPLICATION/essay.png")}
          onPress={() => navigation.navigate("TaskOne", {
            content: "Task 1",
          })}
        />
        <MenuButton style={styles.button}
          content="Essay Samples"
          text="Writing Task 2 of the Academic and General part"
          image={require("./APPLICATION/essay.png")}
          onPress={() => navigation.navigate("TaskOne", {
            content: "Task 1",
            
          })}
        />
        </View>

        <View style={styles.vertical}>
        <MenuButton style={styles.button}
          content="Writing Vocabulary"
          text="IELTS vocabulary of Academic and General part"
          image={require("./APPLICATION/vocab.png")}
          onPress={() => navigation.navigate("TaskOne", {
            content: "Task 1",
          })}
        />
        <MenuButton style={styles.button}
          content="Grammar for IELTS"
          text="Essential grammar explanations and excercises"
          image={require("./APPLICATION/grammar.png")}
          onPress={() => navigation.navigate("TaskOne", {
            content: "Task 1",
          })}
        />
        </View>
        <View style={styles.vertical}>
        <MenuButton style={styles.button}
          content="Practice Test"
          text="Spend some time to develop your writing skills"
          image={require("./APPLICATION/practice.png")}
          onPress={() => navigation.navigate("TaskOne", {
            content: "Task 1",
          })}
        />
        <MenuButton style={styles.button}
          content="Band Calculator"
          text="Let's Calculate your IELTS test score"
          image={require("./APPLICATION/calc.png")}
          onPress={() => navigation.navigate("TaskOne", {
            content: "Task 1",
          })}
        />
        </View>
        <View style={styles.vertical}>
        <MenuButton style={styles.button}
          content="Other Apps"
          text="Find other usufull apps"
          image={require("./APPLICATION/others.png")}
          onPress={() => navigation.navigate("TaskOne", {
            content: "Task 1",
          })}
        />
        <MenuButton style={styles.button}
          content="Rate Us"
          text="Rate us on Google Play"
          image={require("./APPLICATION/rate.png")}
          onPress={() => navigation.navigate("TaskOne", {
            content: "Task 1",
          })}
        />
        </View>
        </ScrollView>
        <View style={styles.ads}>

        </View>
      </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',

  },
  top: {
    width: "80%",
    marginLeft: "10%",
    height: 100,
    backgroundColor: '#2E4557',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    justifyContent: 'center',
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  vertical: {
    height: Dimensions.get('window').width/100*40,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,

  },
  ads: {
    width: "100%",
    height: 60,
    backgroundColor: '#2E4557',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: "white",
  }
})
