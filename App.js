import * as React from 'react';
import { Text, View, Button,TouchableOpacity, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './Screens/WriteStoryScreen';
import ReadStoryScreen from './Screens/ReadStoryScreen'; 

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
      <WriteStoryScreen/>
      <ReadStoryScreen/>
      </View>
    );
  }
}

const tabNavigator = createBottomTabNavigator({
  WriteStoryScreen : {Screen : WriteStoryScreen},
  ReadStoryScreen : {Screen : ReadStoryScreen}
})

defaultavigationOptions : ({navigation}) => ({
  tabBarIcon: ()=>{
    const routename = navigation.state.routename
    if(routename === 'WriteStoryScreen'){
        return(
          <image
          source={require("./assets/write.png")}
          />
        )
    }
    else if(routename === "ReadBookScreen"){
      return(
        <image
        source={require("./assets/read.png")}
        />
      )
    }
  }
})


const switchNavigator = createSwitchNavigator({
    WriteStoryScreen:WriteStoryScreen,
    tabNavigator : tabNavigator
})

const appContainer = createAppContainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
