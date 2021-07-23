import React from 'react'
import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'

const StyledButton = (props) => {

    const { content, image, text, onPress } = props;
  
    
  
    return (
      <View style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={() => onPress()}
          >
          <Text style={styles.text}>{content}</Text>
          <Image
            style={styles.logo}
            source={image}
            /> 
          <Text style={[styles.text, {fontSize: 12, textAlign: "center"}]}>{text}</Text>
        </Pressable>
      </View>
    );
  };

export default StyledButton

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width/100*45,
        height: "100%",
        margin: 5,
        backgroundColor: '#2E4557',
        borderRadius: 10,
      },
      button: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: "30%",
        height: "33%",
        margin: "5%",
      },
      text: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: '700',
        color: "white",
      }
})
