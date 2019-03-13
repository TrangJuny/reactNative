import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  Image,
  Switch,
 } from 'react-native';
import { Icon, Divider,Avatar } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]
export default class Profile extends React.Component {
  state = {isSwitchOn: false}
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'Profile',
      // headerLeft: (
      //   <Text style={styles.textBold}>
      //           
      //         </Text>
      // ),
      // headerRight: (
      //   <Text style={styles.textBold}>
        
      // </Text>
      // ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.containerFlexRow,styles.session, styles.shadow,styles.bgPrimary, styles.user]}>
            <Image  style={styles.Image} source={require('https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg')} />
            <View style={styles.paragraph}>
              <Text style={[styles.textBold ,styles.textWhite]}>
                Thanh Truong
              </Text>
              <Text style={[styles.des, styles.textWhite]}>
                ThanhTruong@BIgin.vn
              </Text>
            </View>
            <Icon
              name="chevron-right"
              color="white"
              size={24}
              style={[{ backgroundColor: 'transparent', marginLeft: 'auto',
              flex:1, }]}
            />
        </View>
        <View style={[styles.session,styles.shadow,styles.borderLight]}>
            <Text style={styles.title18}>
              Preferences
            </Text>
            <View style={[styles.containerFlexRow,styles.spaceBetween ,styles.paddingV5]}> 
                <Text>
                  Notifications
                </Text>
                <Switch 
                    onValueChange={isSwitchOn => this.setState({isSwitchOn})}
                    value={this.state.isSwitchOn} 
                    trackColor= {{true: '#29B6F6'}}
                />
            </View>
            <View style={[styles.containerFlexRow,styles.spaceBetween ,styles.paddingV5]}> 
                <Text>
                  Allow us access your cycle
                </Text>
                <Switch 
                    onValueChange={isSwitchOn => this.setState({isSwitchOn})}
                    value={true} 
                    trackColor= {{true: '#29B6F6'}}
                />
            </View>
        </View>
        <View style={[styles.session,styles.shadow,styles.borderLight]}>
            <Text style={styles.title18}>
              About
            </Text>
            <View> 
              <View style={[styles.containerFlexRow,styles.spaceBetween ,styles.paddingV10]}> 
                  <Text>
                    About us
                  </Text>
                  <Icon
                    name="chevron-right"
                    // color="white"
                    size={24}
                    style={[{ backgroundColor: 'transparent', marginLeft: 'auto',
                    flex:1, }]}
                  />
              </View>
              <View style={[styles.containerFlexRow,styles.spaceBetween ,styles.paddingV10]}> 
                  <Text>
                    FAQ
                  </Text>
                  <Icon
                    name="chevron-right"
                    // color="white"
                    size={24}
                    style={[{ backgroundColor: 'transparent', marginLeft: 'auto',
                    flex:1, }]}
                  />
              </View>
              <View style={[styles.containerFlexRow,styles.spaceBetween ,styles.paddingV10]}> 
                  <Text>
                  Privacy Policy
                  </Text>
                  <Icon
                    name="chevron-right"
                    // color="white"
                    size={24}
                    style={[{ backgroundColor: 'transparent', marginLeft: 'auto',
                    flex:1, }]}
                  />
              </View>
              <View style={[styles.containerFlexRow,styles.spaceBetween ,styles.paddingV10]}> 
                  <Text>
                    Contact
                  </Text>
                  <Icon
                    name="chevron-right"
                    // color="black"
                    size={24}
                    style={[{ backgroundColor: 'transparent', marginLeft: 'auto',
                    flex:1, }]}
                  />
              </View>
          

            </View></View>
        
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  shadow: {
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor:'white',    
  },
  borderLight:{
    borderColor:'#ddd',
    borderWidth:1,
  },
  session:{
    paddingVertical: 15,
    paddingHorizontal: 15,    
    marginBottom: 20,
  },  
  user:{
    marginBottom: 20,
  },
  containerFlexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    display:'flex',
    width:'100%',

    // flex:1,
  },
  spaceBetween:{
    justifyContent:"space-between",
  },
  paragraph: {
    marginLeft: 15,
    marginRight: 'auto',
    fontSize: 14,
    fontWeight: 'bold',
  },
  paddingV5:{
    paddingVertical: 10 ,
  },
  paddingV10:{
    paddingVertical: 12 ,
  },
  textBold:{
    fontWeight:'600',
  },
  title18:{
    fontSize:18,
    fontWeight:'600',
    marginBottom: 15,
  },
  textWhite:{
    color: '#ffff',
  },
  bgPrimary:{
    backgroundColor:'#25a0f5',
  },
  des:{
    fontSize:12,
    marginTop: 5,
  },
  Image: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    borderRadius:30,
    borderColor:'#ffff',
    borderWidth:2,
  }

});
