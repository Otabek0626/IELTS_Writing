import React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'

const StyledButton = (props) => {

    const { content, image, onPress } = props;
  
    
  
    return (
      <View style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={() => onPress()}
          >
          <Image
            style={styles.logo}
            source={{
                uri: image,
            }}
            /> 
          <Text style={styles.text}>{content}</Text>
        </Pressable>
      </View>
    );
  };

export default StyledButton

const styles = StyleSheet.create({
    container: {
        width: '40%',
        height: "100%",
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
      },
      button: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: "40%",
        height: "50%",
        borderRadius: 50,
      },
      text: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: '700',
      }
})
