import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../theme/colors';
import NotificationButton from './components/NotificationButton';

type NotificationSelected = 'alarm' | 'no-alarm' | 'cycle';

export default function AlarmHomeScreen() {
  const [notificationSelected, setNotificationSelected] =
    useState<NotificationSelected>('alarm');

  const setNotificationOnPress = (type: NotificationSelected) => () =>
    setNotificationSelected(type);

  return (
    <View style={styles.container}>
      <View style={styles.notificationSettings}>
        <NotificationButton
          source={require('../../assets/home_nav.png')}
          title="アラーム"
          text="test"
          isOn={notificationSelected === 'alarm'}
          onPress={setNotificationOnPress('alarm')}
        />
        <View style={styles.notificationSettingsSpace} />
        <NotificationButton
          source={require('../../assets/home_nav.png')}
          title="アラームなし"
          text="test"
          isOn={notificationSelected === 'no-alarm'}
          onPress={setNotificationOnPress('no-alarm')}
        />
        <View style={styles.notificationSettingsSpace} />
        <NotificationButton
          source={require('../../assets/home_nav.png')}
          title="サイクル"
          text="test"
          isOn={notificationSelected === 'cycle'}
          onPress={setNotificationOnPress('cycle')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.drakGrey,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
  },
  notificationSettings: {
    flexDirection: 'row',
  },
  notificationSettingsSpace: {
    width: 8,
    height: '100%',
  },
});
