import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const TabBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>YesNoGame</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 52,
    backgroundColor: '#ED5966',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 600,
  },
});
