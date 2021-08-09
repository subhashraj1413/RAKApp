import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

const LocateUsStack = createNativeStackNavigator();

function LocateUsScreen({navigation}: any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Locate Us </Text>
    </View>
  );
}

function LocateUsStackScreen() {
  return (
    <LocateUsStack.Navigator>
      <LocateUsStack.Screen name="Locate Us" component={LocateUsScreen} />
    </LocateUsStack.Navigator>
  );
}

export default LocateUsStackScreen;
