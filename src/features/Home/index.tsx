import * as React from 'react';
import {ImageBackground, Text, View, Image, Alert} from 'react-native';
import {
  Card,
  TextInput,
  Button,
  ActivityIndicator,
  Colors,
} from 'react-native-paper';
import {styles} from '../../common/styles';
import * as Routes from '../../navigator/routes';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {useDispatch, useSelector} from 'react-redux';
import {fetchUserInfo} from '../../core/actionCreators/userActions';
import {userLogout} from '../../core/actionCreators/rootActions';
import DashBoardScreen from '../Dashboard';
import LoginFormScreen from '../Login';

const DEFAULT_BANNER_IMG = require('../../core/images/RAKBanner.png');
const FINGER_PRINT_IMG = require('../../core/images/finger-print.png');

function HomeScreen({navigation}: any) {
  const {error} = useSelector((state: any) => state.root.userInfo);

  return (
    <>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.bannerContainer}>
          <ImageBackground
            source={DEFAULT_BANNER_IMG}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.bannerIntroBlock}>
              <Text style={styles.bankNameText}>RAKBANK</Text>
              <Text style={styles.bankIntroText}>
                Everything you love about Digital Banking in a smarter and
                simpler design
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.loginActionContainer}>
          <Button
            style={styles.button}
            uppercase={false}
            mode="contained"
            labelStyle={{
              fontWeight: 'bold',
            }}
            onPress={() => navigation.navigate(Routes.ROUTE_LOGIN_SCREEN)}>
            Login with User ID
          </Button>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Image
              source={FINGER_PRINT_IMG}
              style={{
                resizeMode: 'contain',
                height: 28,
                width: 32,
                marginRight: 3,
              }}
            />
            <Text style={styles.quickBalanceText}>Quick Balance</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const Stack = createStackNavigator();

const LoadingScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: 100, height: 50}}
        source={require('../../core/images/logo.png')}
        resizeMode="contain"
      />
      <ActivityIndicator animating={true} color={Colors.red800} />
    </View>
  );
};
function HomeStack({navigation}: any) {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const dispatch = useDispatch();

  const {
    loading = false,
    response: userInfo = undefined,
    error,
  } = useSelector((state: any) => state.root.userInfo);

  React.useEffect(() => {
    if (userInfo) {
      setIsSignedIn(true);
    }
  }, [loading, userInfo]);

  const logOut = () => {
    dispatch(userLogout());
    setIsSignedIn(false);
  };
  if (loading) {
    return <LoadingScreen />;
  }
  // const showError = () =>
  //   Alert.alert('Sorry !', 'Please Verify you credentials !');

  // if (!loading && error) {
  //   showError();
  // }
  return (
    <React.Fragment>
      <Stack.Navigator
        initialRouteName={Routes.ROUTE_HOME_SCREEN}
        screenOptions={{
          headerTintColor: 'white',
          gestureEnabled: true,
        }}>
        {isSignedIn ? (
          <Stack.Screen
            name={Routes.ROUTE_DASHBOARD}
            component={DashBoardScreen}
            options={{
              headerRight: () => (
                <Button
                  mode="outlined"
                  icon="logout"
                  
                  style={{
                    borderColor: '#DC4659',
                    borderRadius: 25,
                    marginRight: 16,
                  }}
                  uppercase={false}
                  onPress={() => logOut()}>
                  Log Out
                </Button>
              ),
              headerLeft: () => (
                <Image
                  style={{marginLeft: 16, width: 100, height: 50}}
                  source={require('../../core/images/logo.png')}
                  resizeMode="contain"
                />
              ),
            }}
          />
        ) : (
          <Stack.Group
            screenOptions={{
              headerStyle: {backgroundColor: '#DC3A41'},
            }}>
            <Stack.Screen
              name={'HomeLanding'}
              component={HomeScreen}
              options={{
                headerTitle: '',
                headerTransparent: true,
                headerRight: () => (
                  <Button
                    style={{
                      borderRadius: 15,
                      paddingHorizontal: 15,
                      backgroundColor: '#DC4659',
                      borderColor: '#fff',
                      marginRight: 16,
                    }}
                    mode="outlined"
                    color="white"
                    uppercase={false}
                    onPress={() => console.log('test')}>
                    Register
                  </Button>
                ),
              }}
            />
            <Stack.Screen
              name={Routes.ROUTE_LOGIN_SCREEN}
              component={LoginFormScreen}
              options={{
                headerTransparent: true,
                headerBackTitleVisible: false,
                headerTitle: '',
                // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                // headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </React.Fragment>
  );
}

export default HomeStack;
