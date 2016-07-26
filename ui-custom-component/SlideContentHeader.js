
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

var styles = require('./style.js')

export default class SlideContentHeader extends Component {
  _setting(){
    alert("_setting");
  };

  render() {
    return (
      <View style={styles.containerSlideContentHeader}>
          <View style={styles.containerInnercontainerSlideContentHeader}>
             <Image source={{uri:'http://a.hiphotos.baidu.com/image/pic/item/e7cd7b899e510fb3a78c787fdd33c895d0430c44.jpg'}} style={[styles.headSlideContentHeader]} />
              <Text style={styles.titleTextSlideContentHeader}>zcw</Text>
          </View>
          <TouchableWithoutFeedback
              onPress={() => this._setting()}>
              <Image source={require('../img/setting.png')} style={styles.settingIconSlideContentHeader}/>
          </TouchableWithoutFeedback>
      </View>
    );
  }
}
