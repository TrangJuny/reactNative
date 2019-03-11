import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});

const slides = [
    {
      key: 'somethun',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('../assets/nemo_google_450.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#59b2ab',
    },
    {
      key: 'somethun-dos',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../assets/nemo_google_450.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('../assets/nemo_google_450.jpg'),
      imageStyle: styles.image,
      backgroundColor: 'red',
    }
  ];
export default class Home extends React.Component {
  _renderItem = props => (
    // <LinearGradient
    //   style={[styles.mainContent, {
    //     paddingTop: props.topSpacer,
    //     paddingBottom: props.bottomSpacer,
    //     width: props.width,
    //     height: props.height,
    //   }]}
    //   colors={props.colors}
    //   start={{x: 0, y: .1}} end={{x: .1, y: 1}}
    // >
      
      <View style={{ backgroundColor: '#000', width:'100%' }}>
        <Text>helloo</Text>
        <FontAwesome5 style={{ backgroundColor: 'transparent' }} name={props.icon} size={100} color="white" />
        {/* <Text style={styles.title}>{props.title}</Text> */}
        {/* <Text style={styles.text}>{props.text}</Text> */}
      </View>
    // </LinearGradient>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        // renderItem={this._renderItem}
        // bottomButton
      />
    );
  }
}