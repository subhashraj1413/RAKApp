import * as React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import {styles} from '../../common/styles';

import {useDispatch} from 'react-redux';
import {fetchUserInfo} from '../../core/actionCreators/userActions';

const DEFAULT_BANNER_IMG = require('../../core/images/RAKBanner.png');

function LoginFormScreen({navigation}: any) {
  const [userID, setUserID] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (userID && password) {
      const data = {
        username: userID,
        password: password,
      };

      dispatch(fetchUserInfo(data));
    }
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.loginFormContainer}>
        <View style={styles.loginFormAreaFlex}>
          <ImageBackground
            source={DEFAULT_BANNER_IMG}
            resizeMode="cover"
            style={styles.imageLoginForm}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                marginTop: 130,
                padding: 20,
              }}>
              <Card elevation={3} style={styles.inputCard}>
                <Card.Content
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                  }}>
                  <TextInput
                    label="User ID"
                    onChangeText={text => setUserID(text)}
                    value={userID}
                    style={styles.input}
                    placeholder="Enter User ID"
                    underlineColor="#E3CE85"
                  />
                </Card.Content>
              </Card>
              <Card elevation={3} style={styles.inputCard}>
                <Card.Content
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                  }}>
                  <TextInput
                    label="Password"
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Enter Password"
                    underlineColor="#E3CE85"
                    secureTextEntry={true}
                  />
                </Card.Content>
              </Card>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.loginForgetPasswordAreaFlex}>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Button
              mode="contained"
              style={styles.button}
              uppercase={false}
              disabled={!(userID && password)}
              labelStyle={styles.buttonLabel}
              onPress={() => handleLogin()}>
              Submit
            </Button>
          </View>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              flexDirection: 'row',
              minWidth: 300,
              justifyContent: 'center',
            }}>
            <Button
              mode="text"
              color="#3A383B"
              uppercase={false}
              onPress={() => console.log('Pressed')}>
              Forget User ID
            </Button>
            <Text>| </Text>
            <Button
              mode="text"
              color="#3A383B"
              uppercase={false}
              onPress={() => console.log('Pressed')}>
              Forget PassWord
            </Button>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              minWidth: 200,
              justifyContent: 'center',
            }}>
            <Button
              mode="text"
              uppercase={false}
              color="#3A383B"
              onPress={() => console.log('Pressed')}>
              Enable User ID
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginFormScreen;
