import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { UserDetailsScreen, UserListScreen } from "./screens";

export type RootStackParamList = {
  UserListScreen: undefined;
  UserDetailsScreen: {
    userdata: {
      name: string | undefined;
      thumbnail: string | undefined;
      email: string | undefined;
      age: string | undefined;
    };
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="UserListScreen">
        <RootStack.Screen
          name="UserListScreen"
          component={UserListScreen}
          options={{ title: "UserList" }}
        />
        <RootStack.Screen
          name="UserDetailsScreen"
          component={UserDetailsScreen}
          initialParams={{
            userdata: {
              name: undefined,
              thumbnail: undefined,
              email: undefined,
              age: undefined,
            },
          }}
          options={{ title: "UserDetails" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
