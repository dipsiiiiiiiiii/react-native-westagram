import React from "react"
import { Text, View, FlatList } from "react-native"

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
        <View>
            <FlatList
                data={props.data}
                renderItem={({item}) =>
                <View style={styles.commentContainer}>
                    <Text style={styles.otherUserId}>{item.userId}</Text>
                    <Text> {item.userComment}</Text>
                </View>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default FeedsComment