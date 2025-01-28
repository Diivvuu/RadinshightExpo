import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import SecondScreen from "./screens/SecondScreen";
import ErrorBoundary from "@/app/_components/ErrorBoundary";
import { ErrorProvider } from "@/app/_components/ErrorContext";
import Header from "./_components/Header";
import FileScreen from "@/app/screens/FileScreen";

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
          <Stack.Screen name="webview" component={FileScreen} />
        </Stack.Navigator>
      </ErrorBoundary>
    </ErrorProvider>
  );
};

export default RootLayout;
