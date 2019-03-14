import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  ScrollView,
  Picker
 } from 'react-native';
 
import { Divider,Avatar,ListItem, List,
  Input,Icon } from 'react-native-elements';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import { Dropdown } from 'react-native-material-dropdown';
  import { TextField } from 'react-native-material-textfield';
  import {createStackNavigator} from 'react-navigation';
class ExploreComponent extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
  
    return {
      headerTitle: 'Add Notification',      
      headerRight: (
        <View>
          {/* <Icon
              name= "notifications-none"
              color="#fff"
              size={24}
              containerStyle={[{ backgroundColor: 'transparent', paddingRight: 20, }]}
              />           */}

        </View>
      ),
    };
  };
  state = {
    language: 'java',
    phone: '',
}
    render() {
      let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];

      let { phone } = this.state;

      return (
        <View style={[styles.container, styles.containerAdd]}>

          {/* <Input
              placeholder='Title'
              leftIconContainerStyle={{marginRight:10,}}
              inputContainerStyle={{borderBottomWidth:1, borderColor:'#ddd'}} 
              containerStyle={{borderRadius:20, borderColor:'#ddd',
              width:'100%',backgroundColor: '#fff',}}
              />   */}
              {/* <TextField
                label='Title'
                value={phone}
                multiline={true}
                // inputContainerStyle={{minHeight:90}}
                onChangeText={ (phone) => this.setState({ phone }) }
              /> */}
            <TextField
                label='Pop-up Notification'
                value={phone}
                multiline={true}
                inputContainerStyle={{borderWidth:1, borderColor: '#ddd'}}
                containerStyle={{borderWidth:1, borderColor: '#ddd'}}
                onChangeText={ (phone) => this.setState({ phone }) }
              />
            <Dropdown
              label='Type'
              data={data}
            />
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    containerAdd:{
      paddingHorizontal: 20,
    },
    flexRow: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    container:{
      flex:1,
    },
    link:{color:'#005ecb'},
  
    containerFlexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      display:'flex',
      width:'100%',
    },
    spaceBetween:{
      justifyContent:"space-between",
    },
  
  });

const Explore = createStackNavigator(
  {
    Explore: ExploreComponent, 
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#448aff',
        borderWidth:0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
export default Explore;