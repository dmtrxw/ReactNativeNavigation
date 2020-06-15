import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/';

function Settings() {
  return (
    <View style={styles.container}>
      <Text style={[styles.textLarge, styles.fontBold]}>Beep Boop</Text>
    </View>
  );
}

export default Settings;
