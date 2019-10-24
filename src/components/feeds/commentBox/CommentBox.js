import React, {Component} from 'react'
import FeedsComment from './feedsComment/FeedsComment'
import FeedsCommentWriting from './feedsCommentWriting/FeedsCommentWriting'
import { View, FlatList } from 'react-native'

class CommentBox extends Component {
    constructor(props){
        super(props);
        this.state={
            data: props.DATA,
            opacity: 0.3,
            value: ''
        }
    }

    onChangeText = (e) => {
        this.setState({ value: e }),()=> {
            if(this.state.value){
                this.setState({
                    opacity: 1
                 })
            }
        }
    }

    onPress = () => {

        const newItem = [{
            id: Date.now().toString(),
            userId: 'dipsiiiiii',
            userComment: this.state.value
        }]

        if(this.state.value){
            this.setState({
                data: this.state.data.concat(newItem),
                value: '',
                opacity: 0.3
            })
        }

    }

    render(){
        return(
            <View>
                <FlatList 
                    data={this.state.data}
                    renderItem={({item}) => 
                        <FeedsComment 
                            otherUserId={item.userId}
                            otherUserComment={item.userComment}
                            />}
                    keyExtractor={item=> item.id}
                    />
                <FeedsCommentWriting 
                    data={this.state.data}
                    value={this.state.value}
                    opacity={this.state.opacity}
                    onChangeText={this.onChangeText}
                    onPress={this.onPress}
                /> 
            </View>
        )
    }
}

export default CommentBox