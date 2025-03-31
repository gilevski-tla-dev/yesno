import {Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

export const CardDetails = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>CardDetails</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
};

// const styles = StyleSheet.create({});
