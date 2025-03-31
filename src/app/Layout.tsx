import {StyleSheet, ViewProps, StatusBar, View} from 'react-native';
import React from 'react';
import {TabBar} from '../widgets/TabBar';

interface LayoutProps extends ViewProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <View style={styles.layout}>
      <StatusBar barStyle="light-content" />
      <TabBar />
      {props.children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#ED5966',
  },
});
