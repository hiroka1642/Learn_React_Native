import { StyleSheet, Text, View } from "react-native";

export const ListItem = () => {
  return (
    <View style={styles.container}>
      <Text>リスト</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
