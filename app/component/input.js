import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default class TextControl extends React.Component {

  render() {
    return (
      <View style={[{minHeight:100}, styles.formGroup]}>
          <Text style={[ styles.controlLabel]}>Title</Text>
            <TextInput
              style={[styles.formControl]}
              // onChangeText={this.props.event()}
              value={this.props.value}
              multiline = {this.props.multiline|true}
              numberOfLines = {this.props.numberOfLines|3}
            />

      </View>
    );
  }
}
const styles = StyleSheet.create({
    formGroup:{
    },
    controlLabel:{
        marginBottom: 5,
    },
    formControl:{
        borderRadius:4,
        borderColor: '#ddd',
        borderWidth:1 ,
        paddingHorizontal:10,
        paddingTop: 10,
        paddingBottom: 8,
        // minHeight:40,
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