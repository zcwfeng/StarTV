// style.js
module.exports = require('react-native').StyleSheet.create({
    //TitleBar
    containerTitleBar: {
      flex:0,
      alignItems:'center',
      flexDirection:'row',
      backgroundColor: '#F00',
      height : 50,
    },
    titleTextTitleBar: {
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
    titleTitleBar: {
      justifyContent:"center",
      alignItems:"center",
      flex:1,
      height:45,
      marginLeft:10,
      marginRight:10,
      width:40,
      height:40,
    },

    //SlideContentHeader
    containerSlideContentHeader: {
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      backgroundColor: '#F00',
      height : 100,

    },
    containerInnercontainerSlideContentHeader: {
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      height: 100,
    },
    titleTextSlideContentHeader: {
      fontSize: 20,
      textAlign: 'center',
      color:'#FFF',

    },
    settingIconSlideContentHeader: {
      width:30,
      height:30,
      position:'absolute',
      left:210,
      top:10,
    },

    headSlideContentHeader:{

      borderColor:'#FFF',
      borderWidth:2,
      borderRadius:30,
      width:50,
      height:50,
    },

    //VerticalListView
    containerItem_VerticalListView:{
      flex:1,
    },
    container_VerticalListView: {
      flex:0,
      alignItems:'center',
      flexDirection:'row',
      
    },
    rightContainer:{
      alignItems:'center'
    },
    buttons: {
      flexDirection: 'row',
      height: 30,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    button: {
      flex: 1,
      width: 0,
      margin: 5,
      borderColor: 'gray',
      borderWidth: 1,
      backgroundColor: 'gray',
    },
    buttonDisabled: {
      backgroundColor: 'black',
      opacity: 0.5,
    },
    buttonText: {
      color: 'white',
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    image: {
      width: 300,
      height: 200,
      padding: 20,
    },
    likeButton: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderColor: '#333333',
      borderWidth: 1,
      borderRadius: 5,
      flex: 1,
      margin: 8,
      padding: 8,
    },
    likeContainer: {
      flexDirection: 'row',
    },
    likesText: {
      flex: 1,
      fontSize: 18,
      alignSelf: 'center',
    },
    progressBarContainer: {
      height: 10,
      margin: 10,
      borderColor: '#eeeeee',
      borderWidth: 2,
    },
    progressBar: {
      alignSelf: 'flex-start',
      flex: 1,
      backgroundColor: '#eeeeee',
    },
    viewPager: {
      flex: 1,
    },
    title:{

      fontSize:20,
      marginBottom:8,
      textAlign:'center'
    },
    year:{
      textAlign:'center',
    },

    thumbnail:{
      flex: 1,
      justifyContent:'flex-end',
      alignItems:'center',
      paddingBottom:50,
      height: 240,
    },
  });
