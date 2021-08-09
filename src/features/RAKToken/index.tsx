
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

const RAKTokenStack = createNativeStackNavigator();

function RAKTokenScreen({navigation}: any) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>RAK Token </Text>
        
      </View>
    );
  }
  
function RAKTokenStackScreen() {
  return (
    <RAKTokenStack.Navigator>
      <RAKTokenStack.Screen name="RAK Token" component={RAKTokenScreen} />
    </RAKTokenStack.Navigator>
  );
}

export default RAKTokenStackScreen;