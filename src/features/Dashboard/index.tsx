import * as React from 'react';
import {ImageBackground, View} from 'react-native';
import {Card, Button, Avatar, Paragraph, Surface} from 'react-native-paper';

import {useSelector} from 'react-redux';
import {styles} from '../../common/styles';

const DEFAULT_BANNER_IMG = require('../../core/images/RAKBanner.png');

function DashBoardScreen({navigation}: any) {
  const {
    loading = false,
    response: userInfo = null,
    error,
  } = useSelector((state: any) => state.root.userInfo);
  const LeftContent = (props: any) => (
    <Avatar.Text {...props} label={userInfo.username.substring(0, 2)} />
  );

  if (userInfo && !loading) {
    return (
      <>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <View style={styles.dashBoardContainer}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={DEFAULT_BANNER_IMG}
                resizeMode="cover"
                style={styles.dashBoardBannerCardBG}>
                <View
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 16,
                  }}>
                  <Card elevation={3} mode="elevated" style={{padding: 10}}>
                    <Card.Title
                      title={`Welcome ${userInfo.first_name} ${userInfo.last_name} !`}
                      subtitle="A/C No: 111555555555"
                      left={LeftContent}
                    />
                    <Card.Actions>
                      <Button>
                        Current Account:{' '}
                        <Paragraph style={{fontWeight: 'bold'}}>
                          AED 35000.00
                        </Paragraph>
                      </Button>
                    </Card.Actions>
                  </Card>
                </View>
              </ImageBackground>
            </View>
            <View style={{flex: 1, paddingVertical: 10, paddingHorizontal: 16}}>
              <Card
                elevation={3}
                mode="elevated"
                style={{backgroundColor: '#B3264D', padding: 10}}>
                <Card.Title
                  title={`Loan Account`}
                  subtitle="A/C No: P777111555555555"
                  titleStyle={{color: '#fff'}}
                  subtitleStyle={{color: '#fff'}}
                />
                <Card.Content>
                  <Paragraph style={{fontWeight: 'bold', color: '#fff'}}>
                    AED 185000.00
                  </Paragraph>
                </Card.Content>
                <Card.Actions style={{paddingHorizontal: 16}}>
                <Paragraph style={{fontWeight: 'bold', color: '#fff'}}>
                    EMI: AED 5130.00
                  </Paragraph>
                </Card.Actions>
              </Card>
            </View>
            <View style={{flex: 1, paddingVertical: 5, paddingHorizontal: 16}}>
              <Card elevation={3} mode="elevated" style={{backgroundColor: '#E1424E', padding: 10}}>
                <Card.Title
                  title={`Card Details`}
                  subtitle="Card No: 111555555555"
                  titleStyle={{color: '#fff'}}
                  subtitleStyle={{color: '#fff'}}
                />
                 <Card.Actions style={{paddingHorizontal: 16}}>
                <Paragraph style={{fontWeight: 'bold', color: '#fff'}}>
                Outstanding Balance: AED 5130.00
                  </Paragraph>
                </Card.Actions>
               
              </Card>
            </View>
          </View>
        </View>
      </>
    );
  } else {
    return null;
  }
}

export default DashBoardScreen;
