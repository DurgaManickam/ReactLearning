/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';

class Componentone extends Component{
  render(){
    return(
      <Text>Displaying {this.props.name} </Text>
    );
  }
}

class ComponentTwo extends Component{
  render(){
    return(
      <View style={{alignItems: 'center',backgroundColor: 'blue'}}>
        <Componentone name='ss'/>
        <Componentone name='dDdDd'/>
        <Componentone name='MM'/>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactTestProject',()=> ComponentTwo)

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class ReactTestProject extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('ReactTestProject', () => ReactTestProject);



// class ReactTest extends Component{
//   render() {
//     var pic = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     return (<Image source={{uri :pic}} style={{width:190,height:300}}/>);
//   }
// }

// AppRegistry.registerComponent('ReactTestProject',() =>ReactTest);
