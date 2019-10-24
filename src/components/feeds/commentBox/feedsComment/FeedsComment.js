import React from "react"
import { Text, View } from "react-native"

const styles = {
    commentContainer: {
        flexDirection: 'row',
        marginLeft: 10
    },
    otherUserId : {
        fontWeight: 'bold'
    }
}

const FeedsComment = (props) => {
    return(
        <View style={styles.commentContainer}>
            <Text style={styles.otherUserId}>{props.otherUserId}</Text>
            <Text> {props.otherUserComment}</Text>
        </View>
    )
}

export default FeedsComment