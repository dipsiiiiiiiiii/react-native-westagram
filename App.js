import React from 'react';
import Nav from './src/components/nav/Nav'
import Feeds from './src/components/feeds/Feeds'
import { StyleSheet, View, ScrollView} from 'react-native';
import StoryBox from './src/components/storyBox/StoryBox';

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <ScrollView>
        <StoryBox />
        <Feeds />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }, image: {
    width: 50,
    height: 50,
    borderRadius: 50/2,

  }
});

let pic = {
  uri: "https://scontent-gmp1-1.cdninstagram.com/vp/6cd9a97ecdb3b885e7d9faa65d85c836/5E2794A6/t51.2885-19/s320x320/70612494_1272091566296124_7078356886948413440_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com"
}
