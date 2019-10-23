import React from "react"
import { Text, Image, StyleSheet, View} from "react-native"

const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginRight : 10
    },
    img : {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
})

const UserStory = (props) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: props.uri}} style={styles.img} />
            <Text>{props.userId}</Text>
        </View>
    )
}

export default UserStory