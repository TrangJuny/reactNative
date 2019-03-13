import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' ,
    flexDirection: 'row',
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
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const slides = [
  {
    key: 'somethun',
    // title: 'Title 1',
    text: 'After react-native link react-native-fluidic-slider, please verify node_modules/react-native-fluidic-slider/ios/ contains Pods folder. If does not exist please execute pod install command on node_modules/react-native-fluidic-slider/ios/, if any error => try pod repo update then pod installAfter react-native link react-native-fluidic-slider, please verify node_modules/react-native-fluidic-slider/ios/ contains Pods folder. If does not exist please execute pod install command on node_modules/react-native-fluidic-slider/ios/, if any error => try pod repo update then pod install',
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
    text: 'After react-native link react-native-fluidic-slider, please verify node_modules/react-native-fluidic-slider/ios/ contains Pods folder. If does not exist please execute pod install command on node_modules/react-native-fluidic-slider/ios/, if any error => try pod repo update then pod install',
    image: require('../assets/nemo_google_450.jpg'),
    imageStyle: styles.image,
    backgroundColor: 'pink',
  },
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
      text: 'After react-native link react-native-fluidic-slider, please verify node_modules/react-native-fluidic-slider/ios/ contains Pods folder. If does not exist please execute pod install command on node_modules/react-native-fluidic-slider/ios/, if any error => try pod repo update then pod install',
      image: require('../assets/nemo_google_450.jpg'),
      imageStyle: styles.image,
      backgroundColor: 'pink',
    }
  ];
export default class Home extends React.Component {
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="chevron-right"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="check"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="chevron-left"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  _onDone=()=>{
    this.props.navigation.navigate('Tabs')
  }

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        // showPrevButton={true}
        onDone={this._onDone}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderPrevButton={this._renderPrevButton}
        renderSkipButton={this._renderNextButton}
        // renderItem={this._renderItem}
        // bottomButton
      />
    );
  }
}