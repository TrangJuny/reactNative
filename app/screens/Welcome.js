import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
const styles = StyleSheet.create({
    WelcomeLogo: {
       maxWidth: '60%',
       marginBottom: 40,
    //    marginTop: '',
       resizeMode: 'contain',
    },
    Title:{
        fontSize:35,
        fontWeight: '600',
        marginBottom: 25,
    },
    Detail:{
        fontSize:16,
        textAlign:'center',
        fontWeight: '600',

    }
});
class Welcome extends React.Component {

    render() {
      return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            paddingHorizontal: 30,
            alignItems: 'center',
            marginTop: 200
            // backgroundColor: 'powderblue'
          }}>
                <Image style={styles.WelcomeLogo} source={require('../assets/logo.png')} />
                <Text style={styles.Title}>Welcome</Text>
                <Text style={styles.Detail}>Work smarter, concentrate better, and stay productive throughout your day</Text>
        </View>
      );
    }
  }
export default Animatable.createAnimatableComponent(Welcome);