import React, {Component} from "react"
import {View, FlatList } from "react-native"
import UserStory from "./userStory/UserStory"
import storyData from './storyData'

const styles = {
    container : {
        height: 90,
        backgroundColor: 'white',
        width: "100%",
        marginTop: 80,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
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
                    style={styles.flatList}
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