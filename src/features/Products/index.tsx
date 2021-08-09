
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

const SettingsStack = createNativeStackNavigator();

function ProductsScreen({navigation}: any) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Products </Text>
        
      </View>
    );
  }
  
function ProductsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Products Details" component={ProductsScreen} />
    </SettingsStack.Navigator>
  );
}

export default ProductsStackScreen;