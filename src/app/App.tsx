import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import Layout from './Layout';
import Router from './Router';

const App = () => {
  return (
    <SafeAreaProvider>
      <Layout>
        <Router />
      </Layout>
    </SafeAreaProvider>
  );
};

export default App;
