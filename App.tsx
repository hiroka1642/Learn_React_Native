import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import * as React from "react";
import { Button, View } from "react-native";
import { FlatListBasics } from "./components/FlatListBasics";
import { SectionListBasics } from "./components/SectionListBasics";

export type RootStackParamList = {
  Home: undefined;
  FlatListBasics: undefined;
  SectionListBasics: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to FlatListBasics"
        onPress={() => navigation.navigate("FlatListBasics")}
      />
      <Button
        title="Go to SectionListBasics"
        onPress={() => navigation.navigate("SectionListBasics")}
      />
    </View>
  );
};

export const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <RootStack.Screen name="FlatListBasics" component={FlatListBasics} />
        <RootStack.Screen
          name="SectionListBasics"
          component={SectionListBasics}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
