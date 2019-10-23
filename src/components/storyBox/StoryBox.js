import React, {Component} from "react"
import {View, FlatList } from "react-native"
import UserStory from "./userStory/UserStory"
import storyData from './storyData'

const styles = {
    container : {
        height: 80,
        backgroundColor: 'red',
        width: "100%",
        marginTop: 75,
        flexDirection: 'row'
    }
}


class StoryBox extends Component {
    constructor(){
        super()
        this.state={
            data : storyData
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
                    renderItem={({item}) => <UserStory userId={item.userId} uri={item.uri} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

export default StoryBox