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

var styles = require('./style.js')

export default class TitleBar extends Component {
  _back(){
    alert("back");
  };

  _search(){
    alert("search");
  };

  render() {
    return (
      <View style={styles.containerTitleBar}>
          <TouchableWithoutFeedback
              onPress={() => this._back()}>
              <Image source={require('../img/back.png')} style={styles.backIcon}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
              onPress={() => this._back()}>
              <Image source={{uri:'http://a.hiphotos.baidu.com/image/pic/item/e7cd7b899e510fb3a78c787fdd33c895d0430c44.jpg'}} style={[styles.backIcon,styles.head]} />
          </TouchableWithoutFeedback>
          <View style={styles.titleTitleBar}>
            <Text style={styles.titleTextTitleBar} >StarTV</Text>
          </View>
          <TouchableWithoutFeedback
              onPress={() => this._search()}>
              <Image source={require('../img/search.png')} style={styles.searchIcon} />
          </TouchableWithoutFeedback>


      </View>
    );
  }
}
