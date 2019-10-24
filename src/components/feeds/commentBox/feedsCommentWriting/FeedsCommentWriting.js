import React, {Component} from "react"
import { 
    View, 
    Image, 
    TextInput,
    TouchableOpacity,
    Text
} from "react-native"

const styles = {
    container: {
        flexDirection: 'row'
    },
    userCommentImg: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 5,
        flex: 1
    },
    inputBorder: {
        flex: 8,
        paddingLeft: 10
    },
    button: {
        flex: 1,
        backgroundColor: 'white'
    }
}


class FeedsCommentWriting extends Component{
    constructor(){
        super();
        this.state={
            opacity: 0.3
        }
    }

    handleColor = (e) => {
        console.log(e)
        let opacity = (this.props.value ? 1 : 0.3)
            this.setState({
                opacity
        })
    }

    render(){
        return(
        <View 
            style={styles.container}
            >
            <Image 
                style={styles.userCommentImg}
                source={{uri: "https://scontent-gmp1-1.cdninstagram.com/vp/b3cd613cf5c09867f20ecf2c8aed8c8c/5E640340/t51.2885-19/s150x150/25038945_530878020613923_1456719062737354752_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com"}} 
            />
            <TextInput 
                style={styles.inputBorder}
                placeholder="댓글 달기..."
                onChangeText={this.props.onChangeText}
                value={this.props.value}
                onChange={this.handleColor}
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={this.props.onPress}>   
                <Text
                    style={{opacity: this.state.opacity,
                    color: '#3897f0'}}
                    >게시
                </Text>
            </TouchableOpacity>
        </View>
    )
}}

export default FeedsCommentWriting