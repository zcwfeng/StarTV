
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

export default class SlideContentHeader extends Component {
  _setting(){
    alert("_setting");
  };



  render() {
    return (
      <View style={styles.container}>
          <View style={styles.containerInner}>
             <Image source={{uri:'http://a.hiphotos.baidu.com/image/pic/item/e7cd7b899e510fb3a78c787fdd33c895d0430c44.jpg'}} style={[styles.backIcon,styles.head]} />

              <Text style={styles.titleText}>zcw</Text>
          </View>
          <TouchableWithoutFeedback
              onPress={() => this._setting()}>
              <Image source={require('../img/setting.png')} style={styles.settingIcon}/>
          </TouchableWithoutFeedback>


      </View>



    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor: '#F00',
    height : 100,

  },
  containerInner: {
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    height: 100,
  },
  titleText: {
    fontSize: 20,
    textAlign: 'center',
    color:'#FFF',

  },
  settingIcon: {
    width:30,
    height:30,
    position:'absolute',
    left:210,
    top:10,
  },

  head:{

    borderColor:'#FFF',
    borderWidth:2,
    borderRadius:30,
    width:50,
    height:50,
  },

});
