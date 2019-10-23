import React from "react";
import {View, StyleSheet, Image} from "react-native";

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        zIndex: 1
    },
    navTop : {
        width: '100%',
        flex: 3,
        backgroundColor: '#e6e6e6',
    },
    navBar : { 
        width: '100%',
        flex: 4,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navLeft : {
        flexDirection: 'row'
    },
    cameraImg : {
        height: 35,
        width: 35,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5
    },
    logoImg : {
        height: 30,
        width: 100,
        marginTop: 8

    },
    navRight: {
        flexDirection: 'row'
    },
    tvImg : {
        height: 40,
        width: 40
    },
    dmImg : {
        height: 40,
        width: 40,
        marginTop: 3
    }
})


const Nav = () => {
    return(
        <View style={styles.container}>
            <View style={styles.navTop} />
            <View style={styles.navBar}>
                <View style={styles.navLeft}>
                    <Image source={require('../../images/camera_icon.jpg')} style={styles.cameraImg}/>
                    <Image source={require('../../images/logo_image.png')} style={styles.logoImg} />
                </View>
                <View style={styles.navRight}>
                    <Image source={require('../../images/tv_icon.png')} style={styles.tvImg} />
                    <Image source={require('../../images/dm_icon.png')} style={styles.dmImg} />
                </View>
            </View>
        </View>
    )
}

export default Nav