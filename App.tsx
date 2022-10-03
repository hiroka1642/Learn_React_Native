import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { UserData, UserDetailsScreen, UserListScreen } from "./screens";

export type RootStackParamList = {
  UserListScreen: undefined;
  UserDetailsScreen: {
    userdata: UserData | null;
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
            userdata: null,
          }}
          options={{ title: "UserDetails" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
