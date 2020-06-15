import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../styles/';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.textLarge, styles.fontBold]}>Welcome!</Text>
      <Text style={styles.mb15}>
        Do you know that we have a profile screen? 😱
      </Text>
      <Button
        title="Take me there!"
        onPress={() =>
          navigation.navigate('Profile', {
            name: 'Dimitri',
          })
        }
      />
    </View>
  );
}

export default Home;
