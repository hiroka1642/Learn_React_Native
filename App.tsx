import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { UserListScreen } from "./screens";

export type RootStackParamList = {
  UserListScreen: undefined;
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
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
