import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../styles/';

function Profile({ route, navigation }) {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={[styles.textLarge, styles.textCenter]}>
        My name is <Text style={styles.fontBold}>{name}</Text>
      </Text>
      <Text style={styles.mb15}>and I like memes.</Text>
      <Button
        title="Take me home!"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default Profile;
