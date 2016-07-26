import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var styles = require('./style.js')

export default class VerticalListView extends Component {
  constructor(props) {
            super(props);
            this.state={
             dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
              loaded:false
            };
  }

  render() {


      if(!this.state.loaded){
        return this.renderLoadingView();
      }

      // var movie = this.state.movies[0];
      // return this.renderMovie(movie);

      return(
          <View style={styles.container_VerticalListView}>
              <ListView dataSource={this.state.dataSource} renderRow={this.renderMovie} style={styles.ListView}/>
          </View>
      );

  }

  componentDidMount(){
      this.dofetchData();
    }

    fetchData(){
        fetch(REQUEST_URL)
          .then((response) => response.json())
          .then((responseData)=>{
              this.setState({
                movies:responseData.movies,
              });
          }).done();
    }

    dofetchData(){
        fetch(REQUEST_URL)
          .then((response) => response.json())
          .then((responseData)=>{
              this.setState({
                dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
                loaded:true
              });
          }).done();


    }

    renderLoadingView(){
      return(
        <View style={styles.container_VerticalListView}>
          <Text>
            正在网络上获取电影数据......
          </Text>
        </View>
      );
    }

    renderMovie(movie){
      return (
        <View style={styles.containerItem_VerticalListView}>
            <Image source={{uri:movie.posters.thumbnail}}
                   style={styles.thumbnail}/>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>标题</Text>
              <Text style={styles.year}>{movie.year}年</Text>
            </View>
        </View>
      );
    }

}
