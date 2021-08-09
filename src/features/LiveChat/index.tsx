import React, {} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ScrollView, StyleSheet, Text} from 'react-native';

import DeviceInfo from 'react-native-device-info';

// import {getManufacturer} from 'react-native-device-info';

const LiveChatStack = createNativeStackNavigator();
// Example to Get Device Information in React Native
// https://aboutreact.com/react-native-device-info/


import {
  useBatteryLevel,
  useBatteryLevelIsLow,
  usePowerState,
  useFirstInstallTime,
  useDeviceName,
  useHasSystemFeature,
  useIsEmulator,
  useManufacturer,

} from 'react-native-device-info';

const DeviceInfoHooks = (props :any) => {
  const manufacturer = useManufacturer()
  const batteryLevel = useBatteryLevel();
  const batteryLevelIsLow = useBatteryLevelIsLow();
  const powerState = usePowerState();
  const firstInstallTime = useFirstInstallTime();
  const deviceName = useDeviceName();
  const hasSystemFeature = 
    useHasSystemFeature('amazon.hardware.fire_tv');
  const isEmulator = useIsEmulator();
  const IpAddress = DeviceInfo.getIpAddress().then((ip) => {
   return ip
  });

  const deviceJSON = {
    manufacturer,
    batteryLevel,
    batteryLevelIsLow,
    powerState,
    firstInstallTime,
    deviceName,
    hasSystemFeature,
    isEmulator,
    IpAddress
  };
  return (
    <>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <ScrollView>
        <Text style={styles.instructions}>
          {JSON.stringify(deviceJSON, null, '  ')}
        </Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
  },
});

// const DeviceInfoAsync = (props: any) => {
//   const [asyncDeviceInfo, setAsyncDeviceInfo] = useState<any>({});
//   const [expanded, setExpanded] = React.useState(true);

//   useEffect(() => {
//     getDataAsync();
//   }, []);

//   const getDataAsync = async () => {
//     let deviceJSON: any = {};
//     try {
//       deviceJSON.manufacturer = await getManufacturer();
//       deviceJSON.buildId = await DeviceInfo.getBuildId();
//       deviceJSON.isCameraPresent = await DeviceInfo.isCameraPresent();
//       deviceJSON.deviceName = await DeviceInfo.getDeviceName();
//       deviceJSON.usedMemory = await DeviceInfo.getUsedMemory();
//       deviceJSON.userAgent = await DeviceInfo.getUserAgent();
     
//       deviceJSON.serialNumber = await DeviceInfo.getSerialNumber();
//       deviceJSON.androidId = await DeviceInfo.getAndroidId();
//       deviceJSON.IpAddress = await DeviceInfo.getIpAddress();
//       // For MacAddress add android.permission.ACCESS_WIFI_STATE
//       deviceJSON.MacAddress = await DeviceInfo.getMacAddress();
//       // For phoneNumber add android.permission.READ_PHONE_STATE
//       deviceJSON.phoneNumber = await DeviceInfo.getPhoneNumber();
     
//       try {
//         deviceJSON.deviceToken = await DeviceInfo.getDeviceToken();
//       } catch (e) {
//         console.log('Unable to get device token.');
//       }
//     } catch (e) {
//       console.log('Trouble getting device info ', e);
//     }
//     setAsyncDeviceInfo(asyncDeviceInfo);
//   };

//   const handlePress = () => setExpanded(!expanded);

//   return (
//     <>
//       <ScrollView>
      
//         {asyncDeviceInfo && (
//           <List.Section titleStyle={{fontSize: 18, fontWeight: '500'}} title="Device and Network Info">
//             <List.Accordion
//               title="Device Details"
//               left={props => <List.Icon {...props} icon="folder" />}>
//               <List.Item
//                 titleStyle={{fontSize: 14}}
//                 descriptionStyle={{
//                   fontSize: 18,
//                   color: '#c2004a',
//                   paddingVertical: 5,
//                   fontWeight: '600',
//                 }}
//                 title={`Device`}
//                 description={asyncDeviceInfo.deviceName}
//               />

//               <List.Item
//                 titleStyle={{fontSize: 14}}
//                 descriptionStyle={{
//                   fontSize: 18,
//                   color: '#c2004a',
//                   paddingVertical: 5,
//                   fontWeight: '600',
//                 }}
//                 title={`Manufacturer`}
//                 description={asyncDeviceInfo.manufacturer}
//               />
//             </List.Accordion>

//             <List.Accordion
//               title="Controlled Accordion"
//               left={props => <List.Icon {...props} icon="folder" />}
//               expanded={expanded}
//               onPress={handlePress}>
//               <List.Item title="First item" />
//               <List.Item title="Second item" />
//             </List.Accordion>
//           </List.Section>
//         )}
//       </ScrollView>
//     </>
//   );
// };
// const styles = StyleSheet.create({
//   titleStyle: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'left',
//     color: '#333333',
//     margin: 5,
//   },
//   listItemTitleStyles: {
//     fontSize: 18,
//     color: '#c2004a',
//     paddingVertical: 5,
//     fontWeight: '600',
//   },
// });

function LiveChatStackScreen() {
  return (
    <LiveChatStack.Navigator>
      <LiveChatStack.Screen name="Live Chat" component={DeviceInfoHooks} />
    </LiveChatStack.Navigator>
  );
}

export default LiveChatStackScreen;
