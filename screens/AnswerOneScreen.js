import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const AnswerScreen = ({route, navigation}) => {
    const { id, type, title, image, answer, band, comment } = route.params;

    return (
        <View>
            <Text>{id}</Text>
            <Text>{type}</Text>
            <Text>{title}</Text>
            <Image
                style={styles.image}
                source={image}
                />
            <Text>{answer}</Text>
            <Text>{band}</Text>
            <Text>{comment}</Text>
        </View>
    )
}

export default AnswerScreen

const styles = StyleSheet.create({
    image: {
        width: "90%",
        height: "50%",
    }
})
