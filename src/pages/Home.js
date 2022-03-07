import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Ignite</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
