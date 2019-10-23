import React from "react"
import {View, Text, Image, StyleSheet} from "react-native"


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row'
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10
    },
    userId: {
        marginTop: 4
    }
})

const UserIdBox = (props) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: props.img}} style={styles.img}/>
            <Text style={styles.userId}>{props.userId}</Text>
        </View>
    )
}

export default UserIdBox