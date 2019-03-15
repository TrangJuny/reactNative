import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  ScrollView,
  TouchableHighlight
 } from 'react-native';
 
import { Divider,Avatar,ListItem, List,
  Input,Icon } from 'react-native-elements';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {createStackNavigator} from 'react-navigation';
class ListsComponent extends React.Component {

  state = {
    listItems:list
  };

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
  
    return {
      headerTitle: 'Notification',      
      headerRight: (
        <View>
          <Icon
              name= "notifications-none"
              color="#fff"
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
          containerStyle={{borderBottomColor: '#ddd', borderBottomWidth:1 ,}}
        />
      )
    }

  _delete(index) {
    let listD = this.state.listItems;
    listD.splice(index,1);
    this.setState({
      listItems: listD,
    });
  }
    _renderRight(index) {
      return (
        
          <View style={[styles.flexRow,styles.spaceBetween] }>          
            <Icon
              name= {'create'}
              color="#999"
              size={18}
              style={{ backgroundColor: '#fff' }}
            />
             
            <TouchableHighlight  onPress={()=>{this._delete(index)}} underlayColor="white">
                <Icon
                  name= {'delete'}
                  color="#999"
                  size={18}
                  containerStyle={{ marginLeft: 10,}}
                />  
            </TouchableHighlight>     
          </View>
      );
    }

    _renderSubTitle(icon, text) {
      return (
        
          <View style={[styles.flexRow,{marginTop: 5,}]}>
           
            <Icon
              name= {icon}
              size={18}
              iconStyle={styles.link}
              containerStyle={[{ marginRight: 5},styles.link]}
            />    
            <Text style={styles.link}>{text}</Text>     
          </View>
      );
    }
    render() {
      return (
        <View style={styles.container}>
            <View style={{display:'flex',
              alignItems: 'center',
             justifyContent:'center', flexDirection:'row',
              backgroundColor: '#448aff', marginBottom:30, paddingBottom:10,borderBottomRightRadius:50,    borderBottomLeftRadius :50,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: .5,
              shadowRadius: 10,   }}>
                  <Input
                    placeholder='Search'
                    leftIcon={{ type: 'font-awesome', name: 'search',color:'#448aff', size:16 }}
                    leftIconContainerStyle={{marginRight:10,}}
                    inputContainerStyle={{borderBottomWidth:0}} 
                    containerStyle={{borderRadius:20,borderWidth:1, borderColor:'#ddd', marginVertical:10,
                    marginRight: 10, width:'80%',backgroundColor: '#fff',}}
                    />
                    <FontAwesome
                      name= 'sort-alpha-asc'
                      size={24}
                      color="#fff"
                    />    
            </View>

            
        <ScrollView>
              {
                this.state.listItems.map((item,index) => (
                  <ListItem
                  key={item}
                  leftAvatar={{ source: { uri: item.avatar_url } }}
                  title={item.name}
                  subtitle={this._renderSubTitle('payment',item.subtitle)}
                  rightElement={this._renderRight(index)}
                  containerStyle={[{borderTopWidth:1,borderTopColor:'#ddd'},
                  (index === list.length - 1) ? {borderBottomWidth:1,borderBottomColor:'#ddd'} : {},
                ]}
                />
                ))
              }

        </ScrollView>
        </View>
      );
    }
  }
  const list = [
    {
      name: 'Amy Farhad21',
      avatar_url: '../assets/user.png',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jacksoné855',
      avatar_url: '../assets/user.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Chris Jackson',
      avatar_url: '../assets/user.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Chris Jackson',
      avatar_url: '../assets/user.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Chris Jackson',
      avatar_url: '../assets/user.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Chris Jackson',
      avatar_url: '../assets/user.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Chris Jackson',
      avatar_url: '../assets/user.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Chris Jackson',
      avatar_url: '../assets/user.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Chris Jackson',
      avatar_url: '../assets/user.png',
      subtitle: 'Vice Chairman'
    },
    // ... // more items
  ]
const styles = StyleSheet.create({

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

const Lists = createStackNavigator(
  {
      Lists: ListsComponent, 
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
export default Lists;