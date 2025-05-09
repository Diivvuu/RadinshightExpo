import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SecondScreen from './screens/SecondScreen';
import ErrorBoundary from '@/app/_components/ErrorBoundary';
import { ErrorProvider } from '@/app/_components/ErrorContext';
import Header from './_components/Header';
import FileScreen from '@/app/screens/FileScreen';
import SelectView from '@/app/screens/SelectView';
import Toast from 'react-native-toast-message';
import Footer from './_components/Footer';

Stack = createStackNavigator();

const RootLayout = () => {
  return (
    <ErrorProvider>
      <ErrorBoundary>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="home"
            component={SecondScreen}
            // options={{
            // headerShown: true,
            // header: () => <Header title="Home" />,
            // }}
          />
          <Stack.Screen name="selectView" component={SelectView} />
          <Stack.Screen name="webview" component={FileScreen} />
        </Stack.Navigator>
        <Footer />
        <Toast swipeable position="bottom" />
      </ErrorBoundary>
    </ErrorProvider>
  );
};

export default RootLayout;
