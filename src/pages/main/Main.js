import React from 'react';
import Nav from '../../components/nav/Nav'
import Feeds from '../../components/feeds/Feeds'
import { StyleSheet, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import StoryBox from '../../components/storyBox/StoryBox';


const Main = () => {
    return (
      <View>
        <Nav />
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView>
            <StoryBox />
            <Feeds />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
    
export default Main