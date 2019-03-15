import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  ScrollView,
  Picker,
  TextInput,
 } from 'react-native';
 
import { Divider,Avatar,ListItem, List,
  Input,Icon } from 'react-native-elements';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import { Dropdown } from 'react-native-material-dropdown';
  import { TextField } from 'react-native-material-textfield';
  import {createStackNavigator} from 'react-navigation';
  import TextControl from '../component/input'
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

            <Text>Title</Text>
            <TextInput
              style={{minHeight:100,borderRadius:4,borderColor: '#ddd',borderWidth:1 }}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              multiline = {true}
              numberOfLines = {4}
            />

             <TextInput
              style={{minHeight:100,borderRadius:4,borderColor: '#ddd',borderWidth:1 }}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              multiline = {true}
              numberOfLines = {4}
            />
         
            <Dropdown
              label='Type'
              data={data}
            />
            <TextControl></TextControl>
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