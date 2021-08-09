import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoneyWallet from './core/icons/MoneyWallet';
import ProductsStackScreen from './features/Products';
import LiveChatStackScreen from './features/LiveChat';
import LocateUsStackScreen from './features/LocateUs';
import HomeStack from './features/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RAKTokenStackScreen from './features/RAKToken';
import * as Routes from './navigator/routes';
import Enter from './core/icons/Enter';
import {withTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppContainer() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Routes.ROUTE_HOME_SCREEN}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Landing">
            {() => (
              <Tab.Navigator
                screenOptions={{
                  tabBarStyle: {borderTopColor: '#cdcdcd'},
                }}>
                <Tab.Screen
                  name={Routes.ROUTE_HOME_SCREEN}
                  component={HomeStack}
                  options={({route}) => {
                    return {
                      tabBarIcon: ({color}: {color: string}) => (
                        <Enter fill={color} width={22} height={22} />
                      ),
                      headerShown: false,
                    };
                  }}
                />
                <Tab.Screen
                  name={Routes.ROUTE_PRODUCTS_SCREEN}
                  component={ProductsStackScreen}
                  options={({route}) => {
                    return {
                      tabBarIcon: ({color}: {color: string}) => (
                        <MoneyWallet fill={color} width={22} height={22} />
                      ),
                      headerShown: false,
                    };
                  }}
                />
                <Tab.Screen
                  name={Routes.ROUTE_LIVE_CHAT_SCREEN}
                  component={LiveChatStackScreen}
                  options={({route}) => {
                    return {
                      tabBarIcon: (props: any) => (
                        <Icon {...props} name="chat-processing-outline" />
                      ),
                      headerShown: false,
                    };
                  }}
                />
                <Tab.Screen
                  name={Routes.ROUTE_RAK_TOKEN_SCREEN}
                  component={RAKTokenStackScreen}
                  options={({route}) => {
                    return {
                      tabBarIcon: (props: any) => (
                        <Icon {...props} name="cellphone-key" />
                      ),
                      headerShown: false,
                    };
                  }}
                />
                <Tab.Screen
                  name={Routes.ROUTE_LOCATE_US_SCREEN}
                  component={LocateUsStackScreen}
                  options={({route}) => {
                    return {
                      tabBarIcon: (props: any) => (
                        <Icon {...props} name="map-marker-radius-outline" />
                      ),
                      headerShown: false,
                    };
                  }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default withTheme(AppContainer);
