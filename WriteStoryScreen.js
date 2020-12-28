import * as React from 'react';
import { Text, View} from 'react-native'

export default class WriteStoryScreen extends React.Component{
render(){
    return(
        <View>
      <Header backgroundColor = "Yellow" 
            centerComponent = {{text:'Write Story', 
             style : {fontSize : 25,  fontWeight : 'bold',color : 'red'}}}/>
      
    <TextInput 
      placeholder = "title of the story"/>

     <TextInput
     placeholder = "author of the story"/>

<TextInput 
     placeholder = "write the story here"/>

     <Button>title = 'Submit'</Button>
         
                 </View>
    )
}
}