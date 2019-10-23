import React from "react"
import { Text, View, Image } from "react-native"

const styles = {
    container: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    containerLeft: {
        flexDirection: 'row',
    },
    img: {
        width: 30,
        height: 30,
        marginRight: 5
    }
}

const IconBar = () => {
    return(
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <Image style={styles.img}
                    source={require('../../../images/heart_colored_icon.png')} 
                />
                <Image style={styles.img}
                    source={require('../../../images/comment_ballon_icon.png')} 
                />
                <Image style={styles.img}
                    source={require('../../../images/dm_icon.png')} 
                />
            </View>
            <Image style={styles.img}
                source={require('../../../images/bookmark_icon.png')}
            />
        </View>
    )
}

export default IconBar