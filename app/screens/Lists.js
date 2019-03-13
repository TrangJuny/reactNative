import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  Image,
  Switch,
  Badge,
  FlatList
 } from 'react-native';
import { Icon, Divider,Avatar,ListItem, List } from 'react-native-elements';

import {createStackNavigator} from 'react-navigation';
class ListsComponent extends React.Component {

    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
    
      return {
        headerTitle: 'Notification',      
        headerRight: (
          <View>
            <Icon
                name= "notifications-none"
                // color="#25a0f5"
                size={24}
                containerStyle={[{ backgroundColor: 'transparent', paddingRight: 20, }]}
                />          

          </View>
        ),
      };
    };
    renderRow ({ item }) {
      return (
        <ListItem
          roundAvatar
          title={item.name}
          subtitle={item.subtitle}
          avatar={{uri:item.avatar_url}}
          containerStyle={{borderBottomColor: '#ddd', borderBottomWidth: 1,}}
        />
      )
    }
    
    render() {
      return (
        <View style={styles.container}>
         {/* <List> */}
          <FlatList
            data={list}
            renderItem={this.renderRow}
            keyExtractor={item => item.name}
          />
        {/* </List> */}
            <Text>
                Privacy Policy
            </Text>
            {/* <List> */}
              {
                list.map((item) => (
                  <ListItem
                  roundAvatar
                  title={item.name}
                  subtitle={item.subtitle}
                  avatar={{uri:item.avatar_url}}
                />
                ))
              }
            {/* </List> */}
        </View>
      );
    }
  }
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
    // ... // more items
  ]
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

const Lists = createStackNavigator(
  {
      Lists: ListsComponent, 
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
        borderWidth:0
      },
      // headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)
export default Lists;