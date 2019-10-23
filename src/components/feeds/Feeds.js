import React, {Component} from "react"
import { View, Image, Text, StyleSheet, FlatList, TextInput} from "react-native"
import UserIdBox from './userIdBox/UserIdBox'
import feedsData from './feedsData'
import IconBar from "./iconBar/IconBar"
import FeedsComment from "./feedsComment/FeedsComment"
import FeedsCommentWriting from "./feedsCommentWriting/FeedsCommentWriting"

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    feedsImg: {
        width: "100%",
        height: 400
    },
    likeCount: {
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10
    },
    userComment: {
        marginLeft: 5
    },
    userContainer: {
        flexDirection: 'row'
    }
})

class Feeds extends Component {
    constructor(){
        super()
        this.state={
            data: feedsData
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => 
                        <View>
                            <UserIdBox
                                img={item.userImg}
                                userId={item.userId}
                            />
                            <Image 
                                style={styles.feedsImg}
                                source={{uri: item.feedImg }}
                            />
                            <IconBar />
                            <Text style={styles.likeCount}>좋아요 {item.likesCount}개</Text>
                            <View style={styles.userContainer}>
                                <Text style={styles.likeCount}>{item.userId}</Text>
                                <Text style={styles.userComment}>{item.userComment}</Text>
                            </View>
                            <FeedsComment data={item.comment}/>
                            <FeedsCommentWriting />
                        </View>}
                    keyExtractor = {item => item.id}
                />

            </View>
        )
    }
}

export default Feeds