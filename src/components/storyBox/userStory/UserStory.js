import React from "react"
import { Text, Image, StyleSheet, View} from "react-native"

const styles = StyleSheet.create({
    img : {
        width: 55,
        height: 55,
        borderRadius: 55/2
    }
})

const UserStory = (props) => {
    return(
        <View>
            <Image source={{uri: props.uri}} style={styles.img} />
            <Text>{props.userId}</Text>
        </View>
    )
}

export default UserStory