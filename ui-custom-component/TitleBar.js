import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  PixelRatio,
  Picker,
  Image,
  TouchableWithoutFeedback,
  ProgressBarAndroid,
} from 'react-native';

export default class TitleBar extends Component {
  _back(){
    alert("back");
  };

  _search(){
    alert("search");
  };

  render() {
    return (
      <View style={styles.container}>
          <TouchableWithoutFeedback
              onPress={() => this._back()}>
              <Image source={require('../img/back.png')} style={styles.backIcon}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
              onPress={() => this._back()}>
              <Image source={{uri:'http://a.hiphotos.baidu.com/image/pic/item/e7cd7b899e510fb3a78c787fdd33c895d0430c44.jpg'}} style={[styles.backIcon,styles.head]} />
          </TouchableWithoutFeedback>
          <View style={styles.title}>
            <Text style={styles.titleText} >StarTV</Text>
          </View>
          <TouchableWithoutFeedback
              onPress={() => this._search()}>
              <Image source={require('../img/search.png')} style={styles.searchIcon} />
          </TouchableWithoutFeedback>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:0,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor: '#F00',
    height : 50,
  },
  titleText: {
    fontSize: 20,
    textAlign: 'center',
    color:'#FFF',
    margin: 10,
  },
  backIcon: {
    marginLeft:10,
    width:30,
    height:30,
  },
  searchIcon: {
    marginRight:10,
    marginLeft:10,
    width:30,
    height:30,
  },
  head:{
    marginLeft:-5,
    borderColor:'#FFF',
    borderWidth:2,
    borderRadius:30,
    width:30,
    height:30,
  },
  title: {
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    height:45,
    marginLeft:10,
    marginRight:10,
    width:40,
    height:40,
  }
});
